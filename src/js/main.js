$(document).ready(function() {
    $("#nav ul li:eq(1)").mouseover(function () {
        $("#navAbout").show();
    }).mouseout(function () {
        $("#navAbout").hide();
    });

    $("#nav ul li:eq(2)").mouseover(function () {
        $("#navLife").show();
    }).mouseout(function () {
        $("#navLife").hide();
    });

    $("#nav ul li:eq(3)").mouseover(function () {
        $("#navEducate").show();
    }).mouseout(function () {
        $("#navEducate").hide();
    });

    $("#mainmenu .navClassTwo:eq(0)").mouseover(function () {
        $("#mainmenu .navClassTwo:eq(0)").show();
    }).mouseout(function () {
        $("#mainmenu .navClassTwo:eq(0)").hide();
    });

    $("#mainmenu .navClassTwo:eq(1)").mouseover(function () {
        $("#mainmenu .navClassTwo:eq(1)").show();
    }).mouseout(function () {
        $("#mainmenu .navClassTwo:eq(1)").hide();
    });

    $("#mainmenu .navClassTwo:eq(2)").mouseover(function () {
        $("#mainmenu .navClassTwo:eq(2)").show();
    }).mouseout(function () {
        $("#mainmenu .navClassTwo:eq(2)").hide();
    });

    $('#myCarousel').carousel({
        interval: 2000
    })

    $('#demo').kxbdMarquee({
        direction:'left',
        eventA:'mouseenter',
        eventB:'mouseleave'
    });

    $.fn.kxbdMarquee.defaults = {
        isEqual:true,//所有滚动的元素长宽是否相等,true,false
        loop: 0,//循环滚动次数，0时无限
        direction: 'left',//滚动方向，'left','right','up','down'
        scrollAmount:1,//步长
        scrollDelay:20,//时长
        newAmount:3,//加速滚动的步长
        eventA:'mousedown',//鼠标事件，加速
        eventB:'mouseup'//鼠标事件，原速
    };

    var midBoxHeight = $("#prolistRight").height();
    $("#middleBox").css("height",midBoxHeight);
})

function isOK() {
    var isName = new RegExp("^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$");
    var isEmail = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    var isQQ = new RegExp("^[1-9][0-9]{4,14}$");
    var isPhone = new RegExp("^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$");

    if(!$("#name").val().match(isName)){
        alert("用戶名格式不對");
        $("#name").onfocus;
        return false;
    }

    if(!$("#email").val().match(isEmail)){
        alert("郵箱格式不對");
        $("#email").onfocus;
        return false;
    }

    if(!$("#QQ").val().match(isQQ)){
        alert("QQ格式不對");
        $("#QQ").onfocus;
        return false;
    }

    if(!$("#phone").val().match(isPhone)){
        alert("電話格式不對");
        $("#phone").onfocus;
        return false;
    }

    if($("#content").val().length > 250){
        alert("內容超出字數限制");
        $("#content").onfocus;
        return false;
    }

    return true;
}
