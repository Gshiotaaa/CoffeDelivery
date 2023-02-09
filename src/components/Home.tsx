import coffeImage from "../assets/coffe.png";
import { AdvantagePoints, AdvantagePointsProps } from "./AdvantagePoints";
import { Coffes } from "./Coffes";
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
      <div className="flex items-center justify-center gap-14 px-40 py-24 bg-backroundHome bg-no-repeat bg-cover w-full max-lg:flex-col max-sm:px-0">
        <div className="flex flex-col w-[588px] gap-16 max-sm:w-4/5 max-sm:px-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-header ">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="font-text text-xl">
              Com o coffe delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 ">
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
        <div className="max-sm:hidden">
          <img src={coffeImage} alt="" />
        </div>
      </div>
      <h1 className="px-40 text-3xl font-header max-sm:text-center max-sm:px-0">
        Nossos cafés
      </h1>
      <Coffes />
    </div>
  );
}
