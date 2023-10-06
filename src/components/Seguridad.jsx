function Seguridad({ password }) {
  const evaluarSeguridad = () => {
    const longitud = password.length;

    if (longitud >= 4 && longitud <= 8) {
      return "tiene baja seguridad";
    } else if (longitud > 8 && longitud <= 12) {
      return "tiene media seguridad";
    } else if (longitud > 12) {
      return "tiene buena seguridad";
    } else {
      return "";
    }
  };

  const seguridad = evaluarSeguridad();

  // Definir clases CSS para diferentes niveles de seguridad
  let colorClase = "";
  if (seguridad === "tiene baja seguridad") {
    colorClase = "bg-red-500";
  } else if (seguridad === "tiene media seguridad") {
    colorClase = "bg-yellow-500";
  } else if (seguridad === "tiene buena seguridad") {
    colorClase = "bg-green-500";
  }

  return (
    <div className="flex flex-col max-w-md w-full">
      <label className="py-1 font-semibold text-sm text-slate-400">
        Seguridad
      </label>
      <div
        className={`flex flex-col max-w-md w-full p-5 rounded-md ${colorClase}`}
      >
        <p className="text-black">
          <strong>{password}</strong> {seguridad}
        </p>
      </div>
    </div>
  );
}

export default Seguridad;
