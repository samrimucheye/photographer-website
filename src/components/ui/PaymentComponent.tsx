import React, { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

type PaymentComponentProps = {
  servicePrice: number;
  onSuccess: () => void;
};

type CreditCardInfo = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
};

const PaymentComponent: React.FC<PaymentComponentProps> = ({
  servicePrice,
  onSuccess,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("paypal");
  const [creditCardInfo, setCreditCardInfo] = useState<CreditCardInfo>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCreditCardInfo({ ...creditCardInfo, [name]: value });
  };

  const handleCreditCardPayment = (e: React.FormEvent): void => {
    e.preventDefault();
    // Simulate card validation (You should integrate a secure payment gateway here, e.g., Stripe)
    if (
      creditCardInfo.cardNumber.length === 16 &&
      creditCardInfo.expiryDate &&
      creditCardInfo.cvv.length === 3
    ) {
      alert("Payment successful via Credit Card!");
      onSuccess(); // Notify parent about the success
    } else {
      setErrorMessage(
        "Invalid credit card details. Please check and try again."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">
        Book Photographer Services
      </h2>
      <h3 className="text-xl text-center mb-6">Price: ${servicePrice}</h3>

      <div className="flex justify-center gap-4 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
          />
          <span>PayPal</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="creditCard"
            checked={paymentMethod === "creditCard"}
            onChange={() => setPaymentMethod("creditCard")}
          />
          <span>Credit Card</span>
        </label>
      </div>

      {paymentMethod === "paypal" && (
        <PayPalScriptProvider
          options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: servicePrice.toString(),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert(
                  `Transaction completed by ${details.payer.name?.given_name}`
                );
                onSuccess(); // Notify parent about the success
              });
            }}
            onError={(err) => {
              alert("An error occurred with PayPal: " + err);
            }}
          />
        </PayPalScriptProvider>
      )}

      {paymentMethod === "creditCard" && (
        <form onSubmit={handleCreditCardPayment} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1">Card Holder Name</label>
            <input
              type="text"
              name="cardHolder"
              value={creditCardInfo.cardHolder}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={creditCardInfo.cardNumber}
              onChange={handleInputChange}
              maxLength={16}
              className="border p-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Expiry Date (MM/YY)</label>
            <input
              type="text"
              name="expiryDate"
              value={creditCardInfo.expiryDate}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">CVV</label>
            <input
              type="password"
              name="cvv"
              value={creditCardInfo.cvv}
              onChange={handleInputChange}
              maxLength={3}
              className="border p-2 rounded"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentComponent;
