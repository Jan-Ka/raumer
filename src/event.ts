export enum EVENT_TYPE {
  UNDEFINED = 0,
  AFFIRMATIVE = 100,
  NEGATIVE = 200,
  UNCERTAIN = 300
}

export enum ACTION_TYPE {
  UNDEFINED = 0,
  AFFIRMATIVE = 100,
  NEGATIVE = 200,
  UNCERTAIN = 300
}

export class RaumerAction {
  type: ACTION_TYPE;
  title: string;

  constructor(type = ACTION_TYPE.UNDEFINED, title = "Do Nothing") {
    this.type = type;
    this.title = title;
  }
}

export class RaumerEvent {
  type: EVENT_TYPE;
  title: string;
  body: string;
  actions: RaumerAction[];

  constructor(type = EVENT_TYPE.UNDEFINED, title = "Unnamed", body = "", actions = []) {
    this.type = type;
    this.title = title;
    this.body = body;
    this.actions = actions;
  }
}
