'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'seamless-immutable',
  /**
     This method climbs up the hierarchy of addons
     up to the host application.
     This prevents previous addons (prior to `this.import`, ca 2.7.0)
     to break at importing assets when they are used nested in other addons.
     @private
     @method _findHost
   */
  _findHost: function() {
    var current = this;
    var app;

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    return app;
  },

  treeForAddon (tree) {
    var app = this._findHost()
    const seamlessImmutablePath = path.dirname(require.resolve('seamless-immutable/src/seamless-immutable.js'))
    let seamlessImmutableTree = this.treeGenerator(seamlessImmutablePath)

    seamlessImmutableTree = replace(seamlessImmutableTree, {
      files: [
        '**/*.js'
      ],
      patterns: [
        {
          match: /process\.env\.NODE_ENV/g,
          replacement: `"${app.env}"`
        }
      ]
    })

    if (!tree) {
      return this._super.treeForAddon.call(this, seamlessImmutableTree)
    }

    const trees = mergeTrees([seamlessImmutableTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
