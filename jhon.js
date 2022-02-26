
//username
$("#username").keyup(function(){
    $('span.spot').remove()
    let $val1 = $(this).val();
    let $patten = /^[a-zA-z\.]+$/;
    if(!$patten.test($val1)){
        $(this).after('<span class="spot">enter valied name.</span>')
    }
    if($patten.test($val1)){
        $('span.spot').remove()
    }
})

//email
$("#email").keyup(function(){
    $('span.spot').remove()
    let $val1 = $(this).val();
    let $patten = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!$patten.test($val1)){
        $(this).after('<span class="spot">enter valied email.</span>')
        
    }
    if($patten.test($val1)){
        $('span.spot').remove()
    }
}) 

//phonenumber
$("#phonenumber").keyup(function(){
    $('span.spot').remove()
    let $val1 = $(this).val();
    let $patten = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(!$patten.test($val1)){
        $(this).after('<span class="spot">*enter valied email.</span>')    
    }
    if($patten.test($val1)){
        $('span.spot').remove()
    }
})


//password
$("#password").keyup(function()
{
    $("span.ps_err").remove();
    $("span.pw_err").remove();
    let $val3 = $(this).val();
    let $valreg4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/
    let $valreg3 = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/;
    if (!$valreg3.test($val3))
    {
        $(this).after('<span class="pw_err" >Weak</span>')
      
    }   
     if($valreg3.test($val3))
        {
            $(this).after('<span class="ps_err" >Strong</span>')
            $("span.pw_err").remove();
           
        }

}); 
