/*jslint browser: true, plusplus: true, indent: 2 */
(function find(text) {
  'use strict';

  var name = 'z' + Math.floor(Math.random() * 100), els;

  function replaceWith(text) {
    return '<span name="' + name + '" style="background:#ff0;color:#000">' + text + '</span>';
  }

  function findAndReplace(searchText, searchNode) {
    var regex = new RegExp(searchText, 'gi'),
      childNodes = (searchNode || document.body).childNodes,
      cnLength = (childNodes ? childNodes.length : 0),
      excludes = /^(script|object|iframe)$/i,
      currentNode,
      parent,
      frag;

    function fragment() {
      var html = currentNode.data.replace(regex, replaceWith),
        wrap = document.createElement('div'),
        f = document.createDocumentFragment();

      wrap.innerHTML = html;
      while (wrap.firstChild) {
        f.appendChild(wrap.firstChild);
      }

      return f;
    }

    while (cnLength--) {
      currentNode = childNodes[cnLength];
      if (currentNode.nodeType === 1 && !excludes.test(currentNode.nodeName)) {
        findAndReplace(searchText, currentNode);
      } else if (currentNode.nodeType === 3 && regex.test(currentNode.data)) {
        parent = currentNode.parentNode;
        frag = fragment();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
      }
    }
  }

  if (text) {
    findAndReplace(text);
    alert('Found ' + (els = document.getElementsByName(name)).length + ' matches.');
    window.scrollTo(0, els[0].offsetTop);
  }
}(prompt('Find:', '')));

/*
// Minified
(function(t){"use strict";function i(e){return'<span name="'+n+'" style="background:#ff0;color:#000">'+e+"</span>"}function s(e,t){function c(){var e=a.data.replace(n,i),t=document.createElement("div"),r=document.createDocumentFragment();t.innerHTML=e;while(t.firstChild){r.appendChild(t.firstChild)}return r}var n=new RegExp(e,"gi"),r=(t||document.body).childNodes,o=r?r.length:0,u=/^(script|object|iframe)$/i,a,f,l;while(o--){a=r[o];if(a.nodeType===1&&!u.test(a.nodeName)){s(e,a)}else if(a.nodeType===3&&n.test(a.data)){f=a.parentNode;l=c();f.insertBefore(l,a);f.removeChild(a)}}}var n="z"+Math.floor(Math.random()*100),r;if(t){s(t);alert("Found "+(r=document.getElementsByName(n)).length+" matches.");window.scrollTo(0,r[0].offsetTop)}})(prompt("Find:",""))

// URL encoded.
javascript:(function(t)%7B%22use%20strict%22%3Bfunction%20i(e)%7Breturn%27%3Cspan%20name%3D%22%27%2Bn%2B%27%22%20style%3D%22background%3A%23ff0%3Bcolor%3A%23000%22%3E%27%2Be%2B%22%3C%2Fspan%3E%22%7Dfunction%20s(e%2Ct)%7Bfunction%20c()%7Bvar%20e%3Da.data.replace(n%2Ci)%2Ct%3Ddocument.createElement(%22div%22)%2Cr%3Ddocument.createDocumentFragment()%3Bt.innerHTML%3De%3Bwhile(t.firstChild)%7Br.appendChild(t.firstChild)%7Dreturn%20r%7Dvar%20n%3Dnew%20RegExp(e%2C%22gi%22)%2Cr%3D(t%7C%7Cdocument.body).childNodes%2Co%3Dr%3Fr.length%3A0%2Cu%3D%2F%5E(script%7Cobject%7Ciframe)%24%2Fi%2Ca%2Cf%2Cl%3Bwhile(o--)%7Ba%3Dr%5Bo%5D%3Bif(a.nodeType%3D%3D%3D1%26%26!u.test(a.nodeName))%7Bs(e%2Ca)%7Delse%20if(a.nodeType%3D%3D%3D3%26%26n.test(a.data))%7Bf%3Da.parentNode%3Bl%3Dc()%3Bf.insertBefore(l%2Ca)%3Bf.removeChild(a)%7D%7D%7Dvar%20n%3D%22z%22%2BMath.floor(Math.random()*100)%2Cr%3Bif(t)%7Bs(t)%3Balert(%22Found%20%22%2B(r%3Ddocument.getElementsByName(n)).length%2B%22%20matches.%22)%3Bwindow.scrollTo(0%2Cr%5B0%5D.offsetTop)%7D%7D)(prompt(%22Find%3A%22%2C%22%22))

javascript:(function(t)%7B%22use%20strict%22%3Bfunction%20i(e)%7Breturn'%3Cspan%20name%3D%22'%2Bn%2B'%22%20style%3D%22background%3A%23ff0%3Bcolor%3A%23000%22%3E'%2Be%2B%22%3C%2Fspan%3E%22%7Dfunction%20s(e%2Ct)%7Bfunction%20c()%7Bvar%20e%3Da.data.replace(n%2Ci)%2Ct%3Ddocument.createElement(%22div%22)%2Cr%3Ddocument.createDocumentFragment()%3Bt.innerHTML%3De%3Bwhile(t.firstChild)%7Br.appendChild(t.firstChild)%7Dreturn%20r%7Dvar%20n%3Dnew%20RegExp(e%2C%22gi%22)%2Cr%3D(t%7C%7Cdocument.body).childNodes%2Co%3Dr%3Fr.length%3A0%2Cu%3D%2F%5E(script%7Cobject%7Ciframe)%24%2Fi%2Ca%2Cf%2Cl%3Bwhile(o--)%7Ba%3Dr%5Bo%5D%3Bif(a.nodeType%3D%3D%3D1%26%26!u.test(a.nodeName))%7Bs(e%2Ca)%7Delse%20if(a.nodeType%3D%3D%3D3%26%26n.test(a.data))%7Bf%3Da.parentNode%3Bl%3Dc()%3Bf.insertBefore(l%2Ca)%3Bf.removeChild(a)%7D%7D%7Dvar%20n%3D%22z%22%2BMath.floor(Math.random()*100)%2Cr%3Bif(t)%7Bs(t)%3Balert(%22Found%20%22%2B(r%3Ddocument.getElementsByName(n)).length%2B%22%20matches.%22)%3Bwindow.scrollTo(0%2Cr%5B0%5D.offsetTop)%7D%7D)(prompt(%22Find%3A%22%2C%22%22))

// Source
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

// URL encoded
javascript:void%28s%3Dprompt%28%27Find%20text%3A%27%2C%27%27%29%29%3Bs%3D%27%28%27%2Bs%2B%27%29%27%3Bx%3Dnew%20RegExp%28s%2C%27gi%27%29%3Brn%3DMath.floor%28Math.random%28%29*100%29%3Brid%3D%27z%27%20%2B%20rn%3Bb%20%3D%20document.body.innerHTML%3Bb%3Db.replace%28x%2C%27%3Cspan%20name%3D%27%20%2B%20rid%20%2B%20%27%20id%3D%27%20%2B%20rid%20%2B%20%27%20style%3D%5C%27color%3A%23000%3Bbackground-color%3Ayellow%3B%20font-weight%3Abold%3B%5C%27%3E%241%3C/span%3E%27%29%3Bvoid%28document.body.innerHTML%3Db%29%3Balert%28%27Found%20%27%20%2B%20document.getElementsByName%28rid%29.length%20%2B%20%27%20matches.%27%29%3Bwindow.scrollTo%280%2Cdocument.getElementsByName%28rid%29%5B0%5D.offsetTop%29%3B
*/
