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