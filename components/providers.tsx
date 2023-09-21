'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { ReactElement } from 'react';

export default function Providers({ children }: { children: ReactElement }) {
  return (
    <PayPalScriptProvider
      options={{
        dataNamespace: 'paypal_sdk',
        enableFunding: 'paypal,card',
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        components: 'buttons',
        currency: 'EUR',
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
