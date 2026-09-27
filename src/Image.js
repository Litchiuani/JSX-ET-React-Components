import product from "./product";

function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="card-img-top"
      style={{ height: "220px", objectFit: "cover" }}
    />
  );
}

export default Image;
