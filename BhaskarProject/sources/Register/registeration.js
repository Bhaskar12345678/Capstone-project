
function checkPasswordMatch() {
    var password = $("#txt_password").val();
    var confirmPassword = $("#txt_confirm_password").val();

    if (password != confirmPassword)
        $("#divCheckPasswordMatch").html("Passwords do not match!");
    else
        $("#divCheckPasswordMatch").html("Passwords match.");
}

function enableDisableSubmit(){
  if ($("#inputDeclaration").prop("checked") == true){
    $("#btn_submit").toggle(true);
  }
  else{
    $("#btn_submit").toggle(false);
  }

}

$(document).ready(function () {
  $('#myModal').modal('hide');
  $("#btn_submit").toggle(false);
   $("#txt_confirm_password").keyup(checkPasswordMatch);
   $("#inputDeclaration").click(enableDisableSubmit);
});
