/* eslint-env node */

const FastBoot = require('fastboot');
const { execFileSync } = require('child_process');
const { module: Qmodule, test } = require('qunit');

Qmodule('Fastboot', function (hooks) {
  let fastboot;

  hooks.before(async function () {
    execFileSync('npx', ['ember', 'build']);
    fastboot = new FastBoot({
      distPath: 'dist',
      resilient: false,
    });
  });

  test('it works', async function (assert) {
    let page = await fastboot.visit('/', {
      request: { headers: { host: 'localhost:4200' } },
    });
    let html = await page.html();
    assert.ok(
      /<meta property="coolness-factor" content="1000">/.test(html),
      'should find our meta'
    );
  });
});
