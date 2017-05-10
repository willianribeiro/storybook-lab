'use strict'

import { configure } from '@kadira/storybook';

function loadStories () {
  require('../stories/index.js');
  // You can require another stories if you need.
}

configure(loadStories, module);
