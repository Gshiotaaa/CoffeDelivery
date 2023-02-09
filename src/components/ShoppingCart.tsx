import { CurrencyDollar, MapPin, Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { Header } from "./Header";

export function ShoppingCart() {
  const { newCoffe } = useContext(ShoppingCartContext);

  const valueOfCoffes =
    newCoffe.length > 0
      ? newCoffe
          .map((coffe) => coffe.price * coffe.countProdcts)
          .reduce((acc, value) => {
            return acc + value;
          })
      : 0;

  return (
    <div className="flex flex-col gap-10 mb-10 ">
      <Header />
      <form className="flex  px-40 items-center justify-center">
        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
            <label className="font-header text-xl">Complete seu pedido</label>
            <div className="flex flex-col p-10 bg-base-card rounded-lg flex-1 gap-8">
              <div className="flex gap-2">
                <MapPin size={32} color="#C47F17" weight="bold" />
                <div className="flex flex-col">
                  <span className="text-base-subtitle">
                    Endereço de entrega
                  </span>
                  <span className="text-base-text">
                    Informa aonde deseja receber o seu pedido
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="tel"
                  placeholder="90250-440"
                  className="p-3 rounded-lg text-base-text bg-base-input w-52 placeholder:text-base-text"
                />
                <input
                  type="text"
                  placeholder="Rua João Daniel Martinelli"
                  className="p-3 rounded-lg text-base-text bg-base-input placeholder:text-base-text"
                />
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="102"
                    className="p-3 rounded-lg text-base-text bg-base-input placeholder:text-base-text "
                  />
                  <input
                    type="text"
                    placeholder="complemento"
                    className="p-3 rounded-lg text-base-text bg-base-input placeholder:text-base-text flex-1"
                  />
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Farrapos"
                    className="p-3 rounded-lg text-base-text bg-base-input placeholder:text-base-text "
                  />
                  <input
                    type="text"
                    placeholder="Porto Alegre"
                    className="p-3 rounded-lg text-base-text bg-base-input placeholder:text-base-text flex-1"
                  />
                  <input
                    type="text"
                    placeholder="RS"
                    className="p-3 rounded-lg text-base-text bg-base-input placeholder:text-base-text w-16"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col  p-10 bg-base-card rounded-lg gap-8">
              <div className="flex gap-2">
                <CurrencyDollar size={32} color="#4B2995" weight="fill" />
                <div className="flex flex-col">
                  <span className="text-base-subtitle">
                    Endereço de entrega
                  </span>
                  <span className="text-base-text">
                    Informa aonde deseja receber o seu pedido
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="p-4 bg-base-button flex-1 rounded-lg">
                  Cartão de crédito
                </button>
                <button className="p-4 bg-base-button flex-1 rounded-lg">
                  Cartão de débito
                </button>
                <button className="p-4 bg-base-button flex-1 rounded-lg">
                  Dinheiro
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="font-header text-xl mb-3">
              Cafés selecionados
            </label>
            <div className="flex flex-col gap-12  w-[488px] bg-base-card p-10 rounded-lg ">
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
                          <button>
                            <Minus color="#4B2995" weight="fill" />
                          </button>
                          <span>{coffe.countProdcts}</span>
                          <button>
                            <Plus color="#4B2995" weight="fill" />
                          </button>
                        </div>
                        <button className="flex items-center justify-center gap-1 bg-base-button rounded-lg p-2">
                          <Trash color="#4B2995" weight="light" />
                          <span>Remover</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex">
                <span>Total de entradas</span>
                <span>
                  {valueOfCoffes.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div className="flex">
                <span>Entrega</span>
                <span>R$ 3,00</span>
              </div>
              <div>
                <strong>TOTAL </strong>
                <span>
                  {valueOfCoffes.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
