
var domify = require('component-domify')
  , get = require('ianstormtaylor-get')
  , reactive = require('component-reactive')
  , slug = require('yields-slug')
  , template = require('./template');


/**
 * Expose `ItemView`.
 */

module.exports = ItemView;


/**
 * Initialize a new `ItemView`.
 */

function ItemView (model) {
  this.model = model;
  this.el = domify(template);
  this.reactive = reactive(this.el, model, this);
}


/**
 * Get the id of the model.
 *
 * @return {String}
 */

ItemView.prototype.id = function () {
  return get(this.model, 'id') || get(this.model, 'primary');
};


/**
 * Make a slug out of the id.
 *
 * @return {String}
 */

ItemView.prototype.slug = function () {
  return slug(this.id());
};