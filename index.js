var noOfButtons = document.querySelectorAll(".command-btn").length;
var buttons = document.querySelectorAll("button")

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var btnHtml = this.innerHTML;
    show_hide(btnHtml)
  });
}

function show_hide(btnHtml){
    var div = document.getElementById(`${btnHtml}`)
        if(div.style.display === 'none'){
            div.style.display = 'block'
        }else{
            div.style.display = 'none'
        }
    
}

