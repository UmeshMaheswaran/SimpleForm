import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Confpassword, setConfpassword] = useState("");
  const [showError, setShowError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault(); // Pour eviter que la page se raffraichît on déclare la fonction ici
    if (password.length !== Confpassword.length) {
      setShowError(true);
      alert("Your two passwords are not the same"); // j'ai fais une condition pour réussir à afficher un onglet correct ou non si les mots de passe ne sont pas identiques
    } else {
      setShowError(false);
    }
  };

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit} // toujours pour eviter que la page se rafraichît
      >
        <p className="nom">Name</p>
        <input // création du formulaire NOM
          value={username}
          type="text"
          placeholder="Jean Dupont"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <p className="mail">Email</p>
        <input // création du formulaire Email
          value={email}
          type="Email"
          placeholder="jeandupont@lereacteur.io"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p className="motdepasse">Password</p>
        <input // création du formulaire mot de passe
          value={password}
          type="password"
          placeholder="AzertY*lOn"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p className="confirmer">Confirm your password</p>
        <input // création du formulaire pour confirmer le mot de passe
          value={Confpassword}
          type="password"
          placeholder="AzertY*lOn"
          name="Confpassword"
          onChange={(event) => {
            setConfpassword(event.target.value);
          }}
        />
        <input type="submit" value="Register" />
      </form>
    </>
  );
}

export default App;
