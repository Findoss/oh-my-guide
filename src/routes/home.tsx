import { OrderForm } from '../order/index';
import { Header } from '../header/index';
import { Footer } from '../footer/index';

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full">
      <Header />
      <OrderForm />
      <Footer />
    </div>
  );
}
