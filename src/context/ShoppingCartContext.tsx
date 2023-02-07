import { createContext, ReactNode, useState } from "react";

interface ShoppingCartContextType {
  addNewCoffeInCart: (id: string, count: number) => void;
  newCoffe: NewCoffe[];
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface NewCoffe {
  id: string;
  count: number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [newCoffe, setNewCoffe] = useState<NewCoffe[]>([]);

  function addNewCoffeInCart(id: string, count: number) {
    setNewCoffe((prevState) => [...prevState, { id, count }]);
  }

  return (
    <ShoppingCartContext.Provider value={{ addNewCoffeInCart, newCoffe }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
