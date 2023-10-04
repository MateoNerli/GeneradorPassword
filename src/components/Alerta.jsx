import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notificacion({ message }) {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000} // Cierra automáticamente después de 3 segundos
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export function Copiado(message) {
  toast.success(message);
}

export function Error(message) {
  toast.error(message);
}

export default Notificacion;
