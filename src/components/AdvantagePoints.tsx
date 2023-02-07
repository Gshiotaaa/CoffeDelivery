import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

const icons = {
  shopping: ShoppingCart,
  timer: Timer,
  package: Package,
  coffee: Coffee,
};

export interface AdvantagePointsProps {
  text: string;
  icon: keyof typeof icons;
  background: string;
}

export function AdvantagePoints({
  text,
  icon,
  background,
}: AdvantagePointsProps) {
  const IconComponent = icons[icon];

  return (
    <span className="flex items-center gap-3">
      <div
        className={
          "flex items-center justify-center p-2 rounded-full" + " " + background
        }
      >
        <IconComponent size={16} weight="fill" color="white" />
      </div>
      {text}
    </span>
  );
}
