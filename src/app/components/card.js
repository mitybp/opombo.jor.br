"use client";
import { BookmarkSimple } from "@phosphor-icons/react";
import { Button, CardContainer } from "../styled";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Card = ({ data }) => {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("saved")).includes(data.title)){
            setIsSaved(true);
        }else{
            setIsSaved(false)
        }
    })

    if(localStorage.getItem("saved")==null) localStorage.setItem("saved", "[]")

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
  const format = (str) => {
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

    if(saved.includes(data.title)){
        saved.splice(saved.indexOf(data.title), 1);
        localStorage.setItem("saved", JSON.stringify(saved));
        setIsSaved(false);
        toast.error("Matéria removida dos salvos!")
    }else{
        saved.push(data.title);
        localStorage.setItem("saved", JSON.stringify(saved));
        setIsSaved(true);
        toast.success("Matéria adicionada aos salvos!")
    }
  }
  return (
    <CardContainer>
      <a href={`/materia/${format(data.title)}`}>{data.title}</a>
      <section>
        <div>
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
        <div>
          <Button className="small" onClick={()=>savePost()}>
            <BookmarkSimple weight={isSaved?"fill":"regular"} />
          </Button>
        </div>
      </section>
    </CardContainer>
  );
};

export default Card;
