console.log("Hello");

for (let step = 0; step < 1000; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 10px;border:2px solid black;>';
    $("body").append(blocks);
}

console.log($(".block"));

$(".block").each( function () {
    $(this).on("mouseenter", function () {
        $(this).css("background-color", "rgb(0,0,0)");
    })
})