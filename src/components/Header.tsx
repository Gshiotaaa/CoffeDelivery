import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="px-40 py-8 flex items-center justify-between">
      <img src={logo} alt="" />
      <div className="flex items-center justify-center gap-3">
        <span className="p-2 flex items-center justify-center gap-[4px] font-text text-purple-dark bg-purple-light rounded-lg">
          <MapPin size={22} color="#8047F8" weight="fill" /> Porto Alegre, RS
        </span>
        <Link to="/ShoppingCart" className="bg-yellow-light p-2 rounded-lg">
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </Link>
      </div>
    </header>
  );
}
