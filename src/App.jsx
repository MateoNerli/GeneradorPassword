import { useState } from "react";
import IconoCopiar from "./components/IconoCopiar";
import Notificacion, { Copiado, Error } from "./components/Alerta";
import useCaracteres from "./hooks/caracteres";
import "./App.css";

function App() {
  //hook para los caracteres
  const caracteres = useCaracteres();
  //estados de la contraseña
  const [passwordOptions, setPasswordOptions] = useState({
    length: 4,
    include: {
      numeros: false,
      simbolos: false,
      mayusculas: false,
      minusculas: false,
    },
  });
  //estado de la contraseña generada
  const [passwordResult, setPasswordResult] = useState("");

  //funcion para generar la contraseña
  const generatePassword = () => {
    let contra = "";
    let result = "";

    if (passwordOptions.include.numeros) contra += caracteres.numeros;
    if (passwordOptions.include.simbolos) contra += caracteres.simbolos;
    if (passwordOptions.include.mayusculas) contra += caracteres.mayusculas;
    if (passwordOptions.include.minusculas) contra += caracteres.minusculas;

    //validar que se haya seleccionado al menos una opcion
    if (Object.values(passwordOptions.include).every((x) => x === false)) {
      //every devuelve true si todos los valores del objeto son false
      Error("Debes seleccionar al menos una opción.");
    } else {
      for (let i = 0; i < passwordOptions.length; i++) {
        // console.log(contra[Math.floor(Math.random() * contra.length)]);
        result += contra[Math.floor(Math.random() * contra.length)];
      }
      setPasswordResult(result);
      Copiado("Contraseña generada exitosamente!");
    }
  };

  const copyPassword = () => {
    if (passwordResult === "") {
      Error("Debes crear una contraseña antes de copiarla.");
      return;
    }

    //copiar al portapapeles
    navigator.clipboard.writeText(passwordResult);
    Copiado("Contraseña copiada exitosamente!");
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-900 p-6">
      <div className="flex flex-col justify-center items-center container mx-auto gap-2.5">
        <div className="flex flex-col	max-w-md w-full relative">
          <label className="py-2 font-semibold text-sm text-slate-400">
            Contraseña Generada
          </label>
          <input
            value={passwordResult}
            onChange={(e) => setPasswordResult(e.target.value)}
            disabled
            type="text"
            placeholder="La contraseña generada es ......"
            className="placeholder:text-center placeholder:text-xs placeholder:text-teal-300 font-mono px-3 py-2 bg-slate-800 rounded-md outline-0 text-white font-normal text-xl w-full"
          />
          {passwordResult !== "" && (
            <IconoCopiar
              styles="cursor-pointer fill-slate-400 hover:fill-teal-300 absolute bottom-2.5 right-2"
              onClick={() => copyPassword()}
            />
          )}
        </div>
        <div className="flex flex-col max-w-md w-full">
          <label className="py-2 font-normal text-sm text-slate-400">
            Longitud de la contraseña:{" "}
            <strong className="font-semibold text-teal-300">
              {passwordOptions.length}
            </strong>
          </label>
          <div className="flex items-center font-mono px-3 py-2 bg-slate-800 rounded-md outline-0 text-white font-normal text-xl w-full">
            <span className="px-3">4</span>
            <input
              value={passwordOptions.length}
              onChange={(e) =>
                setPasswordOptions({
                  ...passwordOptions,
                  length: e.target.value,
                })
              }
              min="4"
              max="32"
              type="range"
              className="accent-teal-300 w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="px-3">32</span>
          </div>
        </div>
        <div className="flex flex-col max-w-md w-full">
          <label className="py-1 font-semibold text-sm text-slate-400">
            Opciones
          </label>
          <div className="flex flex-col	max-w-md w-full bg-slate-800 p-5 rounded-md">
            <ul className="text-white">
              <li className="flex items-center justify-between py-2">
                Con numeros
                <label
                  htmlFor="include-number"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="include-number"
                    className="sr-only peer"
                    onChange={(e) =>
                      setPasswordOptions({
                        ...passwordOptions,
                        include: {
                          ...passwordOptions.include,
                          numeros: e.target.checked,
                        },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
                </label>
              </li>
              <li className="flex items-center justify-between py-2">
                Con simbolos
                <label
                  htmlFor="include-simbolos"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="include-simbolos"
                    className="sr-only peer"
                    onChange={(e) =>
                      setPasswordOptions({
                        ...passwordOptions,
                        include: {
                          ...passwordOptions.include,
                          simbolos: e.target.checked,
                        },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
                </label>
              </li>
              <li className="flex items-center justify-between py-2">
                Con mayusculas
                <label
                  htmlFor="include-mayusculas"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="include-mayusculas"
                    className="sr-only peer"
                    onChange={(e) =>
                      setPasswordOptions({
                        ...passwordOptions,
                        include: {
                          ...passwordOptions.include,
                          mayusculas: e.target.checked,
                        },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
                </label>
              </li>
              <li className="flex items-center justify-between py-2">
                Con minusculas
                <label
                  htmlFor="include-minusculas"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="include-minusculas"
                    className="sr-only peer"
                    onChange={(e) =>
                      setPasswordOptions({
                        ...passwordOptions,
                        include: {
                          ...passwordOptions.include,
                          minusculas: e.target.checked,
                        },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-2 flex flex-col max-w-md w-full">
          <button
            className="apperance-none font-semibold text-teal-300 w-full bg-slate-800 rounded-md p-2 hover:bg-teal-300 hover:text-slate-800"
            onClick={() => {
              console.log(passwordOptions);
              generatePassword();
            }}
          >
            Generar Contraseña
          </button>
        </div>
      </div>
      <Notificacion />
    </div>
  );
}

export default App;
