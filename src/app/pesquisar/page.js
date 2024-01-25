"use client";
import {
  collection,
  endAt,
  getDocs,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Card from "../components/card";
import { db } from "../firebase";
import { Container, Input, Loader } from "../styled";

const Pesquisar = () => {
  document.title = "Pesquisar - Jornal O Pombo";
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        let col = collection(db, "posts");
        if (input.trim() !== "") {
          let q = query(
            col,
            orderBy("title"),
            startAt(input.normalize()),
            endAt(input.normalize() + "\uf8ff")
          );

          let querySnapshot = await getDocs(q);
          const newPosts = querySnapshot.docs.reverse().map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(newPosts);
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error("[fetchPosts()]: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [input]);

  return (
    <Container>
      {isLoading && (
        <Loader>
          <span />
        </Loader>
      )}
      <h1>Pesquisar</h1>
      <Input
        placeholder="Digite o título da matéria"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {input && (
        <section className="card-list" style={{ marginTop: 10 }}>
          {posts.map((post) => (
            <Card key={post.title} data={post} />
          ))}
        </section>
      )}
    </Container>
  );
};

export default Pesquisar;
