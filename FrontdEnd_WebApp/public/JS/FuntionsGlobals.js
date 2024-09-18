window.onload = function() {
    //const notUsuario = document.getElementById("notUser");

    if (isAdmin() === "false") {
      document.getElementById('notUser').style.display = 'none';
    }
  };
function isAdmin()
{
    const user = localStorage.getItem('user');
    const bandera="";
    //const notUsuario = document.getElementById("notUser");
    if(user == undefined || user == null)
    {
        this.bandera = false;
        //this.notUsuario.style.display = "none";
        return bandera;
    } else{
        this.bandera = true;
        //this.notUsuario.style.display = "block";
        return bandera;
    }
}
