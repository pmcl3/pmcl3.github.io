$(document).ready(function() {

    var modoMovil = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        modoMovil = true;
        console.log("MODO MOVÍL");

    }

    var anchuraFoto = parseInt($("#fotoCirculo").css("width"));


    $("#traje").width(anchuraFoto + anchuraFoto / 2);

    $("#saludo").animate({
        opacity: 1,
        left: "-=500"
    }, 1000);

    $("#traje").animate({
        opacity: 1,
        left: "+=500"
    }, 1000, function() {


        var texto = "Pablo Coronil is a graphic designer and illustrator based in Spain";


        window.setTimeout(function() {

            showText("#texto", texto, 0, 50);
        }, 0);

    });


    $("#traducir").css("left", tamVentana());

    if (modoMovil) {

        $("#opinion1").html("<p>Pablo es un profesional excelente con una gran dedicación y empeño por lo que hace.</p>");

    } else {

        $("#view-source").attr("href", "mailto:pamacola10@hotmail.com");
        $("#view-source").html("<i class='material-icons'>comment</i> TEXT NOW!");
    }

});

var showText = function(target, message, index, interval) {

    if (index < message.length) {

        $(target).append(message[index++]);
        setTimeout(function() {

            showText(target, message, index, interval);
        }, interval);
    }
}

function tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined') {
        tam = [window.innerWidth, window.innerHeight];
    } else if (typeof document.documentElement != 'undefined' &&
        typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        tam = [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ];
    } else {
        tam = [
            document.getElementsByTagName('body')[0].clientWidth,
            document.getElementsByTagName('body')[0].clientHeight
        ];
    }
    return tam;
}
