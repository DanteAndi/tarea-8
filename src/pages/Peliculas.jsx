import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const peliculas = [
  { titulo: "Película 1", resumen: "Resumen de la Película 1" },
  { titulo: "Película 2", resumen: "Resumen de la Película 2" },
  { titulo: "Película 3", resumen: "Resumen de la Película 3" },
  { titulo: "Película 4", resumen: "Resumen de la Película 4" },
  { titulo: "Película 5", resumen: "Resumen de la Película 5" },
];

function Peliculas() {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {peliculas.map((pelicula, index) => (
        <div key={index}>
          <Button variant="primary" onClick={() => setModalIndex(index)}>
            {pelicula.titulo}
          </Button>

          <Modal show={modalIndex === index} onHide={() => setModalIndex(null)}>
            <Modal.Header closeButton>
              <Modal.Title>{pelicula.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{pelicula.resumen}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModalIndex(null)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
}
export default Peliculas;