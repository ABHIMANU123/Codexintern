 let Light=true ;
 const btn = document.querySelector(".btn")
 const container = document.querySelector(".container")
 btn.addEventListener("click",(e) =>{
    e.preventDefault()
    if (Light===true){
      Light=false ;
        container.style.backgroundColor ="black"
        btn.innerText = "Dark"
    }else{
      Light=true ;
        container.style.backgroundColor ="white"
        btn.innerText = "Light"
    } 

})

