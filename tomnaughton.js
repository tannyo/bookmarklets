/*
 * Bookmarklet that changes Tom's block quote format to use blockquote elements
 * instead of spans in a paragraph. This allows the reader to use the built in
 * Mobile Safari readability application to view the web page. The problem is
 * that readability removes color formatting which is the only indication to the
 * reader that the text is a blockquote. Wrapping the quasi block quote in an
 * blockquote element causes readability to display block quotes.
 */

// Source
(function ($) {
  'use strict';

  // Get all spans that immediately follow a paragraph.
  var sa = $(".entry").find("p > span"),
    // Turn off theme's blockquote style so that it uses Tom's preferred style.
    style = '.entry blockquote {margin: 0;padding: 0;background: transparent;border-width: 0;font-style: normal;color: #800;}';
  // Add the style to the end of the web page.
  $("body").append("<style>" + style + "</style>");
  // Walk through each span to see if the color is set to Tom's block quote style.
  sa.each(function (index) {
    var $this = $(this), p = $this.parent();
    if ($this.attr("style") === "color: #800000;") {
      // If it is in Tom's block quote style, wrap the paragraph in a blockquote.
      p.wrap("<blockquote></blockquote>");
    }
  });
  // Pass jQuery to the anonymous function.
}(jQuery));

// Minified
javascript:(function($){'use strict';var sa=$(".entry").find("p > span"),style='.entry blockquote {margin: 0;padding: 0;background: transparent;border-width: 0;font-style: normal;color: #800;}';$("body").append("<style>"+style+"</style>");sa.each(function(index){var $this=$(this),p=$this.parent();if($this.attr("style")==="color: #800000;"){p.wrap("<blockquote></blockquote>");}});}(jQuery));

// URL encoded. Copy this text into a bookmark.
/*
javascript:(function(%24)%7B%27use%20strict%27%3Bvar%20sa%3D%24(%22.entry%22).find(%22p%20%3E%20span%22)%2Cstyle%3D%27.entry%20blockquote%20%7Bmargin%3A%200%3Bpadding%3A%200%3Bbackground%3A%20transparent%3Bborder-width%3A%200%3Bfont-style%3A%20normal%3Bcolor%3A%20%23800%3B%7D%27%3B%24(%22body%22).append(%22%3Cstyle%3E%22%2Bstyle%2B%22%3C%2Fstyle%3E%22)%3Bsa.each(function(index)%7Bvar%20%24this%3D%24(this)%2Cp%3D%24this.parent()%3Bif(%24this.attr(%22style%22)%3D%3D%3D%22color%3A%20%23800000%3B%22)%7Bp.wrap(%22%3Cblockquote%3E%3C%2Fblockquote%3E%22)%3B%7D%7D)%3B%7D(jQuery))
*/
