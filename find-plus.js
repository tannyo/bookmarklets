/*jslint browser: true, plusplus: true, indent: 2 */
(function find(text) {
  'use strict';

  var name = 'z' + Math.floor(Math.random() * 100), els;

  function initStyle() {
    var style = document.createElement('style');
    style.id = 'f-s';
    style.innerHTML = '#f-m{' +
    'position: fixed;' +
    'left:0;' +
    'bottom:0;' +
    'width:320px;' +
    'height:40px;' +
    'background:#fafafa;' +
    'color:#000;' +
    'font-family:sans-serif;' +
    'font-size:1em;' +
    'line-height:40px;' +
    '}' +
    '#f-m-p,#f-m-n{' +
    'display:inline-block;' +
    'width:3em;' +
    'cursor:pointer;' +
    '}' +
    '#f-m-p{' +
    'margin-left:1em;' +
    '}' +
    '#f-m-d{' +
    'float:right;' +
    'margin-right:1em;' +
    'cursor:pointer;' +
    '}';
    document.body.appendChild(style);
  }

  function createFindMenu() {
    var el = document.createElement('div'), current = 0, counter;

    function unWrap(el) {
      var parent = el.parentNode;
      while(el.firstChild) {
        parent.insertBefore(el.firstChild, el);
      }

      parent.removeChild(el);
    }

    function goCurrent() {
      counter.innerHTML = current + 1;
      els[current].setAttribute('style', 'background:#ff0;color#000');
      window.scrollTo(0, els[current].offsetTop);
    }

    function previous() {
      // Clear current.
      els[current].removeAttribute('style');
      current--;
      if (current < 0) {
        current = els.length - 1;
      }

      goCurrent();
    }

    function next() {
      // Clear current.
      els[current].removeAttribute('style');
      current++;
      if (current === els.length) {
        current = 0;
      }

      goCurrent();
    }

    function done() {
      // Remove spans around found text.
      while (els.length) {
        unWrap(els[0]);
      }

      // Remove menu.
      document.body.removeChild(document.getElementById('f-m'));
      document.body.removeChild(document.getElementById('f-s'));
    }

    initStyle();

    el.id = 'f-m';
    el.innerHTML = '<span id="f-m-p">&lt;</span><span id="f-m-n">&gt;</span> <span id="f-m-c">1</span> of ' + els.length + ' matches <span id="f-m-d">Done</span>';
    document.body.appendChild(el);
    document.getElementById('f-m-p').addEventListener('click', previous, false);
    document.getElementById('f-m-n').addEventListener('click', next, false);
    document.getElementById('f-m-d').addEventListener('click', done, false);
    counter = document.getElementById('f-m-c');
    goCurrent();
  }

  function replaceWith(text) {
    return '<span name="' + name + '">' + text + '</span>';
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
    els = document.getElementsByName(name);
    if (els.length) {
      createFindMenu();
    }
  }
}(prompt('Find:', '')));
