import React from "react";
import CardPokemon from "./CardPokemon";
import "./Cards.css";

export default function Cards({ results }) {
	return (
		<ul className="cards">
			{results.map((poke) => (
				<li key={poke.name}>
					<CardPokemon url={poke.url} />
				</li>
			))}
		</ul>
	);
}
