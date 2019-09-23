---
title: "Geração para uma turma"
permalink: /curso/turma/
excerpt: "Gerando livros para toda uma turma"
last_modified_at: 2019-09-23T15:47:50-04:00
toc: true
google: true
---

{% include check-registration.html %} 
{% include find-file.html %}


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
- email (pais ou responsáveis caso os livros sejam compartilhados por e-mail);
- telefone (opcional);
- De (nome do professor que vai aparecer no livro);
- Para (nome do aluno que vai receber o livro - usar no máximo 15 letras);
- gênero (dele ou dela).

As colunas <b>link</b> e <b>link resumido</b> são gerados automaticamente pela planilha.

Preencha diretamente na planilha abaixo os dados dos alunos da sua turma. 

<script>
var linkPlanilha;

function carregarPlanilha() {
  checkFile(nomePlanilhaCurso, callbackCarregarPlanilha);
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

<br>
Depois do preenchimento, você deve usar a opção de menu chamada **LINK**, presente na planilha acima, para gerar os links. Use o botão <i class="fas fa-external-link-alt"></i>, que fica no topo da planilha, para abri-la expandida em uma nova aba do navegador para facilitar o acesso ao menu <b>LINK</b> e a opção <b>Gerar links</b>.
<p align="middle">
<img  width="400" height="100%" src="/assets/images/curso/menu_link.gif">
</p>

## Mais de uma turma
Caso tenha mais de uma turma, você deve preecher uma planilha por turma. Você pode usar a mesma planilha apresentada acima ou usar o botão <i class="fas fa-external-link-alt"></i>, que fica no topo da planilha, para abri-la expandida em uma nova aba do navegador.

Para preencher os dados da segunda turma, siga os passos abaixo:
1. Pressione o ícone <i class="fas fa-sort-down"></i> que fica ao lado da palavra "Página1".
1. Escolha a opção "Duplicar".
1. Preencha a nova planilha chamada "Cópia de Página1".
1. Para alterar o nome de cada aba da planilha com o nome da sua turma use a opção "Renomear..." disponível no ícone <i class="fas fa-sort-down"></i>.
1. A geração dos links continua sendo feita por meio do menu "LINKS \| Gerar links". Ele deve ser executado separadamente na planilha de cada turma.
<p align="middle">
<img  width="400" height="100%" src="/assets/images/curso/duplicar_e_renomear.gif">
</p>