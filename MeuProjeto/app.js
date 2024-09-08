function pesquisar() {
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    const resultadoSecao = document.getElementById("resultado-pesquisa");

    let cartaEncontrada = dados.find(carta => {
        return carta.nome.toLowerCase().includes(campoPesquisa) ||
               carta.significado.toLowerCase().includes(campoPesquisa) ||
               carta.tags.some(tag => tag.toLowerCase().includes(campoPesquisa));
    });

    if (cartaEncontrada) {
        resultadoSecao.innerHTML = `
            <img src="${cartaEncontrada.imagem}" alt="${cartaEncontrada.nome}">
            <h2>${cartaEncontrada.nome}</h2>
            <p>${cartaEncontrada.significado}</p>
            <p><strong>Possíveis interpretações:</strong> ${cartaEncontrada.interpretacao}</p>
        `;
    } else {
        resultadoSecao.innerHTML = "<p>Carta não encontrada. Tente outra palavra-chave.</p>";
    }
}