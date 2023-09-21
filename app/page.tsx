import { PayPalButtons } from '@paypal/react-paypal-js';
import PaypalButtonsWrapper from '../components/paypal_buttons_wrapper';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PaypalButtonsWrapper />
    </main>
  );
}
