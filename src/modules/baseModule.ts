export class BaseModule {
  protected overlay: any;
  protected img: any;
  protected options: any;
  protected requestUpdate: any;

  constructor(edit: any) {
    this.overlay = edit.overlay;
    this.img = edit.img;
    this.options = edit.options;
    this.requestUpdate = edit.onUpdate;
  }
}
