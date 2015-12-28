$(".do_delete").click( function() {
    $.post("/delete", {name:$(this).attr("id")});
})
