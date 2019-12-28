$(document).ready(function () {
    // Header Trigger 
    $("#cari-trig").click(function () {
        $("#cari-list-trig").hide();
        $("#cari").toggleClass("d-none");
        $("#form-cari").focus();
    });

    $("#form-cari").blur(function () {
        $("#cari-list-trig").fadeIn("slow");
        $("#cari").toggleClass("d-none");
    });

    // Index Main
    $("#btnToCari").click(function () {
        $("html,body").animate({
            scrollTop: $("#pencarian").offset().top
        }, 2000);
    });

    $("#materiALjabar").click(function () {
        window.location.href = "#aljabar";
    });

    $("#materiMatdis").click(function () {
        window.location.href = "#matdis";
    });

    $("#materiGeometri").click(function () {
        window.location.href = "#geometri";
    });

    $("#materiLogika").click(function () {
        window.location.href = "#logika";
    });


    $("#materiTeoBilr").click(function () {
        window.location.href = "#teobil";
    });

    $("#materiStatistika").click(function () {
        window.location.href = "#statistika";
    });

    $("#materiKalkulus").click(function () {
        window.location.href = "#kalkulus";
    });

    $("#materiAlgoritma").click(function () {
        window.location.href = "#algoritma";
    });

    $("#materiPemrograman").click(function () {
        window.location.href = "#programming";
    });

});