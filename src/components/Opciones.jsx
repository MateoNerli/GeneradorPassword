function Opciones({ label, checked, onChange }) {
  return (
    <li className="flex items-center justify-between py-2">
      {label}
      <label
        className="inline-flex relative items-center cursor-pointer"
        htmlFor={`contiene${label}`}
      >
        <input
          type="checkbox"
          id={`contiene${label}`}
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
      </label>
    </li>
  );
}

export default Opciones;
