function showText(event) {
    console.log($(this));
    console.log($(event.currentTarget));
    console.log($(event.currentTarget).text());

}

var blocks = $(".block")

//console.log($(".block"));
//console.log(blocks);
//console.log($(blocks[0]).text());

blocks.click(showText);