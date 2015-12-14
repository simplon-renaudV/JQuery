$(document).ready(function() {
   $("#msgErreur").hide();
   $("#divMail").hide();

   pwd = document.getElementById('pwd');

   $("#bouton").click(function(){
      if (pwd.validity.valid == false)
      {
         $("#msgErreur").show("fast");
      }  
      else
      {
         $("#formulaire").hide();
          window.open("http://simplon-renaudv.github.io/");
      }
      return false;
   });

   $("#mdpOubli").click(function(){
      $("#divLogin").hide();
      $("#divPwd").hide();
      $("#mdpOubli").hide();
      $("#divMail").show("fast");
   });

});