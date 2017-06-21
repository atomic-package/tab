/**
 * Toggle Target View Class
 * @public
 * @param option
 **/
let _created_toggle_contents_num: number = 0;

export class Target {
  private _DEFAULT_TOGGLE_CLASS_NAME = 'active';

  constructor(
      public id: number,
      public idName: string,
      public className: string,
      public toggleClassName: string,
      public node: any
  ) {
    this.id = this.createContentsId();

    if(!this.toggleClassName) {
      this.toggleClassName = this._DEFAULT_TOGGLE_CLASS_NAME;
    }
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Target {
    return new Target(
        0,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        data.toggleClassName ? data.toggleClassName : null,
        data.node ? data.node : null
    );
  }

  /**
   * Private Function
   **/
  private createContentsId(): number {
    return ++_created_toggle_contents_num;
  }

  private toggleClass() {
    if(this.node.classList.contains(this.toggleClassName)) {
      this.node.classList.remove(this.toggleClassName);
    } else {
      this.node.classList.add(this.toggleClassName);
    }
  }

  /**
   * Public Function
   **/
  public getItemNode(node) {
    //return this.getChildren(node);
  }

  public toggle() {
    this.toggleClass();
  }
}

export default Target;