/**
 * ACTIVER LA LIGHTBOX
 * étape 1: quand on click sur une IMG on ouvre la lightbox
 * 
 * CLOSE LA LIGHTBOX
 * étape 1 : quand on click sur .cadre .icon-closse on ferme 
 * la lightbox
 * 
 * REMPLACER IMG LIGHTBOX PAR IMG CLIQUEE
 * étape 1 : quand on clique sur l'image de la galerie on
 * récupére l'attribut de son SRC (variable)
 * étape 2 : on remplace la valeur de l'attribut SRC de lightbox
 * IMG par la valeur de l'attribut SRC de l'IMG cliquée dans la galerie (variable)
 * 
 * 
 * FLECHES IMG SUIVANTS ET PREV
 * étape 1 : compter le nombre d'images présent dans la galerie (variable)
 * étape 2 : récupérer l'index de IMG cliquée dans la galerie (variable)
 * étape 3 : quand on clique sur BTN pour IMG suivantes, récupérer
 * la valeur de l'attribut SRC de l'IMG index+1
 */


$(function() {
    let newSrc;
    let nbImg;
    let indexImg;

    nbImg = $('.galerie img').length;
    // console.log(nbImg); affiche le nb image

    $('.galerie img').click(function() {
        newSrc = $(this).attr('src');
        indexImg = $('.galerie img').index($(this));

        // console.log(indexImg);
        $('.lightbox img').attr('src', newSrc);
        $('.lightbox').fadeIn().css({ 'display': 'flex' });
    })

    $('.cadre .icon-navigate_next').click(function() {
        $('.lightbox').fadeOut();
    })
    $('.cadre .icon-close').click(function() {
        console.log($('.galerie img').eq(indexImg + 1).attr('src'));
    })
});