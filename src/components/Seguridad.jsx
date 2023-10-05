function Seguridad({ password }) {
  const evaluarSeguridad = () => {
    const longitud = password.length;

    if (longitud >= 4 && longitud <= 8) {
      return "con baja seguridad";
    } else if (longitud > 8 && longitud <= 12) {
      return "con media seguridad";
    } else if (longitud > 12) {
      return "con buena seguridad";
    } else {
      return "";
    }
  };

  const seguridad = evaluarSeguridad();

  return (
    <div className="text-white mt-2">
      {password.length > 0 && (
        <p
          className={`text-${
            seguridad === "con baja seguridad"
              ? "red"
              : seguridad === "con media seguridad"
              ? "yellow"
              : seguridad === "con buena seguridad"
              ? "green"
              : "white"
          }-600`}
        >
          Contraseña {seguridad}
        </p>
      )}
    </div>
  );
}

export default Seguridad;
