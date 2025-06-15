function ActorCard({ nombre, imagen, descripcion }) {
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
}
export default ActorCard;