var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cronometro;
var hora
var contstart = 0

$('#str').click(function () {
    if (contstart == 0) {

        cronometro = setInterval(() => {
            ss++;

            if (ss == 59) {
                mm++;

                if (mm == 59) {
                    mm = 0;
                    hh++;
                }
            }


            hora = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);


            $('#count').text(hora);
            console.log(hora)
        }, tempo);

    }
    contstart += 1


})

$('#stp').click(function () {
    clearInterval(cronometro);
    contstart = 0
})


$('#res').click(function () {
    contstart = 0
    clearInterval(cronometro);
    hh = 0;
    mm = 0;
    ss = 0;

    $('#count').text('00:00:00')
    $('#reslap').text('')
    contlap = 0
})

var contlap = 0
$('#lap').click(function () {
    if (contstart != 0 && ss != 00) {
        contlap += 1
        $('#reslap').append(contlap + ' - ' + ' ' + hora + '<br>')

    }
})






