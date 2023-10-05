import { useState } from "react";

const useCharset = () => {
  const [caracter, setCaracter] = useState({
    numeros: "1234567890",
    simbolos: "~!@#$%^&*())_+=-/<>?",
    mayusculas: "QWERTYUIOPASDFGHJKLZXCVBNM",
    minusculas: "qwertyuiopasdfghjklzxcvbnm",
  });

  return caracter;
};

export default useCharset;
