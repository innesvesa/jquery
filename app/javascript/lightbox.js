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
 * 
 * GENERER LES PUCES EN FONCTION DU NOMBRE D' IMAGES
 * étape 1 : déclarer une variable qui contiendra un ensemble UL LI 
 * étape 2 : créer fonction pour générer l'ensemble UL LI
 * étape 3 : créer le bloc UL 
 * étape 4 : créer autant de LI qu'il y a d'images dans la galerie
 * étape 5 : ajouter l'ensemble UL LI dans le DOM sous la lightbox
 * 
 * ACTIVER LA PUCE QUI CORRESPOND 0 L IMAGE CLIQUEE
 * étape 1 : créer une fonction qui active une puce
 * - supprime la class puce-active sur tous les LI
 * -ajoute la class puce-active sur le LI qui a le même index que indexImg
 * étape 2 appeler la fonction quand on cliqu sur une image de la galerie
 * - appeler la focntion quand on clique sur les boutons next et before
 * 
 * 
 * CHANGER IMAGE QUAND ON CLIQUE SUR UNE PUCE
 * étape 1 : récupérer l'index de puce cliquée et l'affecter à indexImg
 * étape 2 appeler changImg() et activePuce()
 * 
 * 
 * AFFICHIER LES LEGENDES DANS LA LIGHTBOX
 * étape 1 : récupéation la valeur de l'attr de data-legend
 * étape 2 : mettre à jour le contenu textuel dans .lightbox fichcapti_on
 * 
 */


$(function() {
    (function() {

        let newSrc, nbImg, indexImg, listPuces, legendeImg;

        nbImg = $('.galerie img').length;
        // déclaration de la fonction en local . tant quelle n'est créer elle ne peut utilé 
        // pour évitéer les remontés de fonction hosting
        // lightboxImg = function() { == lightboxImg = ()=> évite les remonté de fonction
        lightboxImg = () => {
            newSrc = $('.galerie img').eq(indexImg).attr('src');
            $('.lightbox img').attr('src', newSrc);
            console.log('index :' + indexImg);
            console.log('prochain image :' + newSrc);
        }

        generatePuces = () => {
            listPuces = '<ul class="list-puces">';
            for (let i = 0; i < nbImg; i++) {
                listPuces += '<li></li>';
            }
            listPuces += '</ul>';
            // console.log(listPuces);
            $('.lightbox .cadre').append(listPuces);

        }
        activePuce = () => {
            let list = $('.lightbox ul li');
            list.removeClass('puce-active');
            list.eq(indexImg).addClass('puce-active');
            console.log('active puce : ' + indexImg);
        }

        chargeLegende = () => {
            let legendeImg = $('.galerie img').eq(indexImg).attr('data-legend');

            console.log('legende :' + legendeImg);
            console.log('index :' + indexImg);
            $('.lightbox figcaption').text(legendeImg);
        }
        generatePuces();


        $('.galerie img').click(function() {
            indexImg = $('.galerie img').index($(this)); // récupération de l'index de l'image
            lightboxImg();
            activePuce();
            $('.lightbox').fadeIn().css({ 'display': 'flex' });
        });

        $('.cadre .icon-close').click(function() {
            $('.lightbox').fadeOut();
        });

        $('.cadre .icon-navigate_next').click(function() {

            indexImg = (indexImg + 1) % nbImg; // if au dessus donne le même résultat modulo
            lightboxImg();
            chargeLegende()
            activePuce();

        });

        $('.cadre .icon-navigate_before').click(function() {
            indexImg = ((indexImg - 1) + nbImg) % nbImg; // if au dessus donne le même résultat
            lightboxImg();
            chargeLegende()
            activePuce();

        });

        $('.lightbox li').click(function() {
            indexImg = $('.lightbox li').index($(this));
            lightboxImg();
            chargeLegende()
            activePuce();

            console.log('puce cliqué' + indexImg);
        });
    })();
});