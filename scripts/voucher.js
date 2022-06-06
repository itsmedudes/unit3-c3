ohno()
async function ohno(){
   try{
       var url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
       
       let res = await fetch(url)
       
       let data = await res.json()
       
       yes(data[0].vouchers)
      //  console.log(data[0])
   }
   catch (err){
       console.log(err)
   }
   }
   
   var arr = JSON.parse(localStorage.getItem("user"))
   
  
   
   var total = JSON.parse(localStorage.getItem("total"))|| 0
   chahcha(arr)
   
   function  chahcha(arr){
       
      
   
       var max=arr.amount-total
       
   
       document.querySelector("#wallet_balance").innerText=(max)
   localStorage.setItem("amount",max)
   }
   
   
   function yes(data){
   var voucher_list=document.querySelector("#voucher_list")
       data.forEach(function(elem){
           var voucher = document.createElement("div")
           voucher.setAttribute("class","voucher")
           var name = document.createElement("p")
           name.innerText=elem.name
           var image = document.createElement("img")
           image.src=elem.image
           var image = document.createElement("img")
           image.src=elem.image
           var price = document.createElement("p")
           price.innerText=elem.price
           var button = document.createElement("button")
           button.innerText="Purchase"
           button.setAttribute("class","buy_voucher")
           button.addEventListener("click",function(){
               ishq(elem)
           })
           voucher.append(image,name,price,button)
           
          
           voucher_list.append(voucher)
       });
   } 
   
   
   var purchaseArr= JSON.parse(localStorage.getItem("purchase")) || []
   function ishq(elem){
       
   var obj={
       name:elem.name,
       image:elem.image,
       price:elem.price
   }
   total+=elem.price
   purchaseArr.push(obj)
   if(elem.price<document.querySelector("#wallet_balance").innerText){
   localStorage.setItem("purchase",JSON.stringify(purchaseArr))
   localStorage.setItem("total",JSON.stringify(total))
   alert("Hurray! purchase successful")
   window.location.reload()
   }
   else{
       alert("Sorry! insufficient balance")
   }
   }