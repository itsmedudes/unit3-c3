purchaseArr=JSON.parse(localStorage.getItem("purchase"))
total=localStorage.getItem("amount")

oldmonk(purchaseArr)
redbeer(total)

function oldmonk(purchaseArr){
    

purchaseArr.forEach(function(elem) {
    var div = document.createElement("div")
    var img = document.createElement("img")
    img.src=elem.image
    var name = document.createElement("p")
    name.innerText=elem.name
    var price = document.createElement("p")
    price.innerText=elem.price
    div.append(img,name,price)
    document.querySelector("#purchased_vouchers").append(div)
});
}
function redbeer(total){
document.querySelector("#wallet_balance").innerText=total


}