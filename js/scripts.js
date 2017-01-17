function init() {
    $('.menu-btn').on("click", function() {
        animateButton();
    });
}

function animateButton() {
    var button = $('.menu-btn');
    button.toggleClass('nav-open');
};

$(document).ready(function() {
    init();
});
