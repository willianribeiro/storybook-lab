import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import ChatBalloonView from './ChatBalloonView';

class ChatBalloon extends Component {
    render() {
        const {
            headerContent,
            bodyContent,
            removeCaret,
            caretRight,
            darkTheme,
            className
        } = this.props;

        const classNames = classnames(
            className,
            'chat-balloon',
            {'is-caret-right': caretRight && !removeCaret},
            {'is-caret-left': !caretRight && !removeCaret},
            {'is-dark': darkTheme}
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
    }
}

ChatBalloon.propTypes = {
    headerContent: PropTypes.node.isRequired,
    bodyContent: PropTypes.node.isRequired,
    removeCaret: PropTypes.bool,
    caretRight: PropTypes.bool,
    darkTheme: PropTypes.bool,
    className: PropTypes.string
};

export default ChatBalloon;
