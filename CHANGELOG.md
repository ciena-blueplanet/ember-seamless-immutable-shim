# 3.0.1 (2018-03-20)
* **Updated** pull request template
* **Added** issue template
* **Updated** to `pr-bumper` version `3`
* **Updated** to node 8
* **Added** slack integration
* **Updated** `ember-frost-test` to `^4.0.1`
* **Updated** `ember-test-utils` to `^8.1.1`
* **Removed** ignoring of `package-lock.json` file
* **Added** `package-lock.json` file
* **Updated** Travis CI scripts to allow non-exact node version

# 3.0.0 (2018-01-05)
* **Added** `bower` devDependency @ `^1.8.2`
* **Added** `ember-frost-test` @ `^4.0.0`
* **Added** `chai-jquery` @ `^2.0.0`
* **Updated** `ember-cli-chai` to `0.4.3`
* **Updated** to pin `ember-cli-htmlbars-inline-precompile` @ `0.3.12`
* **Updated** `ember-cli-mocha` to `0.14.4`
* **Added** `ember-hook` @ `1.4.2`
* **Added** `ember-sinon` @ `^0.7.0`
* **Updated** `ember-test-utils` to `^8.1.0`
* **Added** `sinon-chai` @ `^2.14.0`
* **Added** ignoring of `package-lock` until we are ready to move to node 8
* **Added** ignoring of linting of source of seamless-immutable in `addon/index.js`
* **Added** ignoring of linting the CHANGELOG.md file
* **Removed** blueprints since installation of files is now via dependencies
* **Removed** useLintTree ember-cli-mocha configuration from `ember-cli-build.js`
* **Updated** `ember-cli-htmlbars` to be a devDependency
* **Updated** README with the version of seamless-immutable that this shim is using
  

# 2.0.2 (2017-06-29)
* **Updated** to Ember CLI 2.12.3 and Ember 2.12.x
* **Updated** ember-try config matrix with Ember LTS 2.4 and LTS 2.8
* **Updated** travis.yml build matrix to run Ember LTS 2.4, LTS 2.8 and default (Ember LTS 2.12) 

# 2.0.1 (2017-05-11)

* **Added** `.pr-bumper.json`


# 2.0.0

* **Upgraded** to `seamless-immutable` version `7.0.1`.


# 1.1.5

* **Fixed** bug where `__defineNonEnumerable` was showing up on immutable objects as an enumerable property.


# 1.1.4

* **Fixed** default export to monkey patch immutable objects in a way that keeps Ember from trying to add properties to them, which results in an exception. This allows immutable objects to be directly referenced in templates and computed properties.

# 1.1.3

* **Fixed** build to publish.

# 1.1.2

* **Updated** CI to test in Chrome as well as Firefox.


# 1.1.1

* **Upgraded** to test against Ember 2.11.


# 1.1.0

* **Added** additional builds to CI to make sure addon works with latest versions of Ember.
* **Removed** files from npm package that aren't necessary (all of the various config files).
* **Updated** dependencies to latest versions.


# 1.0.1

* **Updated** Travis configuration to test addon against older versions of Ember.



# 1.0.0

* **Added** missing dependency.



# 0.2.13
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.12
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.11
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.10
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.9
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.8
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.7
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.6
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.1

* **Fixed** usage in README.


# 0.2.0

* Implement shim and wire up to CI.



