function validate(){
  password1 = document.getElementById("password1").value;
  password2 = document.getElementById("password2").value;
  if(password1 != password2){
    alert("your passwords do not match")
  }
  else if(password1.length <= 7){
    alert("your passwords must be at least 8 characters long")
  }
}
