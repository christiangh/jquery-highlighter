;(function($){
    'use strict';

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

            // Accept numeric strings; fall back to defaults on invalid or negative values
            var toTime = function(value, fallback){
                var n = parseInt(value, 10);
                return (isNaN(n) || n < 0) ? fallback : n;
            };
            settings.duration = toTime(settings.duration, defaults.duration);
            settings.pauseTime = toTime(settings.pauseTime, defaults.pauseTime);

            var start = function(selection){
                /** DURATION **/
                if( settings.duration !== defaults.duration || settings.timing !== defaults.timing ){
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
                    $(selection).css('background', 'linear-gradient(90deg, '+ newColorFrom +' 50%, '+ newColorTo +' 50%) repeat scroll 0 0 / 200% 100% rgba(0, 0, 0, 0)');
                }
                
                /** GO! **/
                // Force reflow so the animation restarts after a previous clear
                $(selection).each(function(){ void this.offsetWidth; })
                            .addClass('highlighter_go');
            }
            
            if(settings['queue'] === true){
                var time = 0;
                
                $(this).each(function(index, element){
                    if(!$(element).hasClass('highlighter_go') && !$(element).data('highlighterTimer')){
                        var timer = setTimeout( function(){
                            $(element).removeData('highlighterTimer');
                            start(element);
                        }, time);
                        $(element).data('highlighterTimer', timer);
                        
                        time += settings.pauseTime+settings.duration;
                    }
                });
            }else{
                start(this);
            }

            return this;
        },
        clear : function() {
            return $(this).each(function(){
                              var timer = $(this).data('highlighterTimer');
                              if(timer){
                                  clearTimeout(timer);
                                  $(this).removeData('highlighterTimer');
                              }
                          })
                          .removeClass("highlighter_go")
                          .css({ animation: '', background: '' });
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
    };
})(jQuery);