"use client";
import { useState, useEffect } from "react";
import { Container, Loader } from "../styled";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Card from "../components/card";

const Salvos = () => {
  window.document.title = "Salvos - Jornal O Pombo";
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        let saved = JSON.parse(localStorage.getItem("saved")) || [];
        let col = collection(db, "posts");
        if (saved.length > 0) {
          let q = query(col, where("title", "in", saved));

          let querySnapshot = await getDocs(q);
          const newPosts = querySnapshot.docs.reverse().map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(newPosts);
        } else if (posts.length != 0) {
          setPosts([]);
        }
      } catch (error) {
        console.error("[fetchPosts()]: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Container>
      {isLoading && (
        <Loader>
          <span />
        </Loader>
      )}
      <h1>Salvos</h1>
      {posts.length > 0 ? (
        <section className="card-list">
          {posts.map((post) => (
            <Card key={post.title} data={post} />
          ))}
        </section>
      ) : (
        <p>Você não salvou nenhuma matéria ainda!</p>
      )}
    </Container>
  );
};

export default Salvos;
