'use client';

import { PayPalButtons } from '@paypal/react-paypal-js';

import {
  CreateOrderActions,
  CreateOrderData,
  PurchaseItem,
  Payer,
  OnApproveData,
  OnApproveActions,
  OrderResponseBody,
  OnInitActions,
} from '@paypal/paypal-js';

export default function PaypalButtonsWrapper() {
  return <PayPalButtons style={{ layout: 'vertical' }} />;
}
