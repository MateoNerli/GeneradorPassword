function Seguridad({ password }) {
  const esSegura = () => {
    const longitudMinima = 8;
    const contieneCaracterEspecial = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(
      password
    );
    const contieneNumero = /\d/.test(password);
    const contieneMayuscula = /[A-Z]/.test(password);
    const contieneMinuscula = /[a-z]/.test(password);

    return (
      password.length >= longitudMinima &&
      contieneCaracterEspecial &&
      contieneNumero &&
      contieneMayuscula &&
      contieneMinuscula
    );
  };

  return (
    <div className="text-white mt-2">
      {password.length > 0 && esSegura() && (
        <p className="text-green-600">Contraseña segura</p>
      )}
      {password.length > 0 && !esSegura() && (
        <p className="text-red-600">Contraseña débil</p>
      )}
    </div>
  );
}

export default Seguridad;
