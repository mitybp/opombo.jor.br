"use client";
import ImgCard from "@/components/imgcard";
import { storage } from "@/firebase";
import { Container } from "@/styled";
import { listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";

const Galeria = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const listFolders = async () => {
      if (media.length==0) {
        try {
          listAll(ref(storage)).then((res) => {
            let data = {
              name: "",
              imgs: [],
            };
            res.prefixes.map((folder) => {
              data.name = folder.name;
              listAll(ref(storage, folder.name)).then((res) => {
                res.items.map((img) => {
                  data.imgs = [...data.imgs, img.name]
                });
              });
            });
            setMedia([...media, data]);
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    listFolders();
  });

  return (
    <Container>
      <h1>Galeria</h1>
      {
        media&&media.map(folder=>(
            <div key={folder.name}>
                <h3>{folder.name}/</h3>
                {
                    folder.imgs.map(img=>(
                        <p>{img}</p>
                    ))
                }
            </div>
        ))
      }
    </Container>
  );
};

export default Galeria;
