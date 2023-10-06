import { useState } from "react";
import IconoCopiar from "./components/IconoCopiar";
import Notificacion, { Copiado, Error } from "./components/Alerta";
import useCaracteres from "./hooks/caracteres";
import Opciones from "./components/Opciones";
import Contraseña from "./components/Contraseña";
import Longitud from "./components/Longitud";
import Boton from "./components/Boton";
import Seguridad from "./components/Seguridad";
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

    const { include } = passwordOptions;
    if (include.numeros) contra += caracteres.numeros;
    if (include.simbolos) contra += caracteres.simbolos;
    if (include.mayusculas) contra += caracteres.mayusculas;
    if (include.minusculas) contra += caracteres.minusculas;

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
    <div className="flex justify-center min-h-screen bg-gray-800 p-6">
      <div className="flex flex-col justify-center items-center container mx-auto gap-2.5">
        <div className="flex flex-col	max-w-md w-full relative">
          <Contraseña
            value={passwordResult}
            onChange={(e) => setPasswordResult(e.target.value)}
          />
          {passwordResult !== "" && (
            <IconoCopiar
              styles="cursor-pointer fill-slate-400 hover:fill-black absolute bottom-2.5 right-2"
              onClick={() => copyPassword()}
            />
          )}
        </div>
        <Longitud
          value={passwordOptions.length}
          onChange={(e) =>
            setPasswordOptions({
              ...passwordOptions,
              length: e.target.value,
            })
          }
        />
        <div className="flex flex-col max-w-md w-full">
          <label className="py-1 font-semibold text-sm text-slate-400">
            Opciones
          </label>
          <div className="flex flex-col	max-w-md w-full bg-blue-600 p-5 rounded-md">
            <ul className="text-white">
              <Opciones
                label="Con numeros"
                checked={passwordOptions.include.numeros}
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
              <Opciones
                label="Con simbolos"
                checked={passwordOptions.include.simbolos}
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
              <Opciones
                label="Con mayusculas"
                checked={passwordOptions.include.mayusculas}
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
              <Opciones
                label="Con minusculas"
                checked={passwordOptions.include.minusculas}
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
            </ul>
          </div>
        </div>

        <Seguridad password={passwordResult} />
        <Boton onClick={() => generatePassword()} />
      </div>
      <Notificacion />
    </div>
  );
}

export default App;
