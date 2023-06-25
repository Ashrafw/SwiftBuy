import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Navbar/Navbar";
import Cat from "./Categories/Cat";
import ProductItem from "./ProductItem/ProductItem";
import { Wrapper } from "./App.styles";
import CartModal from "./CartModal/CartModal";

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
  rating: Rating;
  amount: number;
};
// type CategoryTypes = {
//   data: CartItemType[];
// };

const App = () => {
  const fetchProducts = async (): Promise<CartItemType[]> => {
    return await axios.get("https://fakestoreapi.com/products/").then((response) => response.data);
  };
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("");
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, isError } = useQuery<CartItemType[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemSelectedAgain = cartItems.find((a) => a.id === clickedItem.id);
      console.log("isItemSelectedAgain :>> ", isItemSelectedAgain);
      if (isItemSelectedAgain) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prev, { ...clickedItem, amount: 1 }];
      }
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[]);
    });
  };
  console.log("cartItems :>> ", cartItems);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong</h1>;
  // console.log("data && data :>> ", data && data);
  return (
    <div className="App">
      <Navbar cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
      <div className="div">
        <Cat setSelectedCat={setSelectedCat} selectedCat={selectedCat} />
        {isCartOpen && (
          <CartModal
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        )}
      </div>

      <Wrapper>
        <div className="container">
          {data &&
            data
              .filter((item) => (selectedCat ? item.category === selectedCat : item))
              .map((item: CartItemType) => (
                <ProductItem key={item.id} item={item} handleAddToCart={handleAddToCart} />
              ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default App;
