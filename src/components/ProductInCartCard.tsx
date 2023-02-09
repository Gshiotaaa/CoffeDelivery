import { Minus, Plus, Storefront, Trash } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export function ProductInCardCard() {
  const { setNewCoffe, newCoffe } = useContext(ShoppingCartContext);

  function handleRemoveCoffe(id: string) {
    setNewCoffe((prevState) => prevState.filter((coffe) => coffe.id !== id));
  }

  function addCoffes(id: string) {
    setNewCoffe((prevState) =>
      prevState.map((coffe) => {
        if (coffe.id === id) {
          return { ...coffe, countProdcts: coffe.countProdcts + 1 };
        } else {
          return coffe;
        }
      })
    );
  }

  function removeCoffes(id: string) {
    setNewCoffe((prevState) =>
      prevState.map((coffe) => {
        if (coffe.id === id) {
          return { ...coffe, countProdcts: coffe.countProdcts - 1 };
        } else {
          return coffe;
        }
      })
    );
  }

  return (
    <div className="flex flex-col gap-12">
      {newCoffe.length > 0 ? (
        newCoffe.map((coffe) => {
          return (
            <div className="flex gap-5 border-base-button border-b-2 pb-10">
              <img src={coffe.photo} alt="" className="w-16 h-16" />
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <span className="text-base-subtitle font-text font-bold">
                    {coffe.name}
                  </span>
                  <span>
                    <strong className="font-header">
                      {(coffe.price * coffe.countProdcts).toLocaleString(
                        "pt-BR",
                        {
                          style: "currency",
                          currency: "BRL",
                        }
                      )}
                    </strong>
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1 p-2 bg-base-button rounded-lg ">
                    <button
                      type="button"
                      onClick={() => removeCoffes(coffe.id)}
                      disabled={coffe.countProdcts < 1}
                    >
                      <Minus color="#4B2995" weight="fill" />
                    </button>
                    <span>{coffe.countProdcts}</span>
                    <button onClick={() => addCoffes(coffe.id)} type="button">
                      <Plus color="#4B2995" weight="fill" />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1 bg-base-button rounded-lg p-2 hover:bg-purple hover:text-slate-50 duration-300"
                    onClick={() => handleRemoveCoffe(coffe.id)}
                  >
                    <Trash color="#4B2995" weight="light" />
                    <span>Remover</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex items-center">
          <span className="font-text text-xl">
            Ainda não temos nenhum produto no carrinho, vamos adicionar?
          </span>
          <Link to="/">
            <Storefront size={32} color="#4B2995" weight="bold" />
          </Link>
        </div>
      )}
    </div>
  );
}
