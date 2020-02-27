$(document).ready(function(){

    $("#register").on("submit",function(e){
        e.preventDefault();
        full_name = $("#full_name").val();
        phone     = $("#phone").val();
        address   = $("#address").val();
        email     = $("#email").val();
        password  = $("#password").val();

        data = {
            "full_name" : full_name,
            "phone"     : phone,
            "address"   : address,
            "email"     : email,
            "password"  : password

        } 
        $.ajax({
            url      : 'http://localhost:8000/user/userRegister/',
            type     : "post",
            dataType : "json",
            data     : data,
            
            success : function(res, textStatus, xhr){
                if(res.message == "Register Sucessful"){
                    alert("Register Successful")
                    location.href = "login.html"
                }
            },
            error:function(xhr,textStatus,errorThrown){
                var result = (xhr.responseJSON);
                if(result.full_name){
                    alert(result.full_name.message)
                }
                if(result.phone){
                    alert(result.phone.message)
                }
                if(result.address){
                    alert(result.address.message)
                }
                if(result.email){
                    alert(result.email.message)
                }
                if(result.password){
                    alert(result.password.message)
                }
                
            }
        });
    });
});