import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { getGlobalConfig } from '@embroider/macros';

export default class extends Component {
  get head() {
    let document = getOwner(this).lookup('service:-document').documentElement;
    let child = document.firstChild;
    while (child) {
      if (child.tagName === 'HEAD') {
        return child;
      }
      child = child.nextSibling;
    }
    return undefined;
  }
  get inFastboot() {
    return getGlobalConfig().fastboot?.isRunning;
  }
}
