import {expect} from 'chai'
import {describe, it} from 'mocha'
import immutable from 'seamless-immutable'

describe('seamless-immutable', function () {
  it('immutable is a single module that has been exported', function () {
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
})
