
var domify = require('component-domify')
  , inherit = require('component-inherit')
  , Item = require('./item')
  , list = require('segmentio-list')
  , protos = require('./protos')
  , statics = require('./statics');


/**
 * Expose the default `Menu` with `Item` view.
 */

module.exports = createMenu(Item);


/**
 * Create a `Menu` constructor with a given `MenuItem` view.
 *
 * @param {Function} MenuItem
 */

function createMenu (MenuItem) {

  var List = list(MenuItem);

  /**
   * Initialize a new `Menu`.
   */

  function Menu () {
    if (!(this instanceof Menu)) return createMenu.apply(this, arguments);
    List.apply(this, arguments);
    this.el = domify('<menu class="menu" tabindex="0">');
    this.bind();
    this.Menu.emit('construct', this);
  }

  // inherit from List
  inherit(Menu, List);

  // statics + protos
  Menu.prototype.List = List;
  Menu.prototype.Menu = Menu;
  for (var key in statics) Menu[key] = statics[key];
  for (var key in protos) Menu.prototype[key] = protos[key];

  return Menu;
}