import React from "react";
import UseFetch from "../servicios/GetPokemons";

export default function CardPokemon({ url }) {
	const estado = UseFetch(url);
	const { cargando, data } = estado;

	return cargando ? (
		<h2>Cargando...</h2>
	) : (
		<div className="card">
			<a href="">
				<img src={data.sprites.front_default} alt="pokemon" />
				<p className="">{data.forms[0].name}</p>
			</a>
		</div>
	);
}
