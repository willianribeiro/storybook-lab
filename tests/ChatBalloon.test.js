import React from 'react';
import renderer from 'react-test-renderer';

import ChatBalloon from '../src/ChatBalloon';

it('should render ChatBalloon correctly', () => {
    const tree = renderer.create(
        <ChatBalloon
            headerContent='Chat Ballon Simples'
            bodyContent='Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Interagi no mé, cursus quis, vehicula ac nisi. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo.'
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
