import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | in head', function (hooks) {
  setupRenderingTest(hooks);

  test('it adds content to head', async function (assert) {
    assert.expect(1);
    await render(
      hbs`<InHead>
            {{!-- template-lint-disable no-forbidden-elements --}}
            <meta property="yes" content="it-works">
          </InHead>`
    );
    assert.ok(
      document.querySelector('meta[property="yes"]'),
      'should find our meta'
    );
  });

  test('it adds content to head when an invalid element has been added before it', async function (assert) {
    assert.expect(1);
    // The spec says head should always be the first child but Ronin Wallet inserts its script before head
    document.documentElement.prepend(document.createElement('script'));
    await render(
      hbs`<InHead>
            {{!-- template-lint-disable no-forbidden-elements --}}
            <meta property="yes" content="it-works">
          </InHead>`
    );
    assert.ok(
      document.querySelector('meta[property="yes"]'),
      'should find our meta'
    );
  });

  test('it removes content from head', async function (assert) {
    assert.expect(1);
    this.set('showIt', true);
    await render(
      hbs`{{#if this.showIt}}
            <InHead>
              {{!-- template-lint-disable no-forbidden-elements --}}
              <meta property="yes" content="it-works">
            </InHead>
          {{/if}}`
    );
    this.set('showIt', false);
    await settled();
    assert.notOk(
      document.querySelector('meta[property="yes"]'),
      'should not find our meta'
    );
  });
});
