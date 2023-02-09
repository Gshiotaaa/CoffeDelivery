import { createContext, ReactNode, useState } from "react";

interface ShoppingCartContextType {
  addNewCoffeInCart: (data: NewCoffe) => void;
  newCoffe: NewCoffe[];
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export interface NewCoffe {
  id: string;
  name: string;
  price: number;
  photo: string;
  countProdcts: number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [newCoffe, setNewCoffe] = useState<NewCoffe[]>([]);

  function addNewCoffeInCart({
    id,
    name,
    price,
    photo,
    countProdcts,
  }: NewCoffe) {
    const coffeExists = newCoffe.find((coffe) => coffe.id === id);

    if (coffeExists) {
      setNewCoffe((prevState) =>
        prevState.map((coffe) => {
          if (coffe.id === id) {
            return {
              ...coffe,
              countProdcts: coffe.countProdcts + countProdcts,
            };
          }
          return coffe;
        })
      );
    } else {
      setNewCoffe((prevState) => [
        ...prevState,
        { id, name, price, photo, countProdcts },
      ]);
    }
  }

  return (
    <ShoppingCartContext.Provider value={{ addNewCoffeInCart, newCoffe }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
