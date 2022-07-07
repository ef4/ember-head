import Component from '@glimmer/component';
import { getOwner } from '@ember/application';

export default class extends Component {
  get head() {
    let document = getDOM(this).documentElement;
    let child = document.firstChild;
    while (child) {
      if (child.tagName === 'HEAD') {
        return child;
      }
      child = child.nextSibling;
    }
    return undefined;
  }
}

function getDOM(context) {
  let { renderer } = context;
  if (!renderer._dom) {
    // pre glimmer2
    let container = getOwner ? getOwner(context) : context.container;
    let documentService = container.lookup('service:-document');
    if (documentService) {
      return documentService;
    }
    renderer = container.lookup('renderer:-dom');
  }
  if (renderer._dom && renderer._dom.document) {
    // pre Ember 2.6
    return renderer._dom.document;
  } else {
    throw new Error('ember-wormhole could not get DOM');
  }
}
