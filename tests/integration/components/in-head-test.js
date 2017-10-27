import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | in head', function(hooks) {
  setupRenderingTest(hooks);

  test('it adds content to head', async function(assert) {
    assert.expect(1);
    await render(hbs`{{#in-head}}<meta property="yes" content="it-works">{{/in-head}}`);
    assert.ok(document.querySelector('meta[property="yes"]'), "should find our meta");
  });

  test('it removes content from head', async function(assert) {
    assert.expect(1);
    this.set('showIt', true);
    await render(hbs`{{#if showIt}}{{#in-head}}<meta property="yes" content="it-works">{{/in-head}}{{/if}}`);
    this.set('showIt', false);
    await settled();
    assert.ok(!document.querySelector('meta[property="yes"]'), "should not find our meta");
  });


});
