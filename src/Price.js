import product from "./product";

function Price() {
  return <p className="fw-bold text-success mb-2">{product.price.toFixed(2)} €</p>;
}

export default Price;
