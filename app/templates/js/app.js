$(".do_delete").click( function() {
    $.post("{{url_for('delete')}}", {name:$(this).attr("id")});
})
