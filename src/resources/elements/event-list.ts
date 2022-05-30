import { inject } from 'aurelia-framework';
import { RaumerEvent } from "event";
import { EventsService } from 'services/events-service';

interface EventWithState {
  event: RaumerEvent;
  collapsed: boolean;
}

@inject(EventsService)
export class EventList {
  events: EventWithState[];
  events_count: string;

  constructor(private eventsService: EventsService) {
    this.events = [];

    this.updateEventsCount();
  }

  async attached() {
    const events = this.eventsService.getAll();
    this.events = (await events).map(e => ({ event: e, collapsed: true }));
    this.events[this.events.length - 1].collapsed = false;

    this.updateEventsCount();
  }

  private updateEventsCount() {
    if (this.events.length > 0) {
      this.events_count = `Your ${this.events.length} Events`;

      return;
    }

    this.events_count = "There are no Events for you";
  }
}
