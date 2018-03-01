export class Task {

  private id: number;
  private title: string;
  private finishChecked: boolean;

  constructor(id: number, title: string, finishChecked : boolean  = false) {
    this.id = id;
    this.title = title;
    this.finishChecked = finishChecked;
  }

  public getId() : number {
    return this.id
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
