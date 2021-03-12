$.fn.cycle.defaults.timeout = 6000;
$(function() {
    // run the code in the markup!
    $('table pre code').not('#skip,#skip2').each(function() {
        eval($(this).text());
    });
    
    // $('#s4').before('<div id="nav" class="nav">').cycle({
    //     fx:     'turnDown',
    //     speed:  'fast',
    //     timeout: 0,
    //     pager:  '#nav'
    // });

    $('#s1').cycle({ 
    fx:     'scrollLeft', 
    speed:  400, 
    next:   '#s1', 
    timeout: 3000 
});

    $('#s2').cycle({ 
    // fx:     'scrollLeft', 
    speed:  450, 
    timeout: 11500, 

    // pager:      '#hoverpause', 
    // pagerEvent: 'mouseover', 
    // pauseOnPagerHover: true, 

    next:   '#goRight', 
    prev:   '#goLeft' 
});

//     $('#s3').cycle({ 
//     // fx:     'scrollLeft', 
//     speed:  700, 
//     timeout: 3500, 
//     next:   '#goLeft', 
//     prev:   '#goRight' 
// });    
    // $('#goLeft').cycle({
    //     fx: 'scrollLeft'
    // });

    // $('#goRight').cycle({
    //     fx: 'scrollRight'
    // });

});

function onBefore() {
    $('#output').html("Scrolling image:<br>" + this.src);
    //window.console.log(  $(this).parent().children().index(this) );
}
function onAfter() {
    $('#output').html("Scroll complete for:<br>" + this.src)
        .append('<h3>' + this.alt + '</h3>');
}

