import printMe from './print';

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');

  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
  return element;
}
getComponent().then((component) => {
  document.body.appendChild(component);
});
import _ from 'lodash';
import Print from './print';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print;

  return element;
}

document.body.appendChild(component());
