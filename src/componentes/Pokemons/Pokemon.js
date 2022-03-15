import React, { useState, useEffect } from "react";
import UseFetch from "../servicios/GetPokemons";
import Cards from "../Cards/Cards";
import "./style.css";

export default function Pokemon() {
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
	const estado = UseFetch(url);
	const { cargando, data } = estado;

	cargando ? console.log("cargando...") : console.log(data.results);

	return (
		<div>
			<h1>Pokemons</h1>
			{cargando ? (
				<h1>Cargando...</h1>
			) : (
				<div>
					<div className="botones">
						<button onClick={() => setUrl(data.previous)} className="">
							Anterior
						</button>
						<button onClick={() => setUrl(data.next)} className="">
							Siguiente
						</button>
					</div>
					<Cards results={data.results} />
				</div>
			)}
		</div>
	);
}
