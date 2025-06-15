import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="bg-light p-2 d-flex justify-content-center gap-4">
      <Link to="/">Principal</Link>
      <Link to="/peliculas">Películas</Link>
    </nav>
  );
}

export default Menu;