import IconAlignLeft from 'quill/assets/icons/align-left.svg';
import IconAlignCenter from 'quill/assets/icons/align-center.svg';
import IconAlignRight from 'quill/assets/icons/align-right.svg';
import { BaseModule } from './baseModule';

export default class Toolbar extends BaseModule {
  private toolbar: HTMLElement | undefined;
  private alignments: any;

  onCreate = () => {
    // Setup Toolbar
    this.toolbar = document.createElement('div');
    Object.assign(this.toolbar.style, this.options.toolbarStyles);
    this.overlay.appendChild(this.toolbar);

    // Setup Buttons
    this._defineAlignments();
    this._addToolbarButtons();
  };

  _defineAlignments = () => {
    this.alignments = [
      {
        icon: IconAlignLeft,
        apply: () => {
          this._setProperty('display', 'inline');
          this._setProperty('float', 'left');
          this._setProperty('margin', '0 1em 1em 0');
        },
        isApplied: () => this._getProperty('float') === 'left',
      },
      {
        icon: IconAlignCenter,
        apply: () => {
          this._setProperty('display', 'block');
          this._setProperty('float', '');
          this._setProperty('margin', 'auto');
        },
        isApplied: () => this._getProperty('margin') === 'auto',
      },
      {
        icon: IconAlignRight,
        apply: () => {
          this._setProperty('display', 'inline');
          this._setProperty('float', 'right');
          this._setProperty('margin', '0 0 1em 1em');
        },
        isApplied: () => this._getProperty('float') === 'right',
      },
    ];
  };

  _camelize(name: string): string {
    const parts = name.split('-');
    const rest = parts
      .slice(1)
      .map(function (part: string) {
        return part[0].toUpperCase() + part.slice(1);
      })
      .join('');
    return parts[0] + rest;
  }

  _setProperty = (key: string, value: string) => {
    this.img.style[this._camelize(key)] = value;
  };

  _getProperty = (key: string) => {
    return this.img.style[this._camelize(key)];
  };

  _removeProperty = (key: string) => {
    this.img.style[this._camelize(key)] = '';
  };

  _addToolbarButtons = () => {
    const buttons: HTMLElement[] = [];
    this.alignments.forEach((alignment: any, idx: number) => {
      const button = document.createElement('span');
      buttons.push(button);
      button.innerHTML = alignment.icon;
      button.addEventListener('click', () => {
        // deselect all buttons
        buttons.forEach((button: HTMLElement) => button.style.filter = '');
        if (alignment.isApplied()) {
          // If applied, unapply
          this._removeProperty('display');
          this._removeProperty('margin');
          this._removeProperty('float');
        } else {
          // otherwise, select button and apply
          this._selectButton(button);
          alignment.apply();
        }
        // image may change position; redraw drag handles
        this.requestUpdate();
      });
      Object.assign(button.style, this.options.toolbarButtonStyles);
      if (idx > 0) {
        button.style.borderLeftWidth = '0';
      }
      // Object.assign((button.children[0] as HTMLElement).style, this.options.toolbarButtonSvgStyles);
      if (alignment.isApplied()) {
        // select button if previously applied
        this._selectButton(button);
      }
      this.toolbar?.appendChild(button);
    });
  };

  _selectButton = (button: HTMLElement) => {
    button.style.filter = 'invert(20%)';
  };
}
