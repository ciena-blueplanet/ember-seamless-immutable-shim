module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'seamless-immutable', target: '6.3.0'}
    ])
      .then(() => {
        return this.addAddonsToProject({
          packages: [
            {name: 'ember-get-config', target: '0.2.1'}
          ]
        })
      })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
