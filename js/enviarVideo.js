import { criarVideo } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function enviarVideo(evento){
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await criarVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
};

formulario.addEventListener("submit", evento => enviarVideo(evento));