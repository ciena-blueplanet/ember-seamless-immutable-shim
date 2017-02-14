module.exports = {
  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-get-config', target: '0.2.1'}
      ]
    })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
