import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | redirects test', function(hooks) {
  setup(hooks);

  test('redirects with a transition to', async function(assert) {
    let { headers, statusCode, url } = await visit('/redirects/transition-to');

    assert.equal(statusCode, 307);
    assert.equal(url, '/');
    assert.equal(headers.location, '//ember-cli-fastboot-testing.localhost/');
  });

  test('redirects with a replace with', async function(assert) {
    let { headers, statusCode, url } = await visit('/redirects/replace-with');

    assert.equal(statusCode, 307);
    assert.equal(url, '/');
    assert.equal(headers.location, '//ember-cli-fastboot-testing.localhost/');
  });

});
