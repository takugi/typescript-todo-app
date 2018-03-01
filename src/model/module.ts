export class Task {

  title: string;
  finishChecked: boolean;

  constructor(title: string, finishChecked : boolean  = false) {
    this.title = title;
    this.finishChecked = finishChecked;
  }

  public getTitle() : string {
    return this.title
  }

  public getFinishChecked() : boolean {
    return this.finishChecked
  }

  public changeFinishChecked() : void {
    if (this.finishChecked) {
      this.finishChecked = false;
    } else {
      this.finishChecked = true;
    }
  }
}
