"use client";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Card from "./components/card";
import { db } from "./firebase";
import { Container, TagFilter } from "./styled";
import toast from "react-hot-toast";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let q;
        if(selectedTag===""){
          q = query(collection(db, "posts"), orderBy("date", "asc"));
        }else{
          q = query(collection(db, "posts"), where("tag", "==", selectedTag), orderBy("date", "asc"));
        }
        const querySnapshot = await getDocs(q);
        const newPosts = querySnapshot.docs.reverse().map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(newPosts);
      } catch (error) {
        console.error("[fetchPosts()]: ", error);
      }
    };
    fetchPosts()
  }, [selectedTag]);

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
      <p style={{ fontSize: 20 }}>Filtrar por tag:</p>
      <TagFilter>
        <button
          style={{
            borderColor: selectedTag == "" ? "#f4f4f4" : "#ccc",
          }}
          onClick={() => {
            setSelectedTag("");
          }}
          key={"Todas"}
        >
          Todas
        </button>
        {postTagsOptions.map((tag) => (
          <button
            style={{
              backgroundColor: selectedTag == tag ? tagColors[tag] : "#f4f4f4",
              borderColor: selectedTag == tag ? tagColors[tag] : "#ccc",
            }}
            onClick={() => {
              setSelectedTag(tag);
            }}
            key={tag}
          >
            {tag}
          </button>
        ))}
      </TagFilter>
      <section className="card-list">
        {posts.map((post) => (
          <Card key={post.title} data={post} />
        ))}
      </section>
    </Container>
  );
}
