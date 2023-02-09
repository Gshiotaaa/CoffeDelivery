import { AdressForm } from "../pages/AdressForm";
import { FinnalyPurchase } from "../pages/FinallyPurchase";
import { PaymentForm } from "../pages/PaymentForm";
import { Header } from "./Header";
import { ProductInCardCard } from "./ProductInCartCard";

export function ShoppingCart() {
  return (
    <div className="flex flex-col gap-10 mb-10 w-screen">
      <Header />
      <form className="flex px-40 items-center justify-center max-lg:px-0 w-full ">
        <div className="flex gap-8 justify-center w-full max-lg:flex-col max-lg:p-5">
          <div className="flex flex-col gap-3 max-lg:w-full ">
            <label className="font-header text-xl">Complete seu pedido</label>
            <div className="flex flex-col gap-3 max-lg:w-full ">
              <AdressForm />
              <PaymentForm />
            </div>
          </div>
          <div className="flex flex-col max-lg:items-center ">
            <label className=" font-header text-xl mb-3  ">
              Cafés selecionados
            </label>
            <div className="flex flex-col gap-12 w-[488px] bg-base-card p-10 rounded-lg max-lg:w-4/5  ">
              <ProductInCardCard />
              <FinnalyPurchase />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
