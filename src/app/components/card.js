"use client";
import { BookmarkSimple } from "@phosphor-icons/react";
import { Button, CardContainer } from "../styled";

const Card = ({ data }) => {
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
          <Button className="small">
            <BookmarkSimple />
          </Button>
        </div>
      </section>
    </CardContainer>
  );
};

export default Card;
