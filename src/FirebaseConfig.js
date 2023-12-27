import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCTtn3oAgAXH45oSPCvZpdcvGRXVapkPRA",
  authDomain: "delicious-resturant-fa57a.firebaseapp.com",
  projectId: "delicious-resturant-fa57a",
  storageBucket: "delicious-resturant-fa57a.appspot.com",
  messagingSenderId: "957810080554",
  appId: "1:957810080554:web:a51462d5023259202d3c53",
  dataBaseURL: "https://delicious-resturant-fa57a-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase(app);

const storage = getStorage(app);
export { auth, database, storage  };
