// var api = impress();
$( document ).ready( function() {
    impress().init();
    let arkanoidBlocks = $('.arkanoid-blocks');
    for (let i = 0; i < 60; i++) {
        if (i % 3 && i % 7) {
            arkanoidBlocks.append('<div class="arkanoid-elem-block"></div>');
        } else {
            arkanoidBlocks.append('<div class="arkanoid-elem-block style-alt"></div>');
        }
    }
} );

$('.slide-control-prev').click(function() { impress().prev(); });
$('.slide-control-next').click(function() { impress().next(); });
