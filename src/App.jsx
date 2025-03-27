import {
  checkAuthToken,
  loadDataFromLocalStorage,
} from "./Utlis/getRandomInteger";

export default function App() {
  return <></>;
}

const a = loadDataFromLocalStorage();
const b = checkAuthToken();
console.log(b + " " + a);
