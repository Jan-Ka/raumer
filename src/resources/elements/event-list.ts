import { inject } from 'aurelia-framework';
import { RaumerEvent } from "event";
import { EventsService } from 'services/events-service';

@inject(EventsService)
export class EventList {
  events: RaumerEvent[];
  events_count: string;

  constructor(private eventsService: EventsService) {
    this.events = [];
    this.updateEventsCount();
  }

  async created() {
    const events = this.eventsService.getAll();
    this.events = await events;
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
