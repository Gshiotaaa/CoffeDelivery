import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCart />,
  },
]);

export function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
}
