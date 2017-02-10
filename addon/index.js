import {Immutable} from './seamless-immutable'

const {isArray} = Array

const NON_ENUMERABLE_KEY = '__defineNonEnumerable'

/**
 * No-op function that does nothing
 */
function noop () {}

/**
 * Add non enumerable property to object which keeps Ember from trying to
 * add other properties to the object.
 * @param {Object} object - object to add non enumerable property to
 */
function addNonEnumerableProperty (object) {
  if (object[NON_ENUMERABLE_KEY]) return
  object[NON_ENUMERABLE_KEY] = noop
}

/**
 * Tell Ember to keep it's hands off an object and all nested objects
 * @param {Object} object - object to tell Ember to keep its hands off of
 */
function keepEmbersHandsOff (object) {
  if (isArray(object)) {
    patchArraySlice(object)
  } else {
    addNonEnumerableProperty(object)
  }

  Object.keys(object).forEach((key) => {
    if (key === NON_ENUMERABLE_KEY) return

    if (object[key] instanceof Object) {
      keepEmbersHandsOff(object[key])
    }
  })
}

/**
 * Patch slice method on Object to make sure Ember keeps it's hands off of
 * items added to the array.
 * @param {Array} array - array to patch slice method of
 */
function patchArraySlice (array) {
  const originalFn = array.slice

  array.slice = function slice () {
    const result = originalFn.call(this, ...arguments)
    addNonEnumerableProperty(result)
    return result
  }
}

/**
 * Thin wrapper around Immutable that makes it play nice with Ember
 * @param {Object} object - object to get immutable copy of
 * @returns {Object} immutable object
 */
function immutable (object) {
  if (!Immutable.isImmutable(object)) {
    keepEmbersHandsOff(object)
  }

  return Immutable.call(this, ...arguments)
}

// Make sure to map methods from Immutable onto default export

;[
  'from',
  'isImmutable',
  'ImmutableError'
]
  .forEach((key) => {
    immutable[key] = Immutable[key]
  })

export default immutable
