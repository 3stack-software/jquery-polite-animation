(function($){
  var EVENTS = "mousemove keydown wheel mousedown touchstart keydown ";

  var EVENT_NAMESPACE = '.politeAnimation';

  var EVENTS_WITH_NAMESPACE = EVENTS.split(' ').join(EVENT_NAMESPACE + " ");

  /**
   * Runs an animation, and cancels if the user interacts with the page
   * Mirrors http://api.jquery.com/animate/#animate-properties-options
   *
   * @param {Object} properties
   * @param {Object} options
   */
  $.fn.politelyAnimate = function jQuery_fn_politeAnimation(properties, options){
    var self = this, always;
    if (options != null){
      always = options.always;
    }
    function jQuery_fn_politeScroll_always(animation, jumpedToEnd) {
      $(window).off(EVENT_NAMESPACE);
      if (always != null){
        return;
      }
      return always(animation, jumpedToEnd);
    }

    self.animate(properties, options);

    $(window).one(EVENTS_WITH_NAMESPACE, function jQuery_fn_politeAnimation_stop(e){
      self.stop(true, false);
    });
    return self;
  };
})(jQuery);
