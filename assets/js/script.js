$(document).ready(function () {

    $(".devo-nav ").html(
        '<div class="container">' +
            '<div class="row">' +
            '<div class="col-lg-3 col-6">' +
            ' <div class="logo-box"> ' +
            ' <a href="./index.html"><img src="assets/img/logo.png" class="img-fluid"></a>' +
            " </div>" +
            " </div>" +
            ' <div class="col-lg-9 col-6 "> ' +
            ' <div class="bars-icon"> ' +
            ' <i class="fa fa-bars" aria-hidden="true"></i>' +
            " </div>" +
            ' <div class="overlay-menu"></div>' +
            ' <div class="menu-nav"> ' +
            ' <div class="devo-exit">' +
            ' <i class="fa fa-times" aria-hidden="true"></i>' +
            " </div>" +
            ' <ul class="menu-list list-unstyled"> ' +
            ' <li class="menu-item">' +
            ' <a href="./index.html"> الصفحة الرئيسية </a>' +
            " </li>" +
            ' <li class="menu-item"> ' +
            ' <a href="./themissing.html"> المفقودين</a>' +
            " </li>" +
            ' <li class="menu-item"> ' +
            '<a href="./about-us.html">من نحن</a>' +
            " </li>" +
            '<!-- <li class="menu-item">' +
            ' <a href="./instructions.html">ارشادات</a>' +
            " </li> -->" +
            " </ul>" +
            ' <div class="main-btns ">' +
            ' <a href="./register.html" class="devo-wrap first-wrap">حساب جديد</a>' +
            ' <a href="./login.html" class="devo-wrap sec-wrap">تسجيل الدخول</a>' +
            " </div>" +
            " </div>" +
            " </div>" +
            " </div>" +
            "</div>"
    );
    $(".login-page .devo-nav ").html(
        '<div class="container">' +
            '<div class="row">' +
            '<div class="col-lg-3 col-6">' +
            ' <div class="logo-box"> ' +
            ' <a href="./index.html"><img src="assets/img/logo.png" class="img-fluid"></a>' +
            " </div>" +
            " </div>" +
            " </div>" +
            "</div>"
    );

    // list-item a

    $(".devo-breadcrumbs .list-item a").click(function () {
        if ($(this).html() == "الرئيسية") {
            console.log($(this).attr("href", "./index.html"));
        }
    });

    // footer
    $(".footer-content .copyright-box .copyright-p").html("موقع المفقود موجود اونلاين لعام © 2021 تم انشائه بواسطة فريق المفقود موجود");

    //menu in tablet and phonne
    $(".devo-nav .bars-icon i").click(function () {
        $(".devo-nav .menu-nav").addClass("open-menu");
        $(".overlay-menu").show();
        $("body , html").addClass("devo-hidden");
    });
    $(".devo-nav .menu-nav .devo-exit , .overlay-menu").click(function () {
        $(".devo-nav .menu-nav").removeClass("open-menu");
        $(".overlay-menu").hide();
        $("body , html").removeClass("devo-hidden");
    });

    // toggle password
    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(".log-in-button").click(function () {
        if (input.attr("type") == "text") {
            input.attr("type", "password");
        } else {
            input.attr("type", "password");
        }
    });

    // niceSelect
    $("select").niceSelect();

    // dropify
    $(".dropify").dropify();

    //   checkbox-box

    $(".checkbox-box .pretty input").click(function () {
        $(this).parent().addClass("checkbox-checked").siblings().removeClass("checkbox-checked");
    });
});
