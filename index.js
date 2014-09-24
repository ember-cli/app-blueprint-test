var fleck = require('fleck');

var dasherize = fleck.dasherize;
var classify  = fleck.upperCamelize;

module.exports = {
  description: 'The default blueprint for ember-cli projects.',

  locals: function(options) {
    var entity    = options.entity;
    var rawName   = entity.name;
    var name      = dasherize(rawName);
    var namespace = classify(rawName);

    return {
      name: name,
      modulePrefix: name,
      namespace: namespace,
      emberCLIVersion: '0.0.40'
    }
  }
};
