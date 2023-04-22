(function($) {
    $.fn.highlightMenu = function(options) {
      // Default options
      var settings = $.extend({
        backgroundColor: '#2b2322', // Default background color 
        textColor: '#F0BC36', // Default text color 
        boxColor: '#2b2322', // Default box color
        fontSize: '14px', // Default font size
        hoverBgColor: '#2b2322', // Default background color on hover
        hoverTextColor: '#333' // Default text color on hover
      }, options);
  
      // Apply styles to each element
      this.each(function() {
        $(this).css({
          'background-color': settings.backgroundColor, // Override default background color
          'color': settings.textColor, // Override default text color
          'border': '1px solid ' + settings.boxColor, // Override default box color
          'font-size': settings.fontSize ,// Override default font size
          'border-radius' : '5px' 
        });
  
        // Add hover styles
        $(this).hover(function() {
          $(this).css({
            'background-color': settings.hoverBgColor, // Override default background color on hover
            'color': settings.hoverTextColor // Override default text color on hover
          });
        }, function() {
          $(this).css({
            'background-color': settings.backgroundColor, // Revert back to default background color on mouseout
            'color': settings.textColor // Revert back to default text color on mouseout
          });
        });
      });
  
      return this;
    };
  }(jQuery));
  

  $(document).ready(function() {
    // Override the default options
    $(".menu-item").highlightMenu({
      backgroundColor: "#080404",
      textColor: "#3F72E0",
      boxColor: "gray",
      boxSize: "50px",
      fontSize: "24px"
    });
  });
  
  