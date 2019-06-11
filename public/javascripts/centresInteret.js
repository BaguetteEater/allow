//#grille .icon
$( "#grille .icon" ).on('click',function(){ 
    //"Dans le bloc #grille n'importe quel .icon dès que je clic je fais :"
    console.log($(this).attr('id'));
    $(this).toggleClass('active');
    //$(this).hide(); 
});

