import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop';
import moment from 'moment';
import { get } from '@ember/object';
import { set } from '@ember/object';

module('Integration | Component | time input', function (hooks) {
  setupRenderingTest(hooks);

  test('Action called', async function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    set(this, 'testDate', moment());
    set(this, 'timeUpdated', () => {
      const val = get(this, 'testDate');
      assert.equal(val.format('YYYY-MM-DD HH:mm'), moment().format('YYYY-MM-DD HH:mm'));
    });

    await render(hbs`{{time-input currentDate=testDate onChangedTime=(action timeUpdated)}}`);

    run(() => document.getElementById('timeInput').focus());

    // Template block usage:
    await render(hbs`
      {{#time-input}}
        template block text
      {{/time-input}}
    `);

  });

  // test('date array updates', function(assert) {

  //     let arrays = [];
  //     arrays.push(moment('2017-10-26 15:23'));
  //     this.set('newsuggesteddates', arrays);

  //     this.on('timeUpdated', function(val) {
  //       assert.equal(val.format('YYYY-MM-DD HH:mm'), moment().format('YYYY-MM-DD HH:mm') );
  //     });

  //     this.render(hbs`{{time-input arrayDates=newsuggesteddates action='timeUpdated'}}`);

  //     run(() => document.getElementById('timeInput').focus());
  //   });
});