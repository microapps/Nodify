// Generated by CoffeeScript 1.10.0
(function() {
  var BaseDescendant, Metafield,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseDescendant = require('./base_descendant');

  Metafield = (function(superClass) {
    extend(Metafield, superClass);

    Metafield.prototype.slug = 'metafield';

    function Metafield(site) {
      Metafield.__super__.constructor.call(this, site);
    }

    return Metafield;

  })(BaseDescendant);

  module.exports = Metafield;

}).call(this);