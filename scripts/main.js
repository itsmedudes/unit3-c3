// https://masai-vouchers-api.herokuapp.com/api/vouchers


   function submit(){
   
      let obj ={
         name: document.getElementById("name").value,
         email: document.getElementById("email").value,
         address: document.getElementById("address").value,
         wallet: document.getElementById("amount").value,
      }
   
      
      localStorage.setItem("user",JSON.stringify(obj))
      window.location.reload()
      }





