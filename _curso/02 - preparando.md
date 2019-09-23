---
title: "Preparando o ambiente"
permalink: /curso/preparando/
excerpt: "Preparando o ambiente antes de iniciar o curso."
last_modified_at: 2019-05-16T15:53:52-04:00
google: true
toc: true
---

<script type="text/javascript" src="/assets/js/google/googlectrl.js"></script>


## Conta no Google
Para participar deste curso é necessário que você tenha uma **conta no Google**. Se você usa o **Gmail**, então você já está pronto. Use o seu login e senha do Gmail para ter acesso aos materiais e ferramentas que serão utilizados durante o curso.

Não tem tem conta no Google? Não usa Gmail? Não tem problema, você pode criar uma conta gratuita [aqui](https://accounts.google.com/SignUp?hl=pt_BR&continue=https://myaccount.google.com/intro){:target="_blank"}.

O processo para criar a sua conta é simples. Se quiser ver como se faz, assista ao vídeo abaixo.

{% include youtubePlayer.html id="7ziosTqdyJ4" %}

## Habilitar o eBook

<div id="Habilitar-nao-logado">
  <p>Se você já tem uma conta no Google você precisa habilitá-la para poder utilizar este eBook. Para sabermos se a sua conta do Google já foi habilitada para utilizar este material clique no botão abaixo.</p>

  <div style="text-align: center">
    <button id="sign-in-or-out-button"
            style="margin-left: 25px"
            onClick="handleAuthClick()">Faça o login na sua conta Google
    </button>
  </div>
</div>

<div id="Habilitar-logado" style="display: none">
  <p>Se você já tem uma conta no Google você precisa habilitá-la para poder utilizar este material do curso.</p>

  <p>Neste momento você está acessando este material usando a conta <b><spam id='userEmail1'></spam></b>. Se este não é o seu e-mail <a onClick="handleAuthClick()">clique aqui</a>. Para verificar se a sua conta já foi liberada para acessar este eBook clique no botão abaixo.</p>

  <div style="text-align: center">
    <button id="check-course-button"
          style="margin-left: 25px"
          onClick="$('#check-course-button').attr('disabled', true);
                   $('#check-course-button').html('Verificando...');
                   $('#verificacao-curso-Nok').css('display', 'none'); 
                   $('#verificacao-curso-ok').css('display', 'none'); 
                   checkCourse(cursoVerificado)">Verificar se o eBook já foi habilitado
    </button>
  </div>
  <div id="verificacao-curso-ok" style="display: none">
    <p class="notice--success"><strong>Curso habilitado:</strong> Verificamos a sua conta e o eBook está habilitado. Seja bem-vindo. <img class="emoji" title=":sunglasses:" alt=":sunglasses:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f60e.png" height="20" width="20"></p>
  </div>
  <div id="verificacao-curso-Nok" style="display: none">
    <p class="notice--danger"><strong>NÃO habilitado:</strong> Verificamos a sua conta e o eBook <strong>NÃO está habilitado</strong>. Entre em contato para regularizar o seu acesso (equipe.aprender.digital@gmail.com).</p>
  </div>
</div>
