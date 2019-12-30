// DATABASE
var team = {
    "Bayu Samudra": ["Founder", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo velit est similique ut praesentium laborum quae ratione. Fuga eum dolor reiciendis? Excepturi quis ratione, repellendus enim illo asperiores. Tempora, ea?"]
}

$(document).ready(function () {
    $("#goToUp").toggleClass("d-none");
    $("#goToUp").hide();

    // Main Init
    twemoji.parse(document.body, {
        callback: function (icon, options) {
            return ''.concat(options.base, options.size, '/', icon, options.ext);
        }
    });

    $("#goToUp").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

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

    $(".goToTopik").click(function () {
        $("html,body").animate({
            scrollTop: $("#topik").offset().top
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

    // Load Table of Content
    $(".daftar").toggleClass("d-none");
    $(".daftar").hide();

    // $(".point").each(function () {
    //     var txt = $(this).text();
    //     $("#daftarIsi").append('<li onclick="goto(\'#' + $(this).attr("id") + '\')">' + txt + "</li>");
    // });

    window.onscroll = function () {
        if ($("body").scrollTop > 20 ||
            document.documentElement.scrollTop > 20 ||
            document.body.scrollTop > 20) {
            // $(".daftar").fadeIn("slow");
            $("#goToUp").fadeIn("slow");
        } else {
            // $(".daftar").fadeOut("slow");
            $("#goToUp").fadeOut("slow");
        }
    };

    $("#badanKomentar").click(function () {
        $("#kolomKomentar").focus();
    });

    if ($("#namaPenulis").length > 0) {
        $("#share").children("span").toggleClass("d-none");
        $("#waktuBaca").text(lamaBaca("#jumlahKata"));
    }

    if ($("#namaPenulis").length > 0) {
        $("#jabatanPenulis").text(team[$("#namaPenulis").text()][0]);
        $("#keteranganPenulis").text(team[$("#namaPenulis").text()][1]);
    }

    // FREE THE FREEZE
    $("body").toggleClass("noscroll");
    $("#coverLoadingPage").fadeOut("slow");
});

function goto(identiifier) {
    $("html,body").animate({
        scrollTop: $(identiifier).offset().top
    }, 2000);
}

function lamaBaca(cntTag) {
    var value = $(cntTag).text();
    return Math.ceil(value / 180);
}