import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCmsKdBrfz9ncUxJc2EGk3qj11y5tEJpPM",
  authDomain: "u-shop-bkk.firebaseapp.com",
  databaseURL: "https://u-shop-bkk-default-rtdb.firebaseio.com",
  projectId: "u-shop-bkk",
  storageBucket: "u-shop-bkk.appspot.com",
  messagingSenderId: "155427021671",
  appId: "1:155427021671:web:546d148bf66e601a6745c2",
  measurementId: "G-9Z025GD99Y"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
console.log("connnection firebase");
const databaseRef = firebase.database().ref();
export const homepage_top_banner = databaseRef.child("homepage_top_banner");
export const homepage_advantages = databaseRef.child("homepage_advantages");
export const exchange_rate = databaseRef.child("exchange_rate");
export const shipment_pricing_table = databaseRef.child(
  "shipment_pricing_table"
);
export const common_shops = databaseRef.child("common_shops");
export const promotion_news = databaseRef.child("promotion_news");
export const uShopBKKfireStore = firebase.firestore();
export default firebase;
