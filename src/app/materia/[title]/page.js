"use client";
import { db } from "@/firebase";
import { Container, Loader, PostContainer, PostGoTopButton } from "@/styled";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import breaks from "@bytemd/plugin-breaks";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm";
import { Viewer } from "@bytemd/react";
import ScrollIndictor from "@/components/scrollIndicator";
import { CaretUp } from "@phosphor-icons/react";

const Post = ({ params }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
          window.document.title = `${docData.title} - Jornal O Pombo`
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
              {formatDate(data.date)}
            </div>
          </PostContainer>
          <Viewer
            value={`${data.content}<br><br><h2>Créditos:</h2>\n${data.credits}`}
            plugins={plugins}
          />
          <PostGoTopButton
            href="#"
          >
            <CaretUp />
          </PostGoTopButton>
        </>
      )}
    </Container>
  );
};

export default Post;
