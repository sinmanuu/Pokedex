import React from "react";
import GetPokemon from "../servicios/GetPokemons";

export default function CardPokemon({ url }) {
	const estado = GetPokemon(url);
	const { cargando, pokemon } = estado;

	return cargando ? (
		<h2>Cargando...</h2>
	) : (
		<div className="card">
			{/* <a href=""> */}
			<img src={pokemon.sprites.front_default} alt={pokemon.name} />
			<p className="">{pokemon.forms[0].name}</p>
			{/* </a> */}
		</div>
	);
}

{
	/* <p>
				{pokemon.stats.map((stat) => {
					return (
						<>
							<li
								key={stat.base_stat}
							>{`${stat.stat.name}: ${stat.base_stat}`}</li>
						</>
					);
				})}
			</p> */
}
