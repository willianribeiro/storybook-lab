'use strict'

import React from 'react';
import * as storybook from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import '../src/storybook-lab.scss';

// Function to load all stories inside src
const req = require.context('../src', true, /(\.stories\.js$)|(\.stories\.jsx$)/);
loadStories = () => {
  req.keys().forEach((filename) => req(filename))
}

// Add infoAddon
storybook.setAddon(infoAddon);

// Add div to wrapper demo's components
storybook.addDecorator((story) => (
  <div className="storybook-wrapper">
    { story() }
  </div>
))

// Load stories
storybook.configure(loadStories, module);
