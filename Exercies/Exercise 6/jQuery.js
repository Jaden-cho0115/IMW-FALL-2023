

for (let i = 0; i < 22; i++) {
    $("#blocks").append(`<div class="block" style="width: 100%; height:30px;background-color: #CC0001;"></div>`)
}

function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}

$(".block").each(function () {
    $(this).mouseenter(function () {
        $(this).addClass("no-width");
        $(this).css("background-color", "rgb(" + getRandomInt(255) + ", 0, 0 )");
    })
})

$(document).on("keypress", function () {
    $(".block").removeClass("no-width");
});

