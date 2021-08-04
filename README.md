# quill-image-edit-module

[![Build Status](https://travis-ci.com/zy308718320/quill-image-edit-module.svg?branch=master)](https://travis-ci.com/zy308718320/quill-image-edit-module)
[![Coverage Status](https://coveralls.io/repos/github/zy308718320/quill-image-edit-module/badge.svg?branch=master)](https://coveralls.io/github/zy308718320/quill-image-edit-module?branch=master)
![GitHub](https://img.shields.io/github/license/zy308718320/quill-image-edit-module)
![GitHub package.json version](https://img.shields.io/github/package-json/v/zy308718320/quill-image-edit-module)

A module for Quill rich text editor that allows editing of images.

based on [quill-image-resize-module](https://github.com/kensnyder/quill-image-resize-module) development

### Optimization

- TypeScript Support
- Delete tool

[![NPM](https://nodei.co/npm/quill-image-edit-module.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/quill-image-edit-module/)

## Demo

### Vanilla

[vanilla](https://codesandbox.io/s/small-https-lqjxo)

### React

[react-quill](https://codesandbox.io/s/gracious-leaf-r64f8)

### Vue2

[vue-quill-editor](https://codesandbox.io/s/vibrant-davinci-47qpe)

### Vue3

[vue3-quill](https://codesandbox.io/s/determined-wozniak-b4ytr)

## Install

```
npm i quill-image-edit-module -S
# or
yarn add quill-image-edit-module -S
```

## Usage

```
import Quill from 'quill';
import ImageEdit from 'quill-image-edit-module';

Quill.register('modules/imageEdit', ImageEdit);

const modules = {
  // ...
  imageEdit: {
    // ...
    modules: ['Resize', 'DisplaySize', 'Toolbar', 'Delete'],
  },
};
```
