import React from 'react';
import PropTypes from 'prop-types';

const ChatBalloonView = ({
  headerContent,
  bodyContent,
  className,
  }) => (
    <div className={className}>
      <div className="chat-balloon__header">
        { headerContent }
      </div>

      <div className="chat-balloon__body">
        { bodyContent }
      </div>
    </div>
);

ChatBalloonView.propTypes = {
  headerContent: PropTypes.node.isRequired,
  bodyContent: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default ChatBalloonView;
