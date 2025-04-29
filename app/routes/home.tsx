import type { Route } from './+types/home';
import { OrderForm } from '../order/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Oh my GUIDE' },
    { name: 'description', content: 'Oh my GUIDE' },
  ];
}

export default function Home() {
  return <OrderForm />;
}
