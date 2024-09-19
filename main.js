$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        // dots: false,
        arrows: false
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    // let mascara = if (celular) ? '(00) 00000-0000' : '(00) 0000-0000'
    // $('#telefone').mask(mascara)

    $('#telefone').mask('(00) 00000-0000')

    /* 
    $('#data-nasc').mask('00/00/0000', {
        placeholder : '__/__/___'
    })

    $('#placa-carro').mask('SSS-000', {
        placeholder : 'ABC-1234'
    })
    */
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})
