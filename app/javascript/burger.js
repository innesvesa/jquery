/**
 *  qd on clique sur l'icon-dehaze (burger), on passe le nav en display
 * block avec une animation
 */

$(function() {
    $('body > header span').click(function() {
        $('nav').slideToggle();
    });
});