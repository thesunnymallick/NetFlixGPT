
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAjGPMaehP3oUv7jiltl-lrF9sChXsGfvU",
  authDomain: "netflixgpt-c6f5a.firebaseapp.com",
  projectId: "netflixgpt-c6f5a",
  storageBucket: "netflixgpt-c6f5a.appspot.com",
  messagingSenderId: "347576183998",
  appId: "1:347576183998:web:d682098d953f1fd5ca82ef"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const auth=getAuth()