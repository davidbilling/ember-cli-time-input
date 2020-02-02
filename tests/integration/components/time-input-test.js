import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import moment from 'moment';
// import { run } from '@ember/runloop';

module('Integration | Component | time-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {

    this.testDate = moment();
    this.timeUpdated = () => {
      const val = this.testDate;
      assert.equal(val.format('YYYY-MM-DD HH:mm'), moment().format('YYYY-MM-DD HH:mm'));
    };

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<input type="text" id="other"/>`);  
    await render(hbs`<TimeInput @currentDate={{this.testDate}} @onChangedTime={{this.timeUpdated}}/>`);

    assert.dom(this.element).hasText('');
//    run(() => document.getElementById('timeInput').focus());
    // Blur
//    run(() => document.getElementById('other').focus());

  });
});
