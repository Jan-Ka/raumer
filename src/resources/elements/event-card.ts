import { bindable } from 'aurelia-framework';
import { ACTION_TYPE, EVENT_TYPE, RaumerEvent } from 'event';

export class EventCard {
  @bindable event: RaumerEvent;

  public getIconClassForEventType(type: EVENT_TYPE, base: string) {
    let extraClass = "";

    switch (type) {
      case EVENT_TYPE.AFFIRMATIVE:
        extraClass = "fa-solid fa-circle-plus has-text-success";
        break;
      case EVENT_TYPE.NEGATIVE:
        extraClass = "fa-solid fa-circle-down has-text-danger";
        break;
      case EVENT_TYPE.UNCERTAIN:
        extraClass = "fa-solid fa-circle-question";
        break;
    }

    return [base, extraClass].join(" ");
  }

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
