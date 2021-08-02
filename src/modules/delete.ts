import Quill from 'quill';
import { BaseModule } from './baseModule';

export default class Delete extends BaseModule {
  private deleteBtn: any;
  private deleteArrow: any;

  onCreate = () => {
    // Create the container to hold the size display
    this.deleteBtn = document.createElement('div');
    this.deleteArrow = document.createElement('span');

    // Apply styles
    Object.assign(this.deleteBtn.style, this.options.deleteBtnStyles);
    Object.assign(this.deleteArrow.style, this.options.deleteArrowStyles);

    this.deleteBtn.innerText = this.options.deleteText;

    this.deleteBtn.addEventListener('click', this.handleDelete);

    // Attach it
    this.deleteBtn.appendChild(this.deleteArrow);
    this.overlay.appendChild(this.deleteBtn);
  };

  handleDelete = () => {
    if (this.img) {
      Quill.find(this.img).deleteAt(0);
      this.hide();
    }
  };
}
