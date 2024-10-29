function criaCartao(categoria,pergunta,resposta){
  let container = document.getElementById("container")
  let article = document.createElement("article")
  article.className = "cartao"
  article.innerHTML = `
  <div class = "cartao-conteudo">
  <h3> ${categoria} </h3>
  <div class = "cartao-conteudo-pergunta">
  <p> ${pergunta} </p>
  </div>
  <div class = "cartao-conteudo-resposta">
  <p> ${resposta} </p>
  </div>
  </div>
  `
container.appendChild(article)
}
criaCartao("História","O que foi o nazismo?","Foi ideologia metapolítica à favor da prevalência da raça ariana.") 
criaCartao("Literatura","Quem foi Thomas More?","Escritor da obra utopia, muito utilizado nas redações de vestibulares.")

