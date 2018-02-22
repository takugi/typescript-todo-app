export class Task {

  title: string;
  finishedCheckbox: boolean;

  constructor(title: string, finishedCheckbox?: boolean) {
    this.title = title;
    if (finishedCheckbox == null) {
      this.finishedCheckbox = false;
    } else {
      this.finishedCheckbox = finishedCheckbox;
    }
  }

  public getTitle() : string {
    return this.title
  }

  public getFinishedCheckbox() : boolean {
    return this.finishedCheckbox
  }
}
