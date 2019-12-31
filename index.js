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
        window.location.href = "/search/label/Aljabar";
    });

    $("#materiMatdis").click(function () {
        window.location.href = "/search/label/Matematika%20Diskrit";
    });

    $("#materiGeometri").click(function () {
        window.location.href = "/search/label/Geometri";
    });

    $("#materiLogika").click(function () {
        window.location.href = "/search/label/Logika";
    });


    $("#materiTeoBilr").click(function () {
        window.location.href = "/search/label/Teori%20Bilangan";
    });

    $("#materiStatistika").click(function () {
        window.location.href = "/search/label/Statistika";
    });

    $("#materiKalkulus").click(function () {
        window.location.href = "/search/label/Kalkulus";
    });

    $("#materiAlgoritma").click(function () {
        window.location.href = "/search/label/Algoritma";
    });

    $("#materiPemrograman").click(function () {
        window.location.href = "/search/label/Programming";
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

    for (var a of posts) {
        $("#newArticle").append(blok(a.title, a.subTitle, a.text, a.author, a.postTime, a.link,
            (a.tags == undefined) ? [] : a.tags, (a.coverPicture == undefined) ? "" : a.coverPicture));
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

function blok(obj) {
    console.log(obj.postTime);

    return blok(obj.title, obj.subTitle, obj.text, obj.author, obj.postTime, obj.link,
        (obj.tags == undefined) ? [] : obj.tags, (obj.coverPicture == undefined) ? "" : obj.coverPicture);

}

function blok(judulArtikel, subtitleArtikel, teks,
    author, postTime, link, tags = [], srcPicture = "") {

    var template = '<div class="card shadow" style="min-width: 18rem;">';
    template += (srcPicture != "") ? '<img src="' + srcPicture + '" class="card-img-top" alt="Universe" />' : "";
    template += '<div class="card-body"> <div class="container"><div class="row mb-1"> <div class="col">';
    template += ' <h5 class="card-title text-dark"> <a href="' + link + '">' + judulArtikel + '</a></h5>';
    template += '<h6 class="card-subtitle mb-2 text-muted">' + subtitleArtikel + '</h6>';
    template += ' </div></div><div class="row mb-3"><div class="col"><p class="card-text text-justify">';
    template += teks;
    template += '</p></div></div><div class="row mb-3">';

    if (tags.length > 0) {
        template += '<div class="col-1 h4"><i class="fas fa-tag text-muted-super"></i></div><div class="col ml-1"><p class="card-text text-justify">';
        for (var i of tags) {
            template += ' <a class="kategori" href="' + encodeURI('/search/label/' + i) + '">' + i + '</a>';
        }
        template += '</p></div></div>';
    }

    template += '';
    template += '<div class="row mb-1"><div class="col-1"><div class="ml-1 circle-img rounded-circle"';
    template += 'style="background-image: url(' + author.photoUrl + ');"></div></div>';
    template += '<div class="offset-1"></div><div class="col-7 pl-4">';
    template += '<a  class="d-block text-muted c-author mb-1">' + author.name + '</a>';
    template += '<small class="text-muted c-calendar mt-0">' + postTime + '</small>';
    template += '  </div><div class="col-1 d-flex align-item-end"><div class="bookmark p-2 mx-auto">';
    template += '<a href="' + link + '"><i class="far fa-bookmark"></i><div class="sr-only">Pergi ke laman</div></a> </div>';
    template += '</div></div></div></div></div>';

    return template;
}

function mediaL(name, role, srcPic, about) {
    var template = '<div class="media mb-5"> <div class = "mr-4 team rounded-circle"' +
        'style = "background-image: url(' + srcPic + ');" > </div> <' +
        'div class = "media-body" > ';

    template += '<h5 class="mt-0">' + name + '</h5>' +
        '<p class="text-muted jabatan">' + role + '</p>' +
        '<p>' + about + '</p></div></div>';

    return template;
}

function mediaR(name, role, srcPic, about) {
    var template = '<div class="media mb-5"><div class="media-body text-right mr-1">' +
        '<h5 class="mt-0">' + name + '</h5>' +
        '<p class="text-muted jabatan">' + role + '</p>' +
        '<p>' + about + '</p></div>' +
        '<div class="ml-4 team rounded-circle" style="background-image: url(' + srcPic + ');"></div></div>';

    return template;
}