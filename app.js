function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nada foi encontrado.</p>";
        return;
    }
  
    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
  
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descrição.toLowerCase();
        let tags = dado.tags.toLowerCase();
  
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>`;
        }
    }
  
    if (resultados === "") {
        resultados = "<p>Personagem não encontrado ou não faz parte da família principal.</p>";
    }
  
    section.innerHTML = resultados;
  }
  
  function outrosPersonagens() {
    let section = document.getElementById("resultados-pesquisa");
    let outros = dados.find(dado => dado.titulo.toLowerCase() === "outros personagens");
  
    if (outros) {
        section.innerHTML = `
        <div class="item-resultado">
            <h2>${outros.titulo}</h2>
            <p class="descricao-meta">${outros.descrição}</p>
            <a href="${outros.link}" target="_blank">Saiba mais</a>
        </div>`;
    } else {
        section.innerHTML = "<p>Outros personagens não encontrados.</p>";
    }
  }
  
