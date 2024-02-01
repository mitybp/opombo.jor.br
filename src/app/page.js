"use client";
import { Funnel } from "@phosphor-icons/react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Card from "./components/card";
import { db } from "./firebase";
import { Button, Container, Loader, Switch, TagFilter } from "./styled";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [orderInput, setOrderInput] = useState("asc");
  const [openFilter, setOpenFilter] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        let q;
        if (selectedTag === "") {
          q = query(collection(db, "posts"), orderBy("date", orderInput));
        } else {
          q = query(
            collection(db, "posts"),
            where("tag", "==", selectedTag),
            orderBy("date", orderInput)
          );
        }
        const querySnapshot = await getDocs(q);
        const newPosts = querySnapshot.docs.reverse().map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(newPosts);
      } catch (error) {
        console.error("[fetchPosts()]: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [selectedTag, orderInput]);

  const format = () => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "-")
      .toLowerCase()
      .replaceAll("?", "")
      .replaceAll("!", "")
      .replaceAll("°", "")
      .replaceAll(",", "");
  };

  const postTagsOptions = [
    "Exposição artística",
    "Ciência e filosofia",
    "Eventos",
    "Notícia",
    "Pesquisa e estatística",
    "Artigo de opinião",
    "Aula de campo",
    "Contos e crônicas",
    "Escola Por Dentro",
  ];
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

  return (
    <Container>
      {isLoading && (
        <Loader>
          <span />
        </Loader>
      )}
      <TagFilter>
        <Button
          className="header filter"
          onClick={() => setOpenFilter(!openFilter)}
        >
          <Funnel />
          <span>Filtros</span>
        </Button>
        <div className={`float ${openFilter ? "active" : ""}`}>
          <p>Filtrar pela tag:</p>
          <section>
            <button
              style={{
                backgroundColor: "#f4f4f4",
                borderColor: selectedTag == "" ? "#f4f4f4" : "#ccc",
              }}
              onClick={() => {
                setSelectedTag("");
                setOpenFilter(false);
              }}
              key={"Todas"}
            >
              Todas
            </button>
            {postTagsOptions.map((tag) => (
              <button
                style={{
                  backgroundColor:
                    selectedTag == tag ? tagColors[tag] : "#f4f4f4",
                  borderColor: selectedTag == tag ? tagColors[tag] : "#ccc",
                }}
                onClick={() => {
                  setSelectedTag(tag);
                  setOpenFilter(false);
                }}
                key={tag}
              >
                {tag}
              </button>
            ))}
          </section>
          <p>Ordem:</p>
          <div className="center">
            <span>Crescente</span>
            <Switch>
              <input
                type="checkbox"
                onClick={() =>
                  setOrderInput(orderInput == "asc" ? "desc" : "asc")
                }
              />
              <span className="slider" />
            </Switch>
            <span>Decrescente</span>
          </div>
        </div>
      </TagFilter>
      <section className="card-list">
        {posts.map((post) => (
          <Card key={post.title} data={post} />
        ))}
      </section>
    </Container>
  );
}
