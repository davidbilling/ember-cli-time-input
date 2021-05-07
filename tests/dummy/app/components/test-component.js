import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TimeInputComponent extends Component {
  @service moment;

  @tracked testDate = this.moment.moment();

  @action
  timeUpdated(newTime) {
    alert(newTime);
  }

  @action
  SetOldDate(){
    this.testDate = this.moment.moment("2021-01-02 12:00");
  }
}
