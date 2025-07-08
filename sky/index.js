var addbutton=document.getElementById("add-button")
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box")

addbutton.addEventListener("click",function(){
     popupbox.style.display="block"
     popupoverlay.style.display="block"
})

var deletebutton=document.querySelector(".popup-delete-button")
deletebutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})



var container=document.querySelector(".container")
var popupsave=document.querySelector(".popup-save-button")

var popupinput=document.querySelector(".popup-book-name")
var popupauthor=document.querySelector(".popup-book-author")
var popuptext=document.querySelector(".popup-text")

popupsave.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${popupinput.value}</h2>
            <h5>${popupauthor.value}</h5>
            <p>${popuptext.value}</p>
            <button onclick="cencel(event)">Delete</button>`
            container.append(div)
})

function cencel(event)
{
   event.target.parentElement.remove()
}


