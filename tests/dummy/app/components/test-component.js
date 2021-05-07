import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TimeInputComponent extends Component {
  @service moment;

  testDate = this.moment.moment();

  @action
  timeUpdated(newTime) {
    alert('test:' + this.moment.moment(newTime, 'HH:mm').hours());
  }
}
