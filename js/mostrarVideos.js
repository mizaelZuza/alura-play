import {listarVideos} from "./conectaAPI.js";
const lista = document.querySelector(".videos__container");


function contruirCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`;
    return video;
}


async function listaVideos() {
    const listaApi = await listarVideos();
    listaApi.forEach(e => {
        lista.appendChild(contruirCard(e.titulo, e.descricao, e.url, e.imagem));
    });

    
}

listaVideos();