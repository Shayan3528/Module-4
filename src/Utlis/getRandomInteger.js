export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomBoolean = () => {
  return Math.random() < 0.5;
};

export const loadDataFromLocalStorage = () => {
  return " loadDataFromLocalStorage ";
};



export const checkAuthToken = ()=>{
    return "Authentication Done";
}