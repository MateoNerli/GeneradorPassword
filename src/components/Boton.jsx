function Boton({ onClick }) {
  return (
    <div className="my-2 flex flex-col max-w-md w-full">
      <button
        className="apperance-none font-semibold text-white w-full bg-blue-600 rounded-md p-2 hover:bg-black hover:text-white"
        onClick={onClick}
      >
        Generar Contraseña
      </button>
    </div>
  );
}

export default Boton;
