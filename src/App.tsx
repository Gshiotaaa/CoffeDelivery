import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { ShoppingCart } from "./components/ShoppingCart";

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
  return <RouterProvider router={router} />;
}
