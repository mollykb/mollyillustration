(function (w, d) {
  var CSS_CLASS = 'navOff';
  var switchOn, switchOff, menu, on = false;

  function addClass(element, className) {
    element.className += ' ' + className;
  }

  function removeClass(element, className) {
    var classRegex = new RegExp('\\s*\\b' + className + '\\b');
    element.className = element.className.replace(classRegex, '');
  }

  function hideMenu() {
    addClass(menu, CSS_CLASS);
    addClass(switchOff, CSS_CLASS);
    removeClass(switchOn, CSS_CLASS);
  }

  function showMenu() {
    removeClass(menu, CSS_CLASS);
    addClass(switchOn, CSS_CLASS);
    removeClass(switchOff, CSS_CLASS);
  }

  var toggle = function () {
    if (on) {
      hideMenu();
      on = false;
    } else {
      showMenu();
      on = true;
    }
  };

  d.onreadystatechange = function () {
    if (d.readyState === 'interactive') {
      switchOn = d.querySelector('div.menu.switch.switch-on');
      switchOn.addEventListener('click', toggle);
      switchOff = d.querySelector('div.menu.switch.switch-off');
      switchOff.addEventListener('click', toggle);
      menu = d.querySelector('nav#menu ul');
    }
};
}(window, document));
