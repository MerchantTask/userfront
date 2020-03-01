window.onload = function () {
	// const email = window.localStorage.getItem('email');
	const user_id = window.localStorage.getItem('user_id');

	const tok = window.localStorage.getItem("user_token")

	if (tok !== null) {
		fetch('http://localhost:8000/getAddtocart/' + user_id, {

			}).then(data => {
				return data.json()
			})
			.then(data => {
				let detail = '';
				const url = 'http://localhost:8000/uploads/';

				var totalCart = 0;
				for (var item in data) {
					totalCart += data[item].price * 1;
					// sessionStorage.setItem('shoppingCart-' + data[item]._id,data[item].price);
				}
				$("#totalPrice").html(totalCart);

				data.forEach(element => {

					detail +=

						`<div class="col-sm-3" data-div="${element._id}">
    							<div class="thumb-wrapper">
    								<div class="img-box">
    									<img src="${url + element.image}" class="img-responsive img-fluid" alt="">
    								</div>
    								<div class="thumb-content" id="test">
    									<h4>${element.product_name}</h4>
										<p class="item-price"> <span>price : Rs ${element.price}</span></p>
										
										<p class="item-price"> <span>Quantity : </span>
										
										
										<input type="submit" value="-" id="subtract_quantity" onclick="subtractQuantity('${element._id}','${element.price}')">  
									<input type="text" value="1" id="quantity-${element._id}" style="width:30px; font-weight:bold;color:red" readonly>
									    
									<input type="submit" value="+" id="add_quantity" onclick="addQuantity('${element._id}','${element.quantity}','${element.price}')">
									</p>            
										<p class="item-price"> <span>Details : ${element.details}</span></p>
										<p class="item-total"> <span>Item Total : </span><span id="price-${element._id}">${element.price}</span></p>
									
										
										<br>
										
							
										<input type="submit" value="Remove" id="remove" onclick="remove('${element._id}')"> 
									
										
    								</div>						
    							</div>
							</div>`

					;



				});

				document.getElementById('Addtocart').innerHTML = detail;
			})
			

		

	} else {
		window.location.href = "login.html"
	}
	
}