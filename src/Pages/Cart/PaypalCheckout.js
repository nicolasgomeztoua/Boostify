import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
const Paypal = ({ titles, totalPrice, potentialOrder, history }) => {
  history = useHistory();
  const paypal = useRef();
  console.log(titles, totalPrice);
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: titles,
                amount: {
                  currency_code: "USD",
                  value: totalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          potentialOrder();
          const order = await actions.order.capture;

          setTimeout(() => {
            history.push("/");
          });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}> </div>
    </div>
  );
};

export default Paypal;
