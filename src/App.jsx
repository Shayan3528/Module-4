import { useEffect } from "react";
import {
  checkAuthToken,
  loadDataFromLocalStorage,
} from "./Utlis/getRandomInteger";

let didInit = false;

export default function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      const a = loadDataFromLocalStorage();
      const b = checkAuthToken();

      console.log(b + " " + a);
    }
  }, []);
  return <></>;
}
