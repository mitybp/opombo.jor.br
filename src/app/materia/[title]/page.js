"use client";
import ScrollIndictor from "@/components/scrollIndicator";
import { db } from "@/firebase";
import {
  Button,
  Container,
  Loader,
  PostContainer,
  PostGoTopButton,
} from "@/styled";
import breaks from "@bytemd/plugin-breaks";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm";
import { Viewer } from "@bytemd/react";
import {
  BookmarkSimple,
  CaretUp,
  CopySimple,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Post = ({ params }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [minuteRead, setMinuteRead] = useState(0);

  const plugins = [gfm(), gemoji(), breaks()];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        let docRef = doc(db, "posts", params.title);
        let docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          let docData = docSnapshot.data();
          setData(docData);
          setMinuteRead(Math.ceil(docData.content.split(/\s/g).length / 200));
          if (
            JSON.parse(localStorage.getItem("saved")).includes(docData.title)
          ) {
            setIsSaved(true);
          } else {
            setIsSaved(false);
          }
        }
      } catch (error) {
        console.error("[fetchPosts()]: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [params]);

  let tagColors = {
    "Exposição artística": "#B9EDC8",
    "Ciência e filosofia": "#A8C6C3",
    Eventos: "#E4C9A2",
    Notícia: "#B9E8ED",
    "Pesquisa e estatística": "#FFA8B3",
    "Artigo de opinião": "#E6B9ED",
    "Aula de campo": "#A8C6FF",
    "Contos e crônicas": "#E1EDB9",
    "Escola Por Dentro": "#FEE57E",
  };

  const formatDate = (timestamp) => {
    const dateObject = timestamp.toDate();

    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();

    const newDate = `${day}/${month}/${year}`;
    return newDate;
  };

  const savePost = () => {
    let saved = JSON.parse(localStorage.getItem("saved"));

    if (saved.includes(data.title)) {
      saved.splice(saved.indexOf(data.title), 1);
      localStorage.setItem("saved", JSON.stringify(saved));
      setIsSaved(false);
      toast.error("Matéria removida dos salvos!");
    } else {
      saved.push(data.title);
      localStorage.setItem("saved", JSON.stringify(saved));
      setIsSaved(true);
      toast.success("Matéria adicionada aos salvos!");
    }
  };

  return (
    <Container>
      {isLoading && (
        <Loader>
          <span />
        </Loader>
      )}
      {data && (
        <>
          <ScrollIndictor color={tagColors[data.tag]} />
          <PostContainer>
            <h1 className="title">{data.title}</h1>
            <div className="infos">
              <p
                className="tag"
                style={{
                  backgroundColor: tagColors[data.tag],
                }}
              >
                {data.tag}
              </p>
              {formatDate(data.date)} ・ {minuteRead} min. de leitura
            </div>
            <div className="buttons" style={{ marginTop: 10 }}>
              <Button className="header square" onClick={() => savePost()}>
                <BookmarkSimple weight={isSaved ? "fill" : "regular"} />
              </Button>
              <div className="group">
                <Button className="header square"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${data.title} - O Pombo Jornal. https://opombo.jor.br${location.pathname}`
                    );
                    toast.success("Matéria copiada!");
                  }}
                >
                  <CopySimple />
                </Button>
                <Button className="header square"
                  target="_blank"
                  href={`http://twitter.com/intent/tweet?text=${data.title} - O Pombo Jornal. https://opombo.jor.br${location.pathname}`}
                >
                  <TwitterLogo />
                </Button>
                <Button className="header square"
                  target="_blank"
                  href={`http://api.whatsapp.com/send?text=${data.title} - O Pombo Jornal. https://opombo.jor.br${location.pathname}`}
                >
                  <WhatsappLogo />
                </Button>
              </div>
            </div>
          </PostContainer>
          <Viewer
            value={`${data.content}<br><br><h2>Créditos:</h2>\n${data.credits}`}
            plugins={plugins}
          />
          <PostGoTopButton href="#">
            <CaretUp />
          </PostGoTopButton>
        </>
      )}
    </Container>
  );
};

export default Post;
