import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { NewCoffe, ShoppingCartContext } from "../context/ShoppingCartContext";

interface CardCoffesProps {
  id: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
  photo: string;
}

export function CardCoffes({
  id,
  tags,
  name,
  description,
  price,
  photo,
}: CardCoffesProps) {
  const [countProdcts, setCountProducts] = useState(1);

  const { addNewCoffeInCart } = useContext(ShoppingCartContext);

  function handleAddNewCoffeInShoppingCart({
    id,
    name,
    price,
    photo,
    countProdcts,
  }: NewCoffe) {
    addNewCoffeInCart({ id, name, price, photo, countProdcts });
    setCountProducts(1);
  }

  return (
    <div className="flex flex-col items-center justify-center w-64 p-2 gap-5 bg-base-card rounded-tr-3xl rounded-bl-3xl">
      <img src={photo} alt="" className="h-28 w-28 mt-[-30px]" />
      <div className="flex gap-3">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className=" text-xs bg-yellow-light text-yellow-dark rounded-lg p-1"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 items-center justify-center text-center ">
        <span className="text-xl font-header">{name}</span>
        <span className="text-base-label">{description}</span>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <span>
          R${" "}
          <strong className="font-header">
            {price.toFixed(2).toString().replace(".", ",")}
          </strong>
        </span>
        <div className="flex gap-2">
          <div className="flex gap-1 bg-base-button rounded-lg px-2 py-2">
            <button
              onClick={() => setCountProducts(countProdcts - 1)}
              className="text-purple "
            >
              <Minus size={16} />
            </button>
            <span>{countProdcts}</span>
            <button
              onClick={() => setCountProducts(countProdcts + 1)}
              className="text-purple "
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            className="bg-purple-dark p-2 rounded-lg hover:bg-purple duration-300"
            onClick={() =>
              handleAddNewCoffeInShoppingCart({
                id,
                name,
                price,
                photo,
                countProdcts,
              })
            }
          >
            <ShoppingCart size={20} color="white" weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
