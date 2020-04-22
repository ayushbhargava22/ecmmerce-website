document.getElementById('all-text').addEventListener("click", function(){
    var box = document.getElementById('all-dropdown');
    if (box.style.display == "block")
    {
        box.style.display = "none"
    }
    else{
        box.style.display = "block"
    }
})

document.getElementById('minus-collapse').addEventListener("click", function(){
    var box = document.getElementById('cate');
    if (box.style.display == "block")
    {
        box.style.display = "none"
    }
    else{
        box.style.display = "block"
    }
})

