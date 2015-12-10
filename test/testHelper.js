/*global global*/

import React from 'react';
import TestUtils from 'react-addons-test-utils';

global.navigator = {
  userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'
};

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
