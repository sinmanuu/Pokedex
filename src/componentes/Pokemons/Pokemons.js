import React, { useState, useEffect } from "react";
import GetPokemons from "../servicios/GetPokemons";
import Cards from "../Cards/Cards";
import "./style.css";

export default function Pokemons() {
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
	const estado = GetPokemons(url); //resultado de la api
	const { cargando, pokemon } = estado;

	cargando ? console.log("cargando...") : console.log(pokemon.results);

	return (
		<div>
			<h1>Pokemons</h1>
			{cargando ? (
				<h1>Cargando...</h1>
			) : (
				<div>
					<div className="botones">
						<button onClick={() => setUrl(pokemon.previous)}>Anterior</button>
						<button onClick={() => setUrl(pokemon.next)}>Siguiente</button>
					</div>
					<Cards results={pokemon.results} />
				</div>
			)}
		</div>
	);
}
