---
title: "Geração para uma turma"
permalink: /curso/turma/
excerpt: "Gerando livros para toda uma turma"
last_modified_at: 2019-05-22T11:47:50-04:00
toc: true
google: true
---

{% include check-registration.html %} 


No capítulo [Geração individual]({{site.url}}/curso/individual) mostramos como gerar o livro para um único aluno. Neste capítulo também vamos usar o livro **O Nome da Gente** entretanto, gerando de uma única vez livros personalizados para toda uma turma.

**Nota:** O livro **O Nome da Gente** faz parte do banco de livros online e gratuito que é mantido pela nossa equipe do **APRENDER.digital** como parte do projeto **Dia Nacional do Livro Infantil ([DNLI](https://dnli.aprender.digital){:target="_blank"})**.
{: .notice--warning}

Continue lendo abaixo. Vamos mostrar para você como isso funciona. 

## Links para os livros
Não sei se no capítulo em que apresentamos a [Geração individual]({{site.url}}/curso/individual) dos livros você observou o conteúdo do link gerado em cada livro personalizado. 

Por exemplo, para o nome "JULIA" o link do livro gerado é o seguinte:

> https://livros.aprender.digital/ONomeDaGente.html?nome=**JULIA**&deleDela=**dela**

Isso nos permite um truque. Para gerarmos livros com nomes diferentes, basta gerarmos links com parâmetros diferentes. :wink:  Por exemplo, livros para a Ana, Paula e Ari podem ser gerados diretamente por meio dos links: 

> .../ONomeDaGente.html?nome=**ANA**&deleDela=**dela**
> .../ONomeDaGente.html?nome=**PAULA**&deleDela=**dela**
> .../ONomeDaGente.html?nome=**ARI**&deleDela=**dele**

Achou complicado? Não se preocupe. Preparamos para você uma planilha que vai gerar estes links automaticamente para você. :smile: 

Confira no tópico apresentado a seguir.

## Planilha para geração dos links
Preparamos uma planilha muito especial que vai gerar *automagicamente* :wink: *links* do livro **O Nome da Gente** para todos os alunos das suas turmas.

Para que o processo de geração aconteça, você vai ter que fornecer alguns dados dos seus alunos:
- Nome
- xxxx

%%PRECISA COLOCAR AQUI UM PROCESSO QUE BUSCA O ID E ABRE A PLANILHA. ACREDITO QUE PARA SIMPLIFICAR É MELHOR EU COLOCAR ALGUM NÚMERO DEPOIS DO NOME DO ARQUIVO PARA EVITAR "COLISÃO" COM ALGUM ARQUIVO EXISTENTE NO DRIVE DO ALUNO%%