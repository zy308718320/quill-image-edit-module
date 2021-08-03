import Quill from 'quill';
import ImageEdit from '../../src/index';

let imageEdit: any;

describe('testing ImageEdit', () => {
  beforeEach(() => {
    // @ts-ignore
    document.execCommand = function execCommandMock() {};
    document.body.innerHTML = '<div id="editor"></div>';
    Quill.register('modules/imageEdit', ImageEdit);
    const quill = new Quill('#editor', {
      modules: {
        toolbar: true,
        imageEdit: {
          modules: ['Resize', 'DisplaySize', 'Toolbar', 'Delete'],
        },
      },
      theme: 'snow',
    });
    imageEdit = quill.getModule('imageEdit');
  });
  it('test methods setUserSelect', () => {
    imageEdit.setUserSelect('none')
    expect(document.documentElement.style['userSelect']).toBe('none');
  });
});
