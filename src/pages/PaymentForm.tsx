import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

export function PaymentForm() {
  return (
    <div className="flex flex-col p-10 bg-base-card rounded-lg gap-8 w-[640px] max-lg:w-full ">
      <div className="flex gap-2">
        <CurrencyDollar size={32} color="#4B2995" weight="fill" />
        <div className="flex flex-col">
          <span className="text-base-subtitle">Endereço de entrega</span>
          <span className="text-base-text">
            Informa aonde deseja receber o seu pedido
          </span>
        </div>
      </div>
      <div className="flex gap-3 text-xs text-base-text">
        <button
          type="button"
          className="flex items-center justify-center gap-3 p-4 bg-base-button flex-1 rounded-lg border focus:bg-purple-light focus:border-purple-dark"
        >
          <CreditCard size={16} color="#8047F8" weight="light" />
          CARTÃO DE CRÉDITO
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-3 p-4 bg-base-button flex-1 rounded-lg border focus:bg-purple-light focus:border-purple-dark"
        >
          <Bank size={16} color="#8047F8" weight="light" />
          CARTÃO DE DÉBITO
        </button>
        <button
          type="button"
          className="flex items-center  gap-3 p-4 bg-base-button  rounded-lg border focus:bg-purple-light focus:border-purple-dark"
        >
          <Money size={16} color="#8047F8" weight="light" />
          DINHEIRO
        </button>
      </div>
    </div>
  );
}
