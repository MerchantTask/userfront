$(document).ready(function(){

        $("#login").on("submit",function(e){
            e.preventDefault();
            email       = $("#email").val();
            password    = $("#password").val();
            
            data = {
                "email"     : email,
                "password"  : password
            }
            $.ajax({
                url         : 'http://localhost:8000/user/userLogin/',
                type        : 'post',
                dataType    : 'json',
                data        : data,

                success:function(res,textStatus,xhr){
                    if(res.user_token !=null){
                        localStorage.setItem('user_token',res.user_token);
                        localStorage.setItem('user_id',res.user_id);
                        localStorage.setItem('user_email',res.user_email);
                        alert("login Sucessful");
                        location.href = "index.html";
                    }
                    else{
                        alert(res.message);
                    }
                },
                error:function(xhr,textStatus,errorThrown){
                    console.log("erron in operation");
                }
            })
        })
    });