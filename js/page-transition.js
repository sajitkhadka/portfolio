function hide(wrapper) {
  var wrapper = document.getElementById(wrapper);
  wrapper.style.display = 'none';
}
function show(wrapper) {
  var wrapper = document.getElementById(wrapper);
  wrapper.style.display = 'flex';
}

//check if mobile
var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  document.getElementById('cursor').display = 'block';
}

//Cursor on click
// document.addEventListener('mousemove', e => {
//   cursor.setAttribute(
//     'style',
//     'top: ' + (e.pageY - 7) + 'px; left: ' + (e.pageX - 7) + 'px;'
//   );
// });

document.addEventListener('click', e => {
  var cursor = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(cursor);
  cursor.setAttribute(
    'style',
    'top: ' +
      (e.pageY - 15) +
      'px; left: ' +
      (e.pageX - 15) +
      'px;width: 30px; height: 30px;border-radius: 50%; position: absolute; pointer-events: none;animation: cursorAnim3 0.8s forwards;border: 1px solid red;'
  );

  setTimeout(() => {
    cursor.parentNode.removeChild(cursor);
  }, 500);
});
