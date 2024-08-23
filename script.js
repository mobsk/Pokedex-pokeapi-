document.addEventListener('DOMContentLoaded',function() {
    fetch('https://pokeapi.co/api/v2/pokemon/gengar')
        .then(response =>response.json())
        .then(data =>{
            const pokemonInfo = document.getElementById('pokemon-info');
            const html = `
                <h2>${data.name.charAt(0) .toUpperCase() + data.name.slice(1)}</h2>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-image"></img>
                <p><stronger>ID:</stronger> ${data.id} </p>
                <p><stronger>Altura:</stronger> ${data.height / 10} m</p>
                <p><stronger>Peso:</stronger> ${data.weight / 10} kg</p>
                <p><stronger>Tipos:</stronger> ${data.types.map(typesInfo => typesInfo.type.name).join(',')}</p>
                <p><stronger>Habilidades:</stronger> ${data.abilities.map(abilityInfo => abilityInfo.ability.name).join(',')}</p>
            `;
            pokemonInfo.innerHTML = html;
        })
        .catch(error =>{
            console.error('Erro ao buscar dados de Pokémon', error);
        });
});
async function searchPokemon() {
    const name = document.getElementById('pokemon-name').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Pokémon não encontrado');
        const data = await response.json();

        // Exibir informações do Pokémon
        const pokemonInfo = document.getElementById('pokemon-info');
        pokemonInfo.innerHTML = `
            <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height / 10} m</p>
            <p>Peso: ${data.weight / 10} kg</p>
            <p>Tipo(s): ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        `;
    } catch (error) {
        const pokemonInfo = document.getElementById('pokemon-info');
        pokemonInfo.innerHTML = `<p>${error.message}</p>`;
    }
}