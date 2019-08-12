// check of specific todos by clicking
$("li").on("click", function () {
    $(this).toggleClass("completed");
});

// click X to delete the todo (e) -> event
$("span").on("click", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});