function sendMail(){
    var para={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };

const serviceID="service_livpdek";
const templateID="template_nwi7s44";

emailjs.send(serviceID,templateID,para)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully");
    }
)
.catch((err)=>console.log(err));
}