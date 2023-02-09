import { MapPin } from "phosphor-react";

export function AdressForm() {
  return (
    <div className="flex flex-col p-10 bg-base-card rounded-lg  gap-8">
      <div className="flex gap-2">
        <MapPin size={32} color="#C47F17" weight="bold" />
        <div className="flex flex-col">
          <span className="text-base-subtitle">Endereço de entrega</span>
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
  );
}
