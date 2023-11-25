import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTtn3oAgAXH45oSPCvZpdcvGRXVapkPRA",
  authDomain: "delicious-resturant-fa57a.firebaseapp.com",
  projectId: "delicious-resturant-fa57a",
  storageBucket: "delicious-resturant-fa57a.appspot.com",
  messagingSenderId: "957810080554",
  appId: "1:957810080554:web:a51462d5023259202d3c53"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export {auth}
