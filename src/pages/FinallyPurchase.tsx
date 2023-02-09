import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export function FinnalyPurchase() {
  const { newCoffe } = useContext(ShoppingCartContext);

  const valueOfDelivery = 3;

  const valueOfCoffes =
    newCoffe.length > 0
      ? newCoffe
          .map((coffe) => coffe.price * coffe.countProdcts)
          .reduce((acc, value) => {
            return acc + value;
          })
      : 0;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-base-text">
        <span>Total de entradas</span>
        <span>
          {valueOfCoffes.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="flex justify-between text-base-text">
        <span>Entrega</span>
        <span>
          {valueOfDelivery.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="flex justify-between text-xl">
        <strong>Total</strong>
        <span>
          <strong>
            {(valueOfCoffes + valueOfDelivery).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </span>
      </div>
      <button
        type="submit"
        className="bg-yellow w-full py-3 rounded-lg text-slate-50 font-text mt-3"
      >
        CONFIRMAR PEDIDO
      </button>
    </div>
  );
}
