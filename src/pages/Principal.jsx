import ActorCard from "../components/ActorCard";

function Principal() {
  return (
    <div className="d-flex justify-content-center">
      <ActorCard
        nombre="Christian Bale"
        imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Christian_Bale-7831.jpg/440px-Christian_Bale-7831.jpg"
        descripcion="Actor famoso por interpretar a Batman y papeles dramáticos."
      />
    </div>
  );
}
export default Principal;