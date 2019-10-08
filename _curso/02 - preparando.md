---
title: "Preparando o ambiente"
permalink: /curso/preparando/
excerpt: "Preparando o ambiente antes de iniciar o curso."
last_modified_at: 2019-05-16T15:53:52-04:00
google: true
toc: true
---

<script>
function setSigninStatus(isSignedIn) {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
      $('#userEmail1').html(user.getBasicProfile().getEmail());
      $('#Habilitar-nao-logado').css('display', 'none'); 
      $('#Habilitar-logado').css('display', 'inline-block'); 
      //$('#sign-in-or-out-button').html('Sign out');
      //$('#revoke-access-button').css('display', 'inline-block');
    } else {
      $('#Habilitar-nao-logado').css('display', 'inline-block'); 
      $('#Habilitar-logado').css('display', 'none'); 
      //$('#sign-in-or-out-button').html('Sign In/Authorize');
      //$('#revoke-access-button').css('display', 'none');
      //$('#auth-status').html('You have not authorized this app or you are ' +
      //    'signed out.');
    }
}

function cursoVerificado(resp) {
  $('#check-course-button').html('Verificar novamente');
  $('#check-course-button').attr('disabled', false);
  if (resp) {
        $('#verificacao-curso-ok').css('display', 'inline-block'); 
        $('#verificacao-curso-Nok').css('display', 'none'); 
  }
  else {
        $('#verificacao-curso-ok').css('display', 'none'); 
        $('#verificacao-curso-Nok').css('display', 'inline-block'); 
  }
}
</script>


## Conta no Google
Para utilizar este eBook é necessário que você tenha uma **conta no Google**. Se você usa o **Gmail**, então você já está pronto. Use o seu login e senha do Gmail para ter acesso aos materiais e ferramentas que serão apresentados.

Não tem tem conta no Google? Não usa Gmail? Não tem problema, você pode criar uma conta gratuita [aqui](https://accounts.google.com/SignUp?hl=pt_BR&continue=https://myaccount.google.com/intro){:target="_blank"}.

O processo para criar a sua conta é simples. Se quiser ver como se faz, assista ao vídeo abaixo.

{% include youtubePlayer.html id="7ziosTqdyJ4" %}

## Habilitar o eBook

<div id="Habilitar-nao-logado">
  <p>Se você já tem uma conta no Google você precisa habilitá-la para poder utilizar este eBook. Para sabermos se a sua conta do Google já foi habilitada para utilizar este material clique no botão abaixo.</p>

  <div style="text-align: center">
    <a id="sign-in-or-out-button" style="cursor:pointer">
      <img src="/assets/images/login_google.png" onclick="handleAuthClick()">
    </a>
  </div>
</div>

<div id="Habilitar-logado" style="display: none">
  <p>Se você já tem uma conta no Google você precisa habilitá-la para poder utilizar este material.</p>

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

## Comentários
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v4.0&appId=508861006604984&autoLogAppEvents=1"></script>
<div class="fb-comments" data-href="https://personalizar.aprender.digital/curso/preparando/" data-width="" data-numposts="10"></div>
