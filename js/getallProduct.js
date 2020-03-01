window.onload = function() {
    // const tok = window.localStorage.getItem("token_merchant")
    // const merchant_id = window.localStorage.getItem("company_id")
    // if (tok !== null){
    fetch('http://localhost:8000/getProduct/',{
    }).then(data => {
        return data.json()
    }).then(data=>{
        let details = '';
        const url = 'http://localhost:8000/uploads/';
        data.forEach(element => {
            details += 
            `<div class="col-sm-3" data-div="${element._id}">
                    <div class="thumb-wrapper">
                        <div class="img-box">
                            <img src="${url + element.image}" class="img-responsive img-fluid" alt="">
                        </div>
                        <div class="thumb-content" id="test">
                            <h4>${element.product_name}</h4>
                            <p class="item-price"> <span>price : Rs ${element.price}</span></p>
                          <span>Quantity: ${element.quantity}</span>
                           
                            <br>
                            <a href="addtocart.html?id=${element._id}" > <input type="submit" id="submit" value="Addtocart"></a>
                
                        
                            
                        </div>						
                    </div>
                </div>`
        
        
        
        ;
});
document.getElementById('Products').innerHTML = details;


})


.catch(error => {
console.log(error)
})
    // }
    // else{
    //     window.location.href = "login.html"
    // }
}
