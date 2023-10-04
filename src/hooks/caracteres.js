import { useState } from "react";

const useCharset = () => {
  const [charset, setCharset] = useState({
    numeros: "1234567890",
    simbolos: "~!@#$%^&*())_+=-/<>?",
    mayusculas: "QWERTYUIOPASDFGHJKLZXCVBNM",
    minusculas: "qwertyuiopasdfghjklzxcvbnm",
  });

  return charset;
};

export default useCharset;
