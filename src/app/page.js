"use client";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Card from "./components/card";
import { db } from "./firebase";
import { Container } from "./styled";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("date", "asc"));
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
    fetchPosts();
  }, []);

  const filterByTag = (tag) => {
    
  }

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

  return (
    <Container>
      
      <section className="card-list">
        {posts.map((post) => (
          <Card key={post.title} data={post} />
        ))}
      </section>
    </Container>
  );
}
