import { bindable } from 'aurelia-framework';
import { ACTION_TYPE, RaumerEvent } from 'event';

export class EventCard {
  @bindable event: RaumerEvent;

  public getButtonClassForActionType(type: ACTION_TYPE, base: string) {
    let extraClass = "";

    switch (type) {
      case ACTION_TYPE.AFFIRMATIVE:
        extraClass = "is-success";
        break;
      case ACTION_TYPE.NEGATIVE:
        extraClass = "is-danger"
        break;
    }

    return [base, extraClass].join(" ");
  }
}
