# bookmarklets

Various bookmarklets I've used.

## [Fat Head](http://www.fathead-movie.com/)

This is a blog with many fine articles on nutrition. I love it but Tom Naughton didn't like the format of block quotes, so he created his own by surrounding the text with a span and setting the color to `#800000` which is some sort of dark read. I sent him the CSS to add at the end of the theme's style.css file, but he is afraid of breaking the blog.

```css
/*
 * Target block quotes in posts and set it to look like Tom's quotes.
 */
.entry blockquote {
	margin: 0;    /* get rid of the indent on some browsers. */
	padding: 0;  /* get rid of the indent on other browsers. */
	background: transparent; /* Make the background color the same as the post. */
	border-width: 0;  /* Remove the odd dashed borders. */
	font-style: normal; /* Change the font from italic to normal. */
	color: #800;  /* Shorthand for #800000. */
}
````

The problem is when you are reading a post on an iPhone and use the Readability button. The block quotes disappear because colors are removed from the text and they aren't really block quotes. They are different colored text in a paragraph.

What this bookmarklet does is add a style that overwrites the `blockquote` styles, then looks for any `<span>` elements that immediately follow a paragraph. It then looks at the style attribute of each `<span>` and if the style attribute is equal to `"color: #800000;"` wraps the paragraph with a `<blockquote>` element.

After running this bookmarklet you can press the Readability button and differentiate between block quotes and the rest of the text.

````
javascript:(function(%24)%7B%27use%20strict%27%3Bvar%20sa%3D%24(%22.entry%22).find(%22p%20%3E%20span%22)%2Cstyle%3D%27.entry%20blockquote%20%7Bmargin%3A%200%3Bpadding%3A%200%3Bbackground%3A%20transparent%3Bborder-width%3A%200%3Bfont-style%3A%20normal%3Bcolor%3A%20%23800%3B%7D%27%3B%24(%22body%22).append(%22%3Cstyle%3E%22%2Bstyle%2B%22%3C%2Fstyle%3E%22)%3Bsa.each(function(index)%7Bvar%20%24this%3D%24(this)%2Cp%3D%24this.parent()%3Bif(%24this.attr(%22style%22)%3D%3D%3D%22color%3A%20%23800000%3B%22)%7Bp.wrap(%22%3Cblockquote%3E%3C%2Fblockquote%3E%22)%3B%7D%7D)%3B%7D(jQuery))
````

## Find

iOS used to not have a find on webpage function. This bookmarklet will open a prompt then search the text of the body of the webpage for the search text. It will then wrap the text with a `<span style="background:#ff0;color:#000">` element and scroll the page to the first element. Each found item will have a yellow background with black text.

I had found a find bookmarklet but it modified the text of all the html and replaced the html. It didn't always work well.

```javascript
void(searchText = prompt('Find text:', ''));
searchText = '(' + searchText + ')';
regex = new RegExp(searchText, 'gi');
randomNumber = Math.floor(Math.random() * 100);
randomID = 'z' + randomNumber;
body = document.body.innerHTML;
body = body.replace(regex, '<span name=' + randomID + ' id=' + randomID + ' style=\'color:#000;background-color:yellow; font-weight:bold;\'>$1</span>');
void(document.body.innerHTML = body);
alert('Found ' + document.getElementsByName(randomID).length + ' matches.');
window.scrollTo(0, document.getElementsByName(randomID)[0].offsetTop);
````

So I rewrote it so that it adds DOM elements instead of replacing the HTML.

````
javascript:(function(t)%7B%22use%20strict%22%3Bfunction%20i(e)%7Breturn%27%3Cspan%20name%3D%22%27%2Bn%2B%27%22%20style%3D%22background%3A%23ff0%3Bcolor%3A%23000%22%3E%27%2Be%2B%22%3C%2Fspan%3E%22%7Dfunction%20s(e%2Ct)%7Bfunction%20c()%7Bvar%20e%3Da.data.replace(n%2Ci)%2Ct%3Ddocument.createElement(%22div%22)%2Cr%3Ddocument.createDocumentFragment()%3Bt.innerHTML%3De%3Bwhile(t.firstChild)%7Br.appendChild(t.firstChild)%7Dreturn%20r%7Dvar%20n%3Dnew%20RegExp(e%2C%22gi%22)%2Cr%3D(t%7C%7Cdocument.body).childNodes%2Co%3Dr%3Fr.length%3A0%2Cu%3D%2F%5E(script%7Cobject%7Ciframe)%24%2Fi%2Ca%2Cf%2Cl%3Bwhile(o--)%7Ba%3Dr%5Bo%5D%3Bif(a.nodeType%3D%3D%3D1%26%26!u.test(a.nodeName))%7Bs(e%2Ca)%7Delse%20if(a.nodeType%3D%3D%3D3%26%26n.test(a.data))%7Bf%3Da.parentNode%3Bl%3Dc()%3Bf.insertBefore(l%2Ca)%3Bf.removeChild(a)%7D%7D%7Dvar%20n%3D%22z%22%2BMath.floor(Math.random()*100)%2Cr%3Bif(t)%7Bs(t)%3Balert(%22Found%20%22%2B(r%3Ddocument.getElementsByName(n)).length%2B%22%20matches.%22)%3Bwindow.scrollTo(0%2Cr%5B0%5D.offsetTop)%7D%7D)(prompt(%22Find%3A%22%2C%22%22))
````

You can [Search for Text on a Web Page in Safari with iOS 8 and iOS 7](http://osxdaily.com/2013/10/03/search-text-web-page-safari-ios/), it just takes a little extra work.

I did try to create an enhanced version of find that adds a navigation bar at the bottom of the page, but it turned out to be too large for a bookmarklet. I may find a place to host the [find-plus.js](https://github.com/tannyo/bookmarklets/blob/master/find-plus.js) file and create a bookmarklet to add the script, but since the functionality is already in Mobile Safari, though hidden and a little clunky to use, I probably won't.

## Issues

Have a bug? Please create an [issue](https://github.com/tannyo/bookmarklets/issues) here on GitHub!

## Contributing

Want to contribute? Great! Just fork the project, make your changes and open a [pull request](https://github.com/tannyo/bookmarklets/pulls).

## Changelog
* 2015-01-20 TKO Created by Tanny O'Haley.

## License

The MIT License (MIT)

Copyright (c) 2015 [Tanny O'Haley](http://tanny.ica.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
