import React, { Dispatch, SetStateAction } from "react";
import { CatWrapper } from "./Cat.styles";

// type CatType = string[];
const Category = ["electronics", "Jewelery", "Men's clothing", "Women's clothing"];

type CatType = {
  setSelectedCat: Dispatch<SetStateAction<string>>;
  selectedCat: string;
};
const Cat = ({ setSelectedCat, selectedCat }: CatType) => {
  return (
    <CatWrapper>
      <div className="container">
        <button
          className={selectedCat === "electronics" ? "selected" : ""}
          onClick={() => setSelectedCat((prev) => (prev === "electronics" ? "" : "electronics"))}
        >
          Electronics
        </button>
        <button
          className={selectedCat === "jewelery" ? "selected" : ""}
          onClick={() => setSelectedCat((prev) => (prev === "jewelery" ? "" : "jewelery"))}
        >
          Jewelery
        </button>
        <button
          className={selectedCat === `men's clothing` ? "selected" : ""}
          onClick={() =>
            setSelectedCat((prev) => (prev === `men's clothing` ? "" : `men's clothing`))
          }
        >
          Men's clothing
        </button>
        <button
          className={selectedCat === `women's clothing` ? "selected" : ""}
          onClick={() =>
            setSelectedCat((prev) => (prev === `women's clothing` ? "" : `women's clothing`))
          }
        >
          Women's clothing
        </button>
      </div>
    </CatWrapper>
  );
};

export default Cat;
