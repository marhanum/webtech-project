function getSourceSriNirwana() {
  alert("The source is http://www.kuala-lumpur.ws/food-dining/nirwana-maju.htm");
}
function getSourceArabesque() {
  alert("The source is http://www.kuala-lumpur.ws/magazine/arabesque-kuala-lumpur.htm");
}
function getSourceMelurThyme() {
  alert("The source is http://www.kuala-lumpur.ws/magazine/melur-thyme.htm");
}
function getSourceNationalMosque() {
  alert("The source is http://www.kuala-lumpur.ws/attractions/masjid-negara.htm");
}
function getSourceMasjidJamek() {
  alert("The source is http://www.kuala-lumpur.ws/magazine/masjid-jamek.htm");
}
function getSourceIAMM() {
  alert("The source is http://www.kuala-lumpur.ws/magazine/museum-of-islamic-arts.htm");
}
function contactSubmit()
{
  // alert("clicked");

  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var num = document.getElementById("mobile_number").value;
  var subject = document.getElementById("subject").value;
if(name)
  {
    if(email)
      {
        if(validateemail(email))
          {
            if(validateNum(num))
            {
          alert("Your Name : "+name +"\n Your Email : "+email);
            }
          }
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
