import { RaumerEvent } from "event";

export class EventsService {
  public async getAll() {
    const events = [];

    for (let i = 0; i < this.getRandomIntInclusive(1, 20); i++) {
      events.push(new RaumerEvent(`This is Random Event #${i}`, "lorem ipsum"));
    }

    return events;
  }

  private getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
}
