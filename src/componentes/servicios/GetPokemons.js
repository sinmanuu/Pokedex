import { useState, useEffect } from "react";

export default function GetPokemons(url) {
	const [resultado, setResultado] = useState({ cargando: true, pokemon: null });

	useEffect(() => {
		getDatos(url);
	}, [url]);

	async function getDatos(url) {
		try {
			setResultado({ cargando: true, pokemon: null });
			const resp = await fetch(url);
			const pokemon = await resp.json();
			setResultado({ cargando: false, pokemon });
		} catch (e) {
			console.log(e);
		}
	}

	return resultado;
}
