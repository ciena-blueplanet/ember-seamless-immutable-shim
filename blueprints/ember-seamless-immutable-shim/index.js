module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'seamless-immutable', target: '6.1.1'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
