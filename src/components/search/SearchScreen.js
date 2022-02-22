import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import { getHeroesByName } from "../../helpers/getHeroesByName";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [{ searchText }, handleInputChange] = useForm({
    searchText: q,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const heroesFiltrados = useMemo(() => {
    if (q === "") {
      return [];
    }
    return getHeroesByName(q);
  }, [q]);

  //const heroesFiltrados = useMemo((q)=>getHeroesByName(q), [q])

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchText"
              id="searchText"
              placeholder="Buscar..."
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-2" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Buscar heroe</div>
          ) : (
            heroesFiltrados.length === 0 && (
              <div className="alert alert-info">
                No hay resultados para: {q}
              </div>
            )
          )}

          {heroesFiltrados.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
