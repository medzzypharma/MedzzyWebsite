import moment from "moment";
import { ORDER_IN_SECS } from "../constants/appConstants";

export const formatMrp = (price, text = true) => {
  const mrp = price.split("₹")[1];
  if (text) {
    return `₹${mrp.trim()}`;
  } else {
    return parseInt(mrp);
  }
};

export const calcDiscount = (a_, b_) => {
  const a = parseFloat(a_.split("₹")[1].trim());
  const b = parseFloat(b_.split("₹")[1].trim());

  return 100 * Math.abs((a - b) / ((a + b) / 2)).toPrecision(2);
};

export const calcDiscountAmount = (cartItems) => {
  const price = cartItems?.reduce(
    (n, { price, cartCount }) =>
      parseFloat(price?.split("₹")[1].trim()) * cartCount + n,
    0
  );
  const bestPrice = cartItems?.reduce(
    (n, { best_price, cartCount }) =>
      parseFloat(best_price?.split("₹")[1].trim()) * cartCount + n,
    0
  );

  return [
    price.toFixed(2),
    (bestPrice + 30).toFixed(2),
    (price - bestPrice).toFixed(2),
  ];
};

export const prescriptionRequired = (cartItems) => {
  return cartItems?.some((item) => {
    return item?.rx_required;
  });
};

export const formatDate = (date) => {
  return moment(date.toDate()).fromNow();
};

export const latestOrder = (items) => {
  const latest = items?.sort(
    (a, b) =>
      new Date(b?.orderedAt?.toDate()) - new Date(a?.orderedAt?.toDate())
  )[0];

  if (!latest) {
    return { countdown: "NO_ORDERS", item: latest };
  }

  var a = moment(latest?.orderedAt?.toDate());
  var b = moment(new Date());

  if (ORDER_IN_SECS - b.diff(a, "seconds") < 0)
    return { countdown: "DONE", item: latest };

  return { countdown: ORDER_IN_SECS - b.diff(a, "seconds"), item: latest };
};

export const timeDiffOfLastOrder = (timestamp) => {
  var a = moment(timestamp);
  var b = moment(new Date());
  console.log(b.diff(a, "seconds"));
  return b.diff(a, "seconds");
};

export const timeDiffOfLastOrderArr = (timestamp) => {
  var a = moment(timestamp);
  var b = moment(new Date());
  const diff = b.diff(a, "seconds");
  return [
    parseInt((ORDER_IN_SECS - diff) / 60),
    parseInt((ORDER_IN_SECS - diff) % 60),
  ];
};
