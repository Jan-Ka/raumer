import { ACTION_TYPE, EVENT_TYPE, RaumerAction, RaumerEvent } from "event";

export class EventsService {
  public async getAll() {
    const events = [];

    for (let i = 0; i < this.getRandomIntInclusive(3, 6); i++) {
      const actions = [];
      let type = EVENT_TYPE.UNCERTAIN;

      if ((i + 1) % 2 == 0) {
        actions.push(new RaumerAction(ACTION_TYPE.AFFIRMATIVE, "Yes"))
        actions.push(new RaumerAction(ACTION_TYPE.NEGATIVE, "No"))
        actions.push(new RaumerAction(ACTION_TYPE.UNCERTAIN, "Maybe"))

        type = EVENT_TYPE.NEGATIVE;
      } else {
        actions.push(new RaumerAction(ACTION_TYPE.UNCERTAIN, "Take it like a Dwarf"))
      }

      events.push(new RaumerEvent(type, `This is Random Event #${i + 1}`, "lorem ipsum", actions));
    }

    return events;
  }

  private getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
}
