document.getElementById("showTime").innerHTML = Date();

document.addEventListener("mouseenter", mouseEnter);
document.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementsByTagName("A")[0].style.fontWeight = "bold";
  document.getElementsByTagName("A")[1].style.fontWeight = "bold";
  document.getElementsByTagName("A")[2].style.fontWeight = "bold";
  document.getElementsByTagName("A")[3].style.fontWeight = "bold";
  document.getElementsByTagName("A")[4].style.fontWeight = "bold";
  document.getElementsByTagName("A")[5].style.fontWeight = "bold";
  document.getElementsByTagName("A")[6].style.fontWeight = "bold";
  document.getElementsByTagName("A")[7].style.fontWeight = "bold";
}

function mouseLeave() {
  document.getElementsByTagName("A")[0].style.fontWeight = "normal";
  document.getElementsByTagName("A")[1].style.fontWeight = "normal";
  document.getElementsByTagName("A")[2].style.fontWeight = "normal";
  document.getElementsByTagName("A")[3].style.fontWeight = "normal";
  document.getElementsByTagName("A")[4].style.fontWeight = "normal";
  document.getElementsByTagName("A")[5].style.fontWeight = "normal";
  document.getElementsByTagName("A")[6].style.fontWeight = "normal";
  document.getElementsByTagName("A")[7].style.fontWeight = "normal";
}

window.alert("The prayer times shown will be for a whole month.");

function enquirySubmit()
{
  // alert("clicked");

  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
if(name)
  {
    if(email)
      {
        if(validateemail(email))
          alert("Your Name : "+name +"\n Your Email : "+email);
      }
      else{
        alert("Please Enter Email");
      }
  }
  else{
    alert("Please Enter Name");
  }
}

function validateemail(email)
{
var x=email;
var atposition=x.indexOf("@");
var dotposition=x.lastIndexOf(".");
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
  alert("Please enter a valid e-mail address");
  return false;
  }
  else
    return true;
}
