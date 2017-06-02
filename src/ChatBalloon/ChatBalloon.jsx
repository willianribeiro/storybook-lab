import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import ChatBalloonView from './ChatBalloonView';

const ChatBalloon = ({
  headerContent,
  bodyContent,
  removeCaret,
  caretRight,
  darkTheme,
  className }) => {
  const classNames = classnames(
    className,
    'chat-balloon',
    { 'is-caret-right': caretRight && !removeCaret },
    { 'is-caret-left': !caretRight && !removeCaret },
    { 'is-dark': darkTheme },
  );

  return (
    <ChatBalloonView
      headerContent={headerContent}
      bodyContent={bodyContent}
      removeCaret={removeCaret}
      caretRight={caretRight}
      className={classNames}
    />
  );
};

ChatBalloon.propTypes = {
  headerContent: PropTypes.node.isRequired,
  bodyContent: PropTypes.node.isRequired,
  removeCaret: PropTypes.bool,
  caretRight: PropTypes.bool,
  darkTheme: PropTypes.bool,
  className: PropTypes.string,
};

ChatBalloon.defaultProps = {
  removeCaret: false,
  caretRight: false,
  darkTheme: false,
  className: '',
};

export default ChatBalloon;
