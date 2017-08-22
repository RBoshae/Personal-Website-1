/*jslint browser: true*/
/*global $, jQuery, alert*/

function main() {
    $('.solution').hide();
    
    $('.solutions-button').on('click', function () {
        $(this).next().slideToggle(400);
        $(this).toggleClass('active');
        $(this).text('Viewed');
    });
}

$(document).ready(main);