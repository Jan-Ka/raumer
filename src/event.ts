export enum ACTION_TYPE {
  DEFAULT = 0,
  AFFIRMATIVE = 100,
  NEGATIVE = 200,
  UNCERTAIN = 300
}

export class RaumerAction {
  type: ACTION_TYPE;
  title: string;

  constructor(type = ACTION_TYPE.DEFAULT, title = "Do Nothing") {
    this.type = type;
    this.title = title;
  }
}

export class RaumerEvent {
  title: string;
  body: string;
  actions: RaumerAction[];

  constructor(title = "Unnamed", body = "", actions = []) {
    this.title = title;
    this.body = body;
    this.actions = actions;
  }
}
