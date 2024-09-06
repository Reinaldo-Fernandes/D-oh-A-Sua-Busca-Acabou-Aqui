function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    // pelo seu ID e armazena em uma variável.
    let section = document.getElementById("resultados-pesquisa");
  
    // Loga os dados no console para fins de depuração. 
    // Isso é útil durante o desenvolvimento para verificar se os dados estão sendo carregados corretamente.
    console.log(dados);
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    // Essa string será preenchida com os elementos HTML gerados.
    let resultados = "";
  
    // Itera sobre cada item (personagem) no array de dados.
    // Para cada item, cria um novo elemento HTML e o adiciona à string 'resultados'.
    for (let dado of dados) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href="${dado.link}" target="_blank">Saiba mais</a>
        </div>
      `;
    }
  
    // Atribui o conteúdo da string 'resultados' ao HTML interno da seção.
    // Isso substitui o conteúdo anterior da seção pelos novos elementos HTML.
    section.innerHTML = resultados;
  }