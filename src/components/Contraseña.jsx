function Contraseña({ value, onChange }) {
  return (
    <div className="flex flex-col max-w-md w-full relative">
      <label className="py-2 font-semibold text-sm text-slate-400">
        Contraseña Generada
      </label>
      <input
        value={value}
        onChange={onChange}
        disabled
        type="text"
        placeholder="La contraseña generada es ......"
        className="placeholder:text-center placeholder:text-xs placeholder:text-teal-300 font-mono px-3 py-2 bg-slate-800 rounded-md outline-0 text-white font-normal text-xl w-full"
      />
    </div>
  );
}

export default Contraseña;
