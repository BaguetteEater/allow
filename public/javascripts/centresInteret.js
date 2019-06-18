$(function () {
    $("#grille").randomize("#grille > div");
    var count = $("#grille .icon").length;
    console.log(count);
    for (var i = 0; i < count/2; i++) {
        $("#grille .icon")[i].remove();
    }
});

(function ($) {

    $.fn.randomize = function (childElem) {
        return this.each(function () {
            var $this = $(this);
            var elems = $this.children(childElem);

            elems.sort(function () {
                return (Math.round(Math.random()) - 0.5);
            });

            $this.remove(childElem);

            for (var i = 0; i < elems.length; i++)
                $this.append(elems[i]);

        });
    }
})(jQuery);

//#grille .icon
/*$("#grille .icon").on('click', function () {
    console.log($(this).attr('id'));
    $(this).parent().toggleClass('active');
});*/