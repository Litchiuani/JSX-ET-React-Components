import { Card, Container } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Greeting from "./Greeting";

// Variable définie au-dessus du composant racine.
// Remplacer par "" (chaîne vide) pour voir le message par défaut "Hello, there !".
const firstName = "Theo";

function App() {
  return (
    <Container className="d-flex flex-column align-items-center py-5">
      <Card style={{ width: "22rem" }} className="shadow-sm">
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <Greeting firstName={firstName} />
    </Container>
  );
}

export default App;
