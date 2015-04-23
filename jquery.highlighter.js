(function($){
    var methods = {
        init : function(options) {
            var defaults = {
                queue : true,
                pauseTime : 2000,
                duration: 3000,
                timing: 'ease-in-out',
                colorFrom: 'transparent',
                colorTo: '#FFFF00'
            }
            
            var settings = $.extend({}, defaults, options);
            
            var start = function(selection){
                /** DURATION **/
                if( settings.duration != defaults.duration && settings.duration === parseInt(settings.duration, 10) || settings.timing != defaults.timing){
                    $(selection).css('animation', 'highlighting '+ settings.duration +'ms '+ settings.timing +' forwards');
                }
                
                /** COLORS **/
                var newColorFrom = '';
                var newColorTo = '';
                if( settings.colorFrom != defaults.colorFrom || settings.colorTo != defaults.colorTo ){
                    newColorFrom = settings.colorFrom;
                    newColorTo = settings.colorTo;
                }
                if( newColorFrom != '' || newColorTo != '' ){
                    $(selection).css('background', newColorFrom)
                        .css('background', '-webkit-linear-gradient(90deg, '+ newColorFrom +' 50%, '+ newColorTo +' 50%) repeat scroll 0 0 / 200% 100% rgba(0, 0, 0, 0)')
                        .css('background', '-moz-linear-gradient(90deg, '+ newColorFrom +' 50%, '+ newColorTo +' 50%) repeat scroll 0 0 / 200% 100% rgba(0, 0, 0, 0)')
                        .css('background', '-o-linear-gradient(90deg, '+ newColorFrom +' 50%, '+ newColorTo +' 50%) repeat scroll 0 0 / 200% 100% rgba(0, 0, 0, 0)')
                        .css('background', 'linear-gradient(90deg, '+ newColorFrom +' 50%, '+ newColorTo +' 50%) repeat scroll 0 0 / 200% 100% rgba(0, 0, 0, 0)');
                }
                
                /** GO! **/
                $(selection).addClass('highlighter_go');
            }
            
            if(settings['queue'] === true){
                var time = 0;
                
                $(this).each(function(index, element){
                    if(!$(element).hasClass('highlighter_go')){
                        setTimeout( function(){
                            start(element);
                        }, time);
                        
                        time += settings.pauseTime+settings.duration;
                    }
                });
            }else{
                start(this);
            }
        },
        clear : function() {
            $(this).removeClass("highlighter_go")
                   .css('background', '');
        }
    };
    
    $.fn.highlighter = function(options){
        if ( methods[options] ) {
            return methods[ options ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof options === 'object' || ! options ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  options + ' does not exist on jQuery.highlighter' );
        }
    }
})(jQuery)