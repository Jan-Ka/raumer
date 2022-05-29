export class RaumerEvent {
  title: string;
  body: string;

  constructor(title = "Unnamed", body = "") {
    this.title = title;
    this.body = body;
  }
}
