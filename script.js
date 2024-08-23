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