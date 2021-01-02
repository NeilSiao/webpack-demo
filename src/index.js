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
import bird from './bird.jpg';
function component() {
  const element = document.createElement('div');
  const img = document.createElement('img');
  img.src = bird;
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print;
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());
