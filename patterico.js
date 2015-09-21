/*
 * Bookmarklet that adds a toggle to certain comments and hides the content of the comment.
 * Clicking on the name reveals the comment.
 */

// Source
(function ($) {
    'use strict';

    // Regular expression of commentor names.
    var n = /^(happyfeet|jmann)/i,
        // Get all elements that have the commentor's name.
        aa = $(".fn"),
        end = aa.length,
        i,
        el,
        v,
        p;

    for (i = 0; i < end; i++) {
        // Get author element.
        el = $(aa[i]);
        // Get author name and id.
        v = el.text();
        // Does the comment author start with a name to hide?
        if (n.test(v)) {
            // Hide this comment.
            console.log(i+1, v);
            // Get the comment body.
            p = el.parents(".comment-body");
            // Hide all elements in the comment body except the name and datetime information.
            p.children().not("span,br,.reply").hide();
            // Keep the distance between the previous comment and move the name over to the right about an inch.
            p.css("padding", "1em 0 0 3em");
            // Show the user that this can be clicked by changing the cursor to a pointer.
            p.css("cursor", "pointer");
            // Add a click function to toggle viewing of the comment.
            p.click(function () {
                // Is this hidden?
                if ($(this).children()[0].style.display === "none") {
                    // Display the comment.
                    $(this).children().not("span,br,.reply").show();
                    // Restore distance from previous comment.
                    $(this).css("padding", "");
                } else {
                    // Hide the comment.
                    $(this).children().not("span,br,.reply").hide();
                    // Keep the distance from the previous comment.
                    $(this).css("padding", "1em 0 0 3em");
                }
            });
        }
    }
}(jQuery));

// URL encoded. Copy this text into a bookmark.
/*
javascript:(function($){'use strict';var n=/^(happyfeet|jmann)/i,aa=$(".fn"),end=aa.length,i,el,v,p;for(i=0;i<end;i++){el=$(aa[i]);v=el.text();if(n.test(v)){p=el.parents(".comment-body");p.children().not("span,br,.reply").hide();p.css("padding","1em 0 0 3em");p.css("cursor","pointer");p.click(function(){if($(this).children()[0].style.display==="none"){$(this).children().not("span,br,.reply").show();$(this).css("padding","");}else{$(this).children().not("span,br,.reply").hide();$(this).css("padding","1em 0 0 3em");}});}}}(jQuery));
*/
