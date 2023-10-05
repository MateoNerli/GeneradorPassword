function Boton({ onClick }) {
  return (
    <div className="my-2 flex flex-col max-w-md w-full">
      <button
        className="apperance-none font-semibold text-teal-300 w-full bg-slate-800 rounded-md p-2 hover:bg-teal-300 hover:text-slate-800"
        onClick={onClick}
      >
        Generar Contraseña
      </button>
    </div>
  );
}

export default Boton;
