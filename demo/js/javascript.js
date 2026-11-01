//Clearing previous highlights
$('#my_title span, #first_block span, #second_block span').highlighter('clear');

//GO!
$('#my_title span').highlighter();

setTimeout(function(){
    $('#first_block span').highlighter({
        'queue' : true,
        'pauseTime' : 500,
        'duration': 2000,
        'timing': 'ease-in-out',
        'colorFrom': 'transparent',
        'colorTo': '#FA58F4'
    });
}, 4000);

setTimeout(function(){
    $('#second_block span').highlighter({
        'queue' : false,
        'pauseTime' : 0,
        'duration': 10000,
        'timing': 'linear',
        'colorFrom': 'transparent',
        'colorTo': '#FF9B00'
    });
}, 17000);
