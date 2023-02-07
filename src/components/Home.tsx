import coffeImage from "../assets/coffe.png";
import { AdvantagePoints, AdvantagePointsProps } from "./AdvantagePoints";
import { Header } from "./Header";

const advantages: AdvantagePointsProps[] = [
  {
    text: "Compra simples e segura",
    icon: "shopping",
    background: "bg-yellow-dark",
  },
  {
    text: "Embalagem mantém café intacto",
    icon: "package",
    background: "bg-base-text",
  },
  {
    text: "Entrega rápida e rastreada",
    icon: "timer",
    background: "bg-yellow",
  },
  {
    text: "O café chega fresquinho até você",
    icon: "coffee",
    background: "bg-purple-dark",
  },
];

export function Home() {
  return (
    <div className="bg-background">
      <Header />
      <div className="flex items-center justify-center gap-14 px-40 py-24 bg-backroundHome bg-no-repeat bg-cover w-full">
        <div className="flex flex-col w-[588px] gap-16 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-header ">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="font-text text-xl">
              Com o coffe delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {advantages.map((advantage) => {
              return (
                <AdvantagePoints
                  key={advantage.icon}
                  text={advantage.text}
                  background={advantage.background}
                  icon={advantage.icon}
                />
              );
            })}
          </div>
        </div>
        <div>
          <img src={coffeImage} alt="" />
        </div>
      </div>
    </div>
  );
}
