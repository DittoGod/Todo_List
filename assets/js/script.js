// check of specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// click X to delete the todo (e) -> event
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        // removes the element from the DOM
        $(this).remove();
    });
    // stops the propegation of the event.
    e.stopPropagation();
});

// text input from user.
$("input[type='text']").keypress(function (e) {
    if (e.which === 13) {
        // grab the text from the textbox and save it to a variable
        var todoText = $(this).val();
        // clear the contentsof the textbox.
        $(this).val("");
        // create new li and add to ul.
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});