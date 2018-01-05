import {expect} from 'chai'
import {describe, it} from 'mocha'
import immutable from 'seamless-immutable'

const NON_ENUMERABLE_KEY = '__defineNonEnumerable'

describe('seamless-immutable', function () {
  it('should have a single module that has been exported', function () {
    expect(typeof immutable).to.equal('function')
  })

  ;[
    'from',
    'isImmutable',
    'ImmutableError'
  ]
    .forEach((key) => {
      it(`has ${key} method`, function () {
        expect(typeof immutable[key]).to.equal('function')
      })
    })

  it('should not let Ember try to mutate immutable objects', function () {
    expect(typeof immutable({baz: 'test'})[NON_ENUMERABLE_KEY]).to.equal('function')
  })
})
