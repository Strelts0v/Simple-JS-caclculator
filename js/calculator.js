$(document).ready(function(){
    $(".calc-ce").click(function(){
        $(".display").text("");
    });
    $(".calc-0").click(function(){
        $(".display").append("0");
    });
    $(".calc-1").click(function(){
        $(".display").append("1");
    });
    $(".calc-2").click(function(){
        $(".display").append("2");
    });
    $(".calc-3").click(function(){
        $(".display").append("3");
    });
    $(".calc-4").click(function(){
        $(".display").append("4");
    });
    $(".calc-5").click(function(){
        $(".display").append("5");
    });
    $(".calc-6").click(function(){
        $(".display").append("6");
    });
    $(".calc-7").click(function(){
        $(".display").append("7");
    });
    $(".calc-8").click(function(){
        $(".display").append("8");
    });
    $(".calc-9").click(function(){
        $(".display").append("9");
    });
    $(".calc-dot").click(function(){
        $(".display").append(".");
    });
    $(".calc-plus").click(function(){
        $(".display").append("+");
    });
    $(".calc-sub").click(function(){
        $(".display").append("-");
    });
    $(".calc-mult").click(function(){
        $(".display").append("*");
    });
    $(".calc-div").click(function(){
        $(".display").append("/");
    });
    $(".calc-modulo").click(function(){
        $(".display").append("%");
    });
    $(".calc-equal").click(function(){
        $(".display").text(eval($(".display").text()));
    });
});