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
 * étape 4 : si l'index de l'IMG suivant est inférieur au nb total d'image dans 
 * la galerie, on incrémente l'index (variable indexImg), sion on retourne sur 
 * l'index 0 (variable indexImg=0)
 * étape 5 : reù^macer ma vameir de m'attribut SRC de .lightbox IMG par la valeur
 * de l'attribut SRC de l'IMG suivante dans la galerie(variable nexSrc)
 * 
 * 
 * FLECHE IMG PRECEDENTE
 * iden bout next mais en décrémentant indexImg
 * 
 * FONCTION POUR FACTORISER LE CHANGEMENT D'IMG DANS LA LIGHTBOX
 * étape 1 : créer une fonction qui remplace l'im dans la lightbox
 *  et l'appeler à chaque fois que nécessaire
 * 
 */


$(function() {
    let newSrc;
    let nbImg;
    let indexImg;


    nbImg = $('.galerie img').length;
    // console.log(nbImg); affiche le nb image
    // déclaration de la fonction en local . tant quelle n'est créer elle ne peut utilé 
    lightboxImg = function() {
        newSrc = $('.galerie img').eq(indexImg).attr('src');
        $('.lightbox img').attr('src', newSrc);


    }

    $('.galerie img').click(function() {
        newSrc = $(this).attr('src');
        indexImg = $('.galerie img').index($(this)); // récupération de l'index de l'image

        // console.log(indexImg);
        lightboxImg();
        // $('.lightbox img').attr('src', newSrc); remplace par un fonction
        $('.lightbox').fadeIn().css({ 'display': 'flex' });
    });

    $('.cadre .icon-close').click(function() {
        $('.lightbox').fadeOut();
    });

    $('.cadre .icon-navigate_next').click(function() {
        // if (indexImg < nbImg - 1) {
        //     indexImg++;
        // } else {
        //     indexImg = 0;
        // }
        indexImg = (indexImg + 1) % nbImg; // if au dessus donne le même résultat modulo
        // console.log($('.galerie img').eq(0).attr('src')); // eq ciblé une image en particulier pour récupérer l'image
        // newSrc = $('.galerie img').eq(indexImg).attr('src');
        lightboxImg();
        // $('.lightbox img').attr('src', newSrc);
        console.log('index :' + indexImg);
        console.log('prochain image :' + newSrc);

    });

    $('.cadre .icon-navigate_before').click(function() {
        // indexImg = (indexImg - 1) % nbImg; // ici le navigateur comprend qu'il doit parcourrir le array à l'envere
        indexImg = ((indexImg - 1) + nbImg) % nbImg; // if au dessus donne le même résultat
        // console.log($('.galerie img').eq(0).attr('src')); // eq ciblé une image en particulier pour récupérer l'image
        // newSrc = $('.galerie img').eq(indexImg).attr('src');
        lightboxImg();
        // $('.lightbox img').attr('src', newSrc);
        console.log('index :' + indexImg);
        console.log('prochain image :' + newSrc);

    });
});