import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';
import { run } from '@ember/runloop';

moduleForComponent('time-input', 'Integration | Component | time input', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{time-input }}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#time-input}}
      template block text
    {{/time-input}}
  `);

  assert.equal(this.$().text().trim(), '');
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