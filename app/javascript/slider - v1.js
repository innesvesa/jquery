/**
 *  Function slidePrev
 *  étape 1 : positionner ul en left - (largerur du slider) 
 *  etape 2 : sumultanément, passer le dernirer li devan le 1er Li
 *  étape 3 : repositionner le  UL en left 0 avec une animation
 * 
 *  Function slideNext
 *  étape : 1 position le UL en left moins la largeur du slider
 *  étape : 2 une fois l'animation terminée, passer le 1er LI après le dernier LI
 *  étape : 3 repositionner le UL en left 0
 *  étape : 4 appeler notre fonction toures les 3 secondes
 * block avec une animation
 * 
 * CLICK SUR BTN BEFORE
 * étape 1 : clearInterval pour stoper le défilement
 * étape 2 : appel de la fonction slidePrev juste une fois
 * 
 * CLICK SUR BTN NEXT
 * étape 1 : clearInterval pour stoper le défilement
 * étape 2 : appel de la fonction slideNext juste une fois
 * 
 * EMPECHER LE SLIDE TANT QUE L'ANIMATION N'EEST PAS TERMINEE
 * étape 1 : déclarer un boolean a true au chargement de la page
 * étape 2 : quant on lcique sur un bouton on passe le boolean à false
 * étape 3 : accepter le click si boolean à true 
 * étape 4 : à la fin de sl'animation repasser bvoolean à true
 */


$(function() {
    let acceptDefil = true;

    function slideNext() {
        $('.slider ul').animate({ 'left': -300 }, 1000, function() {
            $('.slider li:last').after($('.slider li:first'));
            $(this).css({ 'left': 0 }); // $(this)==$('.slider ul')
            acceptDefil = true;
        });
    }

    function slidePrev() {
        $('.slider ul').css({ 'left': -300 });
        $('.slider li:first').before($('.slider li:last'));
        $('.slider ul').animate({ 'left': 0 }, 1000, function() {
            acceptDefil = true;
        });
    }
    let intervalID = setInterval(slidePrev, 3000);

    $('.slider .icon-navigate_before').click(function() {
        if (acceptDefil) {
            acceptDefil = false;
            clearInterval(intervalID); // pour arrêter
            slidePrev();
        }

    })
    $('.slider .icon-navigate_next').click(function() {
        if (acceptDefil) {
            acceptDefil = false;
            clearInterval(intervalID); // pour arrêter
            slideNext();
        }
    })

    // clearInterval(intervalID); // pour arrêter
});