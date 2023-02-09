import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export function Header() {
  const { newCoffe } = useContext(ShoppingCartContext);

  return (
    <header className="px-40 py-8 flex items-center justify-between max-sm:justify-center max-sm:gap-5">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center justify-center gap-3">
        <span className="p-2 flex items-center justify-center gap-[4px] font-text text-purple-dark bg-purple-light rounded-lg max-sm:hidden">
          <MapPin size={22} color="#8047F8" weight="fill" /> Porto Alegre, RS
        </span>
        <Link
          to="/ShoppingCart"
          className="flex bg-yellow-light p-2 rounded-lg hover:bg-yellow group duration-300"
        >
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
          {newCoffe.length > 0 && (
            <div className="flex items-center justify-center rounded-full bg-yellow-dark text-slate-50 font-bold w-5 h-5 absolute translate-x-5 translate-y-[-15px]">
              {newCoffe.length}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
}
