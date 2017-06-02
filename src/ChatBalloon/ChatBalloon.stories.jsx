import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ChatBalloon from './ChatBalloon';

let bodyContent = '';
bodyContent += 'Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula ';
bodyContent += 'manquis sem cabeça. Interagi no mé, cursus quis, vehicula ac nisi. ';
bodyContent += 'Manduma pindureta quium dia nois paga. In elementis mé pra quem ';
bodyContent += 'é amistosis quis leo.';

storiesOf('ChatBalloon', module)
  .addDecorator(story => (
    <div>
      <h1 className="story-title">ChatBalloon</h1>
      <div> { story() } </div>
    </div>
  ))
  .add('Simplest', () => (
    <ChatBalloon
      headerContent="ChatBalloon Simples"
      bodyContent={bodyContent}
    />
  ))
  .add('Dark theme', () => (
    <ChatBalloon
      darkTheme
      headerContent="Com tema Dark"
      bodyContent={bodyContent}
    />
  ))
  .add('Caret on the right', () => (
    <ChatBalloon
      caretRight
      headerContent="Com caret na direita"
      bodyContent={bodyContent}
    />
  ))
  .add('Without caret', () => (
    <ChatBalloon
      removeCaret
      headerContent="Sem caret"
      bodyContent={bodyContent}
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
          src="http://i.imgur.com/qpdJh22.jpg"
          alt="pug"
          style={{ maxWidth: '100%' }}
        />
      </div>
    );

    return (
      <ChatBalloon
        headerContent="Passando um HTML como parâmetro para o body"
        bodyContent={bodyHTML}
      />
    );
  });
