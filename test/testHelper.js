import React from 'react';
import TestUtils from 'react-addons-test-utils';

export function TestUtilRender(component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

export function shallowRender(Component, props = {}) {
  return TestUtilRender(<Component {...props} />);
}

export function renderIntoDocument (Component, props = {}) {
  return TestUtils.renderIntoDocument(<Component {...props} />);
}
