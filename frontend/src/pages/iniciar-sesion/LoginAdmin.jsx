// Ejemplo simple de LoginAdmin
const LoginAdmin = ({ setIsAdmin }) => {
  const verificar = () => {
    const pass = prompt("Contraseña de administrador:");
    if (pass === "Filomena2026*") { // Tu contraseña
      setIsAdmin(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert("Acceso denegado");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Acceso Administrativo</h2>
      <button onClick={verificar}>Ingresar Clave</button>
    </div>
  );
};

export default LoginAdmin;