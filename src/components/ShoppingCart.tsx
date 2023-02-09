import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { AdressForm } from "../pages/adressForm";
import { FinnalyPurchase } from "../pages/FinallyPurchase";
import { PaymentForm } from "../pages/PaymentForm";
import { Header } from "./Header";

export function ShoppingCart() {
  const { newCoffe, setNewCoffe } = useContext(ShoppingCartContext);

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
    <div className="flex flex-col gap-10 mb-10 ">
      <Header />
      <form className="flex px-40 items-center justify-center">
        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
            <label className="font-header text-xl">Complete seu pedido</label>
            <div className="flex flex-col gap-3">
              <AdressForm />
              <PaymentForm />
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="font-header text-xl mb-3">
              Cafés selecionados
            </label>
            <div className="flex flex-col gap-12 w-[488px] bg-base-card p-10 rounded-lg ">
              {newCoffe.map((coffe) => {
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
                          <button
                            onClick={() => addCoffes(coffe.id)}
                            type="button"
                          >
                            <Plus color="#4B2995" weight="fill" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center gap-1 bg-base-button rounded-lg p-2"
                          onClick={() => handleRemoveCoffe(coffe.id)}
                        >
                          <Trash color="#4B2995" weight="light" />
                          <span>Remover</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <FinnalyPurchase />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
