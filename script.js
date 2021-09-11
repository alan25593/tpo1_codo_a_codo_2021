
// validar formulario

const enviar=()=>{
    const name = document.getElementById("nombre").value;
    const correo = document.getElementById("mail").value;    
    const disponibilidad = document.getElementById("disp").value;    
  
    if(name==""){
      document.getElementById("enombre").innerHTML = "* El campo nombre no puede estar vacío";
    }else{
      document.getElementById("enombre").innerHTML = "";
    }
    if(correo==""){
      document.getElementById("ecorreo").innerHTML = "* El campo mail no puede estar vacío";
    }else{
      document.getElementById("ecorreo").innerHTML = "";
    }
   
    if(name!="" && correo !=""){
      alert("Gracias por eleguirnos "+name+", un asesor se pondrá en contacto por la "+disponibilidad+".")
      //Limpiar campos
      name=""
      correo=""

      }


}



//agrandar foto

const img = document.querySelectorAll(".img-box");
const win = document.querySelector(".window");
const fullImg = document.querySelector(".full-img");

img.forEach((imgs) => {
  imgs.addEventListener("click", () => {
    const val = imgs.getAttribute("data-value");
    win.classList.add("open");
    fullImg.src = `/assets/${val}.jpeg`;
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("window")) {
    win.classList.remove("open");
  }
});