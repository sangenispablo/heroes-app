import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import { getHeroesById } from "../../helpers/getHeroesById";
import { heroImages } from "../../helpers/heroImages";

export const HeroScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroesById(id), [id])

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    // Si no hay un heroe por que el usuario puso cualquier cosa
    // en la url, entonces con el componente Navigate soluciono el problema
    return <Navigate to={"/"} />;
  }

  const { alter_ego, characters, first_appearance, publisher, superhero } =
    hero;

  // const imgPath = `/assets/${hero.id}.jpg`;
  // const imgPath = heroImages(`./${hero.id}.jpg`);
  const imgPath = heroImages(hero.id);

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imgPath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {first_appearance}
          </li>
          <br />
          <h5>Characters</h5>
          <p>{characters}</p>
          <button className="btn btn-primary" onClick={handleReturn}>
            Regresar
          </button>
        </ul>
      </div>
    </div>
  );
};
