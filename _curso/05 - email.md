---
title: "Enviando livros por e-mail"
permalink: /curso/email/
excerpt: "Enviando os livros gerados por email"
last_modified_at: 2019-06-03T11:47:50-04:00
toc: true
google: true
---

{% include check-registration.html %} 
{% include find-file.html %}

%%% escrever sobre o processo de envio dos links da planilha por e-mail %%%%

No capítulo [Geração individual]({{site.url}}/curso/individual) mostramos como gerar o livro para um único aluno. Neste capítulo também vamos usar o livro **O Nome da Gente** entretanto, gerando de uma única vez livros personalizados para toda uma turma.

**Nota:** O livro **O Nome da Gente** faz parte do banco de livros online e gratuito que é mantido pela nossa equipe do **APRENDER.digital** como parte do projeto **Dia Nacional do Livro Infantil ([DNLI](https://dnli.aprender.digital){:target="_blank"})**.
{: .notice--warning}

Continue lendo abaixo. Vamos mostrar para você como isso funciona. 

## Links para os livros
Não sei se no capítulo em que apresentamos a [Geração individual]({{site.url}}/curso/individual) dos livros você observou o conteúdo do link gerado em cada livro personalizado. 

Por exemplo, para o nome "JULIA" o link do livro gerado é o seguinte:

> https://livros.aprender.digital/ONomeDaGente.html?nome=**JULIA**&deleDela=**dela**

Isso nos permite um truque. Para gerarmos livros com nomes diferentes, basta criarmos links com parâmetros diferentes. :wink:  Por exemplo, livros para a Ana, Paula e Ari podem ser gerados diretamente por meio dos links: 

> .../ONomeDaGente.html?nome=**ANA**&deleDela=**dela**

> .../ONomeDaGente.html?nome=**PAULA**&deleDela=**dela**

> .../ONomeDaGente.html?nome=**ARI**&deleDela=**dele**

Achou complicado? Não se preocupe. Preparamos para você uma planilha que vai gerar estes links automaticamente para você. :smile: 

Confira no tópico apresentado a seguir.

## Planilha para geração dos links
Preparamos uma planilha muito especial que vai gerar *automagicamente* :wink: *links* do livro **O Nome da Gente** para todos os alunos das suas turmas.


Para que o processo de geração aconteça, você vai ter que fornecer alguns dados dos seus alunos:
- email (opcional)
- telefone (opcional)
- De (nome do professor que vai aparecer no livro)
- Para (nome do aluno que vai receber o livro - usar no máximo 15 letras)
- genero (dele ou dela)

As colunas link e link resumido são gerados automaticamete pela planilha. 
<script>
var linkPlanilha;

function carregarPlanilha() {
  checkFile('Livros para uma turma (124578)', callbackCarregarPlanilha);
}
function callbackCarregarPlanilha(s) {

  if (s == "NOT-LOG" || s == "NOT-FILE") {
      console.log("callbackCarregarPlanilha()", s);
      return;
  }

  linkPlanilha = "https://docs.google.com/spreadsheets/d/" + s + "/edit?usp=sharing";
  var sHTML = 
  '<header style=" text-align: right">' + 
  '  <a href="javascript:reloadIframe()" alt="Recarregar"><i class="fas fa-redo"></i></a>' +
  '   &nbsp;' +
  '  <a href="javascript:expandIframe()" alt="Expandir"><i class="fas fa-external-link-alt"></i></a>' +
  '</header>' +
  '<div class="box-drive">' + 
  '  <iframe id="iframe-planilha" width="100%" height="100%" src="' + linkPlanilha + '"></iframe>' +
  '</div>';
  document.getElementById('planilha').innerHTML = sHTML;
}

function reloadIframe() {
  document.getElementById('iframe-planilha').src = linkPlanilha;
}

function expandIframe() {
  window.open(linkPlanilha,"_blank");
}
</script>

<spam id="planilha">
  <div class="box-drive">
    <div class = "box-drive-content">
        <a class = "box-drive" href="javascript:carregarPlanilha()" alt="Carregar"><i class="fas fa-redo"></i>
        <br />Carregar conteúdo.</a>
    </div>
  </div>
</spam>

