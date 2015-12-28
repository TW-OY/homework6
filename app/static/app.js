$(".do_delete").click( function() {
    $.post("/delete", {name:$(this).attr("id")});
    console.log($(this).attr("id"));
})

$("#search_box").on("input", function(){
    var keyword = $(this).val();
    
})
