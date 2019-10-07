---
title: "Gerando PDF - O Nome da Gente"
permalink: /curso/pdf/
excerpt: "Gerando PDF com a versão personalizada do livro O NOME DA GENTE"
last_modified_at: 2019-10-07T15:09:50-04:00
toc: true
google: true
--- 

{% include check-registration.html %} 
{% include find-file.html %}


No capítulo [Geração para uma turma]({{site.url}}/curso/turma/) mostramos como gerar de uma única vez livros personalizados para toda uma turma. Os livros foram gerandos na forma de links para permitir o seu compartilhamento via WhatsApp, Messenger ou e-mail.

Neste capítulo mostramos como gerar o livro de cada aluno da turma no formato PDF. Este formato poderá ser usado para que o livro possa ser lido offline (sem conexão com a Internet) ou impresso para uso em sala de aula.

**Nota:** O livro **O Nome da Gente** faz parte do banco de livros online e gratuito que é mantido pela nossa equipe do **APRENDER.digital** como parte do projeto **Dia Nacional do Livro Infantil ([DNLI](https://dnli.aprender.digital){:target="_blank"})**.
{: .notice--warning}

Continue lendo abaixo. Vamos mostrar para você como isso funciona. 

## Planilha para geração dos PDFs
Preparamos uma planilha muito especial que vai gerar *automagicamente* :wink: *PDF* do livro **O Nome da Gente** para todos os alunos das suas turmas.


Para que o processo de geração aconteça, você deve fornecer os dados para geração destes livros:
- Para (nome do aluno que vai receber o livro - usar no máximo 15 letras);
- gênero (dele ou dela).

A coluna <b>Link para o Google Drive</b> será gerada automaticamente. Ela contém a localização do PDF dentro do seu Google Drive.

Preencha diretamente na planilha abaixo os dados dos alunos da sua turma. 

<script>
var linkPlanilha;

function carregarPlanilha() {
  checkFile(nomePlanilhaPDF, callbackCarregarPlanilha);
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
Depois do preenchimento, você deve usar a opção de menu chamada **GERAR**, presente na planilha acima, para gerar os PDFs. Use o botão <i class="fas fa-external-link-alt"></i>, que fica no topo da planilha, para abri-la expandida em uma nova aba do navegador para facilitar o acesso ao menu <b>GERAR</b> e a opção <b>Gerar PDfs</b>. A primeira vez que você executar este menu o Google vai solicitar que você **autorize esta execução**.

**Nota**: O tempo de geração está relacionado ao número de alunos na planilha. Cada livro leva cerca de 10 segundos para gerar. Acompanhe a geração por meio das mensagens apresentadas na base da planilha. 
{: .notice--warning}

Ao término do processo de geração você encontrará os arquivos PDF dentro do seu Google Drive em uma pasta chamada **O NOME DA GENTE**. A coluna <b>Link para o Google Drive</b> contém um link que abre cada um dos PDFs gerados no seu Google Drive.

Para fazer o *download* de todos os livros gerados, use o botão direito do mouse sobre a pasta **O NOME DA GENTE** no seu Google Drive.

<p align="middle">
<img  width="400" height="100%" src="/assets/images/curso/menu_gdrive download+seta.jpg">
</p>

## Mais de uma turma
Caso tenha mais de uma turma, você deve preecher uma planilha por turma. Você pode usar a mesma planilha apresentada acima ou usar o botão <i class="fas fa-external-link-alt"></i>, que fica no topo da planilha, para abri-la expandida em uma nova aba do navegador.

Para preencher os dados da segunda turma, siga os passos abaixo:
1. Pressione o ícone <i class="fas fa-sort-down"></i> que fica ao lado da palavra "Turma 1".
1. Escolha a opção "Duplicar".
1. Preencha a nova planilha chamada "Cópia de Turma 1".
1. Para alterar o nome de cada aba da planilha com o nome da sua turma use a opção "Renomear..." disponível no ícone <i class="fas fa-sort-down"></i>.
1. A geração dos links continua sendo feita por meio do menu "LINKS \| Gerar links". Ele deve ser executado separadamente na planilha de cada turma.
<p align="middle">
<img  width="400" height="100%" src="/assets/images/curso/duplicar_e_renomear.gif">
</p>