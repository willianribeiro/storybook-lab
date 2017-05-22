import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ChatBalloon from './ChatBalloon';


storiesOf('ChatBalloon', module)
  .addDecorator((story) => (
    <div>
      <h1>ChatBalloon</h1>
      <div> { story() } </div>
    </div>
  ))
  .add('Simplest', () => (
    <ChatBalloon
      headerContent='ChatBallon Simples'
      bodyContent='Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Interagi no mé, cursus quis, vehicula ac nisi. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo.'
    />
  ))
  .add('Dark theme', () => (
    <ChatBalloon
      darkTheme
      headerContent='Com tema Dark'
      bodyContent='Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Interagi no mé, cursus quis, vehicula ac nisi. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo.'
    />
  ))
  .add('Caret on the right', () => (
    <ChatBalloon
      caretRight
      headerContent='Com caret na direita'
      bodyContent='Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Interagi no mé, cursus quis, vehicula ac nisi. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo.'
    />
  ))
  .add('Without caret', () => (
    <ChatBalloon
      removeCaret
      headerContent='Sem caret'
      bodyContent='Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Interagi no mé, cursus quis, vehicula ac nisi. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo.'
    />
  ))
  .add('With HTML on the body', () => {
    const bodyHTML = (
      <div>
        Mussum Ipsum, cacilds vidis <strong>litro abertis. </strong>
        Leite de capivaris, leite de mula manquis sem cabeça.
        <br />
        <br />
        <img
          src='http://bit.ly/1PPeefG'
          alt="pug"
          style={{ maxWidth: '100%'}}
        />
      </div>
    );

    return (
      <ChatBalloon
        headerContent='Passando um HTML como parâmetro para o body'
        bodyContent={bodyHTML}
      />
    );
  });
