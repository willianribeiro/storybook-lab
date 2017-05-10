import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';


storiesOf('Button', module)
  .add('with text', () => (
    <Button
      label={'Hello Button'}
      onClick={action('clicked')}
    />
  ))
  .add('with some emoji', () => (
    <Button
      label={'😀 😎 👍'}
      onClick={action('clicked')}
    /> 
  ));

