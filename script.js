const characterInfo = document.querySelector(".character_info");
const btn = document.querySelector(".btn");

const fetchData = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Erro ao obter dados da API:", error);
        throw error;
    }
};

const apiResponse = async () => {
    try {
        const dataResults = await fetchData();

        const randomIndex = Math.floor(Math.random() * dataResults.length);
        const randomCharacter = dataResults[randomIndex];

        characterInfo.innerHTML = `
            Name: ${randomCharacter.name} <br>
            Espécie: ${randomCharacter.species} <br>
            <img src="${randomCharacter.image}" class="character_photo" alt="characterFoto">
        `;
    } catch (error) {
        console.log("Erro ao obter dados da API:", error);
    }
};

btn.addEventListener("click", apiResponse);
