divOrders = document.getElementById("coffeeOrders")
let ordersUrl = ("https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
let submitOrder = document.getElementById("submitOrder")
submitOrder.addEventListener('click', function() {
  orderDrink()
})
let searchOrder= document.getElementById("searchEmail")
searchOrder.addEventListener('click', function() {
  searchEmail()
})  


function orderBase(){
  fetch(ordersUrl)
    .then(function(results){
      return results.json()
      .then(function(orders){
        //console.log(orders)
        for(email in orders){
          let user = orders[email]
          //console.log(user)
          let addy = user.emailAddress
          //console.log(addy)
          let drink = user.coffee
          let drinkOrder = 
          `
          <p>${addy} <-------------------> ${drink}</p>
          `
        divOrders.innerHTML += drinkOrder  
        }
      })
    }) 
}
function orderDrink(){
  let sitecoffee = document.getElementById("xcoffee").value
  let siteemailAddress = document.getElementById("xemailAddress").value
  console.log(sitecoffee)
  console.log(siteemailAddress)
  
  let order = {
      coffee : sitecoffee, 
      emailAddress : siteemailAddress
    }
    console.log(order)
    fetch(ordersUrl,{
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json'
    }
    }).then((response) =>{
      return response.json()
    }).then((json)=>{
    })
}

function searchEmail(searchOrder){
  fetch("${searchOrder}")
    .then(function(results){
      return results.json()
        .then(function(orders){
        //console.log(orders)
        let searchedOrder =
        `
        <h5>
        `
        } 

          
       //console.log(drink)
        
      })
    }) 
}
  



orderBase()


