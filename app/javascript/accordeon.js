/**
 * OUVRI UN ITEM ET FERME LES AUTRES
 * étape 1 : quand on clique sur un h1, si celui ci n'a pas la class active
 * on ferme tous les p et on ouvre le p suivant le h1 cliqué
 * - si il à la class active, c'est qu'il est déjà ouvert donc on fait rien
 * 
 * étape 2 : on retire la class active de tous les h1 et on ajoute la class active sur 
 * le h1 cliqué
 * étape 3 : on retire l'icon-down sur tous les h1 et on ajoute l'icon-right sur tous les h1
 * étape 4 : on alterne les class icon-down et icon-right sur this h1 (celui cliqué)
 */

'use strict';

$(function() {
    (function() { /** equivalent avec un namespace, les var sont reconus uniquement ds cette environnement */
        let question, answer;
        question = $('.accordeon h1');
        answer = $('.accordeon p');

        question.click(function() {
            if (!$(this).hasClass('active')) { //s'il y n'a pas la class active
                //étape 1
                answer.slideUp(600);
                $(this).next('p').slideDown(200);
                // étape 2
                question.removeClass('active');
                $(this).addClass('active');
                //étape 3
                question.find('span').removeClass('icon-arrow_drop_down').addClass('icon-navigate_next');
                //étape 4
                $(this).find('span').toggleClass('icon-arrow_drop_down icon-navigate_next') //le toggleClass va alterner entre les 2 icones

            }
        });
    })();


});