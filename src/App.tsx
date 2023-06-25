import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Navbar/Navbar";
import Cat from "./Categories/Cat";
import ProductItem from "./ProductItem/ProductItem";
import { Wrapper } from "./App.styles";

type Rating = {
  rate: number;
  count: number;
};
export type CartItemTypes = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  amount: number;
};
export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  // amount: number;
};
// type CategoryTypes = {
//   data: CartItemType[];
// };

const App = () => {
  const fetchProducts = async (): Promise<CartItemType[]> => {
    return await axios.get("https://fakestoreapi.com/products/").then((response) => response.data);
  };
  const [selectedCat, setSelectedCat] = useState("");
  const { data, isLoading, isError } = useQuery<CartItemType[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong</h1>;
  console.log("data && data :>> ", data && data);
  return (
    <div className="App">
      <Navbar />
      <Cat setSelectedCat={setSelectedCat} selectedCat={selectedCat} />
      <Wrapper>
        <div className="container">
          {data &&
            data
              .filter((item) => (selectedCat ? item.category === selectedCat : item))
              .map((item: CartItemType) => <ProductItem key={item.id} item={item} />)}
        </div>
      </Wrapper>
    </div>
  );
};

export default App;
