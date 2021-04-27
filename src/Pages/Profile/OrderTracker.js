const OrderTracker = () => {
  const mockOrder = [
    {
      _id: {
        $oid: "607895b1141d2100157f0691",
      },
      titles: ["Acheivement Boost"],
      prices: [50],
      selectedLegend: ["Wraith"],
      selectedPopBadges: ["20 Bomb"],
      selectedExtraBadges: [],
      firstValue: [null],
      secondValue: [null],
      extrasArr: [[null]],
      PSNemail: "dafinnesekid25@gmail.com",
      PSNPass: "Mendez1014",
      region: "NA",
      dateCreated: {
        $date: "2021-04-15T19:17:22.450Z",
      },
      id: "29709aac",
      platform: "PlayStation Network",
      __v: 0,
    },
  ];
  return mockOrder.map((orders, index) => {
    return (
      <div order-tracker-container>
        <p>Order Summary</p>
        <div className="order-details">
          <table>
            <tbody>
              <tr>
                <td>Type:</td>
                <td>{`${orders.titles}`}</td>
              </tr>
              <tr>
                <td>Prices:</td>
                <td>{`${orders.prices}`}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  });
};

export default OrderTracker;
