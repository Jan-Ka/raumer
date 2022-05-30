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
  id: string;

  type: EVENT_TYPE;
  title: string;
  body: string;
  actions: RaumerAction[];

  constructor(type = EVENT_TYPE.UNDEFINED, title = "Unnamed", body = "", actions = []) {
    this.id = RaumerEvent.generate();
    this.type = type;
    this.title = title;
    this.body = body;
    this.actions = actions;
  }

  private static generate(): string {
    // tslint:disable-next-line:typedef
    const right = (a?: string): string => {
      return a ? left(a) : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, right);
    };

    const left = (sub: string): string => {
      // tslint:disable-next-line:prefer-const
      const numArray: Uint8Array = new Uint8Array(1);
      crypto.getRandomValues(numArray);
      const num: number = Math.round(numArray[0] / 16);

      return num.toString(16);
    };

    return right();
  }
}
