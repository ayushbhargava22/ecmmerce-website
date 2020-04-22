/*let i
const button = document.querySelector("#allproducts-filteration").children
for(i=0 ; i<button.length ; i++)
{
    button[i].addEventListener("click", function(){
        console.log(this.getAttribute("data-target"))
    })
}
const target = this.getAttribute("data-target") ;

let t
const btn = document.getElementById('btnnn')
console.log(btn)
btn.addEventListener("click", function(){
    t = console.log(this.getAttribute("data-target"))
})

const pro = document.querySelector(".products-center").children
console.log(pro)
for(let k=0 ; k<pro.length;k++){
    pro[k].style.display ="none"
    if(pro[k].getAttribute("data-id") == t){
        pro[k].style.display ="block"
    }
}
