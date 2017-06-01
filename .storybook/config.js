'use strict'

import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import '../src/storybook-lab.scss';

addDecorator((story) => (
  <div className="storybook-wrapper">
    { story() }
  </div>
))

const req = require.context('../src', true, /(\.stories\.js$)|(\.stories\.jsx$)/);

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
