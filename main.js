$("header .fas.fa-bars").click(function() {
    $(".hamburger-menu").addClass("active");
});

$("header .fas.fa-times").click(function() {
    $(".hamburger-menu").removeClass("active");
});

/* funziona ugualmente
$("header .close").click(function() {
    $(".hamburger-menu").removeClass("active");
});
*/
