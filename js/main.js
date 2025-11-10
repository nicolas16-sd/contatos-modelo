'use strict'

import { lerContatos, criarContato } from "./contatos.js"

const container = document.getElementById('container')
const btnSalvar = document.getElementById('salvar')

async function carregarContatos() {
    const contatos = await lerContatos()

    container.innerHTML = ''


    contatos.forEach(contato => {
        const card = document.createElement('div')
        card.classList.add('card-contato')

        card.innerHTML = `
            <img src="./img/${contato.foto}" alt="Foto de ${contato.nome}">
            <h2>${contato.nome}</h2>
            <p><strong>Celular:</strong> ${contato.celular}</p>
            <p><strong>Email:</strong> ${contato.email}</p>
            <p><strong>Cidade:</strong> ${contato.cidade}</p>
        `

        container.appendChild(card)
    })
}

carregarContatos()
