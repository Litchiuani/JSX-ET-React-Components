// Composant dédié à l'affichage du message de salutation sous la carte.
// Reçoit firstName en prop pour rester découplé de la variable définie dans App.js.
function Greeting({ firstName }) {
  const message = firstName ? `Hello, ${firstName}` : "Hello, there !";

  return (
    <div className="mt-4 text-center">
      <h4>{message}</h4>
      {firstName && (
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${firstName}`}
          alt={`Avatar de ${firstName}`}
          style={{ width: "96px", height: "96px", borderRadius: "50%", marginTop: "0.5rem" }}
        />
      )}
    </div>
  );
}

export default Greeting;
