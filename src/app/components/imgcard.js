"use client";
import { storage } from "@/firebase";
import { ImgCardContainer } from "@/styled";
import { listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";

const ImgCard = ({folder}) => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const listImgs = async () => {
      if (imgs == null) {
        try {
          const listRef = ref(storage, folder);
          listAll(listRef).then((res) => {
            // setImgs(res.items);
            console.log("-----------")
            console.log(res.items)
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    listImgs()
  });

  return (
    <ImgCardContainer>
      <div className="slider">
        {imgs.map((img)=>(
            {img}
        ))}
      </div>
    </ImgCardContainer>
  );
};

export default ImgCard;
