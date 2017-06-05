import React from 'react';
import renderer from 'react-test-renderer';

import ChatBalloon from './ChatBalloon';

it('should render ChatBalloon correctly', () => {
  let bodyContent = '';
  bodyContent += 'Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula ';
  bodyContent += 'manquis sem cabeça. Interagi no mé, cursus quis, vehicula ac nisi. ';
  bodyContent += 'Manduma pindureta quium dia nois paga. In elementis mé pra quem ';
  bodyContent += 'é amistosis quis leo.';

  const tree = renderer.create(
    <ChatBalloon
      headerContent="Chat Balloon Simples"
      bodyContent={bodyContent}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
