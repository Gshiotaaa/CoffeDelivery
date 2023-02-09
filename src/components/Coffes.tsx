import { useState } from "react";
import data from "../../data.json";
import { CardCoffes } from "./CardCoffes";

export function Coffes() {
  const [coffes, setCoffes] = useState(data.products);

  return (
    <div className="flex items-center justify-center px-40 py-14 max-sm:w-5/5 max-sm:px-0">
      <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {coffes.map((coffe) => {
          return (
            <CardCoffes
              key={coffe.id}
              name={coffe.name}
              photo={coffe.photo}
              price={coffe.price}
              tags={coffe.tags}
              description={coffe.description}
              id={coffe.id}
            />
          );
        })}
      </div>
    </div>
  );
}
