//Clearing previous highlights
$("#my_title span").highlighter('clear');
$("#first_block span").highlighter('clear');
$("#second_block span").highlighter('clear');

//GO!
$("#my_title span").highlighter();

$(this).each(function(index, element){
    if(!$(element).hasClass('highlighter_go')){
        setTimeout( function(){
            $("#first_block span").highlighter({
                'queue' : true,
                'pauseTime' : 500,
                'duration': 2000,
                'timing': 'ease-in-out',
                'colorFrom': 'transparent',
                'colorTo': '#FA58F4'
            });
        }, 4000);
    }
});

$(this).each(function(index, element){
    if(!$(element).hasClass('highlighter_go')){
        setTimeout( function(){
            $("#second_block span").highlighter({
                'queue' : false,
                'pauseTime' : 0,
                'duration': 10000,
                'timing': 'linear',
                'colorFrom': 'transparent',
                'colorTo': '#FF9B00'
            });
        }, 17000);
    }
});