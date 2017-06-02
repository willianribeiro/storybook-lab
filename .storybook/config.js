'use strict'

import React from 'react';
import { configure, addDecorator, setAddon } from '@kadira/storybook';
import infoAddon from '@storybook/addon-info';
import '../src/storybook-lab.scss';

setAddon(infoAddon);

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
