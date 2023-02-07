import { Minus, Plus } from "phosphor-react";
import { useContext, useState } from "react";
import data from "../../data.json";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export function ShoppingCart() {
  const { newCoffe } = useContext(ShoppingCartContext);
  const [coffes, setCoffes] = useState(data.products);

  return (
    <div className="flex flex-col items-center justify-center">
      {coffes
        .filter((coffe) => newCoffe.some((ncoffe) => ncoffe.id === coffe.id))
        .map((coffe) => {
          return (
            <div className="flex flex-col w-96">
              <div className="flex gap-5 w-full">
                <img src={coffe.photo} alt="" />
                <div className="flex flex-col items-center justify-center gap-3 w-full">
                  <div className="flex justify-between w-full">
                    <span>{coffe.name}</span>
                    <span>
                      <span>
                        R${" "}
                        <strong className="font-header">
                          {coffe.price.toFixed(2).toString().replace(".", ",")}
                        </strong>
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-1 bg-base-button rounded-lg px-2 py-2">
                    <button className="text-purple ">
                      <Minus size={16} />
                    </button>
                    <span>7777</span>
                    <button className="text-purple ">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
