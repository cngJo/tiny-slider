import { docElement } from './docElement.js';
import { isServer } from './isServer';

export function resetFakeBody (body, docOverflow) {
  if (!isServer && body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    docElement.offsetHeight;
  }
}