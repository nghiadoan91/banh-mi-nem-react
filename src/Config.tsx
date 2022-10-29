import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyARrzo62623Bbvxvbc_ZzzEGmq9LEkZLB0",
  authDomain: "banh-mi-nem.firebaseapp.com",
  projectId: "banh-mi-nem",
  storageBucket: "banh-mi-nem.appspot.com",
  messagingSenderId: "721558851589",
  appId: "1:721558851589:web:70d3b945a0c46532a10c6c",
  measurementId: "G-R77RD6RWK5",
  databaseURL: "https://banh-mi-nem-default-rtdb.asia-southeast1.firebasedatabase.app"
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
