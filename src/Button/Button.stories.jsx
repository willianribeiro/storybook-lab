import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(story => (
    <div>
      <h1 className="story-title">Button</h1>
      <div> { story() } </div>
    </div>
  ))
  .addWithInfo('with text', () => (
    <Button
      label={'Hello Button'}
      onClick={action('clicked')}
    />
  ))
  .addWithInfo('with some emoji', () => (
    <Button
      label={'😀 😎 👍'}
      onClick={action('clicked')}
    />
  ));

