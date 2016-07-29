'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'seamless-immutable',

  treeForAddon (tree) {
    const seamlessImmutablePath = path.dirname(require.resolve('seamless-immutable/src/seamless-immutable.js'))
    let seamlessImmutableTree = this.treeGenerator(seamlessImmutablePath)

    seamlessImmutableTree = replace(seamlessImmutableTree, {
      files: [
        '**/*.js'
      ],
      patterns: [
        {
          match: /process\.env\.NODE_ENV/g,
          replacement: `"${this.app.env}"`
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
