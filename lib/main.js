let pokemonURL = "https://pokeapi.co/api/v2/pokemon/toucannon" ;
let flavorTextURL = "https://pokeapi.co/api/v2/pokemon-species/733/" ;
let fluidContainer = document.getElementsByClassName("container-fluid")[0];


function getTypes(pokemonJSON){
    let types = [];
    for( let type of pokemonJSON.types){
        types.push(type.type.name)
    }
    return types;
}

    function getMoves(pokemonJSON) {
        let moves = [];
        for(let move of pokemonJSON.moves) {
            moves.push(move.move.name);
        }
        return moves;
    }
    function getAbilities(pokemonJSON) {
        let abilities = [];
        for( let ability of pokemonJSON.abilities) {
            abilities.push(ability.ability.name)
        }
        return abilities;
    }

    function createPokemonElement(pokemon){
        
        let h1 = document.createElement("h1");
        h1.innerText = pokemon.name;
        
        let img = document.createElement("img");
        img.src = pokemon.sprites;
        
        let h2 = document.createElement("h2");
        h2.innerText = pokemon.number;
        
        let p = document.createElement("p");
        for( let type of pokemon.types) {
            p.innerText += `${type}`
        }
       
        let moveUL = document.createElement("ul");
        for(let move of pokemon.moves){
            moveUL.innerHTML += `<li>${move}</li>`
        }
        
        let abilityUL = document.createElement("ul");
        for(let ability of pokemon.abilities){
            abilityUL.innerHTML += `<li>${ability}</li>`;
        }
        
        let div = document.createElement("div");
        div.append(h1,img,h2,p,moveUL,abilityUL,);
        //document.body.appendChild(div);
        fluidContainer.appendChild(div);
    

         fetch(flavorTextURL)
        .then((response)  => response.json())
        .then(function(data){

        })
    };



    

fetch(pokemonURL)
    .then((response)  => response.json())
    .then(function(data){
        console.log(data);
        let name = data.name;
        let sprites = data.sprites.front_default;
        let number = data.id;
        let type = getTypes(data);
        let moves = getMoves(data);
        let abilities = getAbilities(data);

        let toucannon = new Pokemon(name, number, type, moves, abilities, sprites, ) //add Flavor Text
        console.log(toucannon);
        createPokemonElement(toucannon);

    })
    .catch(function(error){
        console.log(error);
    });