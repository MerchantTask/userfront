  window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    // const email = window.localStorage.getItem('email');
    const user_id = window.localStorage.getItem('user_id');
    const tok = window.localStorage.getItem("user_token")
    if (tok !== null){
    var id = urlParams.get("id");
    this.console.log(id);
    fetch('http://localhost:8000/getdata/'+ id,{
    }).then(data => {
        return data.json()
  }).then(data => {
           console.log(data);

           fetch('http://localhost:8000/Addtocart', {
            method: 'Post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              product_name:data.product_name,
              quantity:data.quantity,
              details:data.details,
              price:data.price,
              image : data.image,
              remarks:'pending',
              user_id: user_id,
              product_id:id
           
            })
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('Success:', data);
          if (data.message =="Already Added"){
            this.alert("Already Added");
            window.location.href = 'getProduct.html';
          }
          else{
            this.alert("Add to cart");
            window.location.href = 'getAddtocart.html';
          }

        })
        .catch((error) => {
          console.error('Error:', error);
        });
     
          
            })
          

      .catch(error => {
          console.log(error)
      })
    } else{
      alert("You have to Login First")
      window.location.href = "login.html"
    }
    }
