export async function lerContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch(url)
    const contatos = await response.json()

    console.log(contatos)

    return contatos
}

export async function criarContato(contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const options = {
        method:'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

const novoContato = {
    nome: "Durinho Sapeca",
    celular: "11 9 6207-1110",
    foto: "semFoto.png",
    email: "durinho@gmail.com",
    endereco: "Av. Ambuitá, 369",
    cidade: "Itapevi"
}

async function deletarContato(id) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'

    const options = {
        method: 'DELETE'
    }

    const response = await fetch (url, options)

    return response.ok
}

async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method:'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok
}