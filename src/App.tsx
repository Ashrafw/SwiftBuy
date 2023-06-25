import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Navbar/Navbar";

type Rating = {
  rate: number;
  count: number;
};
export type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  amount: number;
};

type ProductsData = {
  data: CartItem[];
};

const App = () => {
  const fetchProducts = () => {
    return axios.get("https://fakestoreapi.com/products/");
  };
  const fetchCategory = () => {
    return axios.get("https://fakestoreapi.com/products/category/");
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log("data && data :>> ", data && data);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
