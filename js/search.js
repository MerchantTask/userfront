$(document).ready(function () {
  $('#searchButton').click(function (e) {
    e.preventDefault();

    $('#searchResults').empty();

    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    product_name = $("#product_name").val();
    quantity = $("#quantity").val();
    price = $("#price").val();
    


    data = {
      "product_name": product_name,
      "price": price,
      "quantity": quantity

    }   
  $.ajax({
        url: 'http://localhost:8000/search',
        type: 'post',
        dataType: 'json',
        data: data,

        success: function (res, textStatus, xhr) {
          
          $.each(res, function (index) {
            $('#searchResults').append(
              '<div class="col-sm-3" ">' +
          '<div class="thumb-wrapper">' +
          '<div class="img-boxt">' +
          '<img class="group list-group-image img-fluid" height= "150px" width:"100px" src="http://localhost:8000/uploads/' + res[
            index].image + '" alt="Image"  />' +
          '</div>' +
          '<div class="caption card-body">' +
          '<h4 class="group card-title inner list-group-item-heading"> ' + res[index].product_name +
          '</h4>' +
          '<div class="caption card-body">' +
          '<h4 class="group card-title inner list-group-item-heading">Quantity:' + res[index].quantity +
          '</h4>' +
          '<div class="caption card-body">' +
          '<h4 class="group card-title inner list-group-item-heading">Price: Rs ' + res[index].price +
          '</h4>' +
          '<br>'+
          '<div class="col-xs-6 col-md-6  ">' +
          '<a class="btn btn-warning" href="addtocart.html?id=' + res[index]._id +
          '">Add To Cart</a>' +
          
          '</div>' +

          '</div>' +
          '</div>' +
          '</div>' +
          '</div>'
            );
          });

        },
        error: function (xhr, textStatus, errorThrown) {
          console.log('Error in Operation');

        }
      });
});
});