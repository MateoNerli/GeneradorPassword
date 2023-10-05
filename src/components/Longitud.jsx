function Longitud({ value, onChange }) {
  return (
    <div className="flex flex-col max-w-md w-full">
      <label className="py-2 font-normal text-sm text-slate-400">
        Longitud de la contraseña:{" "}
        <strong className="font-semibold text-white">{value}</strong>
      </label>
      <div className="flex items-center font-mono px-3 py-2 bg-blue-600 rounded-md outline-0 text-white font-normal text-xl w-full">
        <span className="px-3">4</span>
        <input
          value={value}
          onChange={onChange}
          min="4"
          max="32"
          type="range"
          className="accent-white w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="px-3">32</span>
      </div>
    </div>
  );
}

export default Longitud;
