 var popoverlay=document.querySelector(".pop-overlay")
 var popupbox=document.querySelector(".popup-box")

 var addpopupbutton=document.getElementById("add-popup")

 addpopupbutton.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"

 })

 var cancelbutton=document.getElementById("cancel-popup")
 cancelbutton.addEventListener("click",function(event ){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"
 })

 var container=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitleinput=document.getElementById("book-title-input")
 var bookauthorinput=document.getElementById("book-author-input")
 var booktextinput=document.getElementById("book-description-input")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2> 
            <h5>${bookauthorinput.value}</h5>
            <p>${booktextinput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div )
    popupbox.style.display="none"
    popoverlay.style.display="none"
 })

 function deletebook(event)
 {
   event.target.parentElement.remove()
 }