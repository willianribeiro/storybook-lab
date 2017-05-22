import React, { Component, PropTypes } from 'react'

import './ChatBalloon.scss'

class ChatBalloonView extends Component {
    render() {
        const {
            headerContent,
            bodyContent,
            className
        } = this.props

        return (
            <div className={className}>
                <div className="chat-balloon__header">
                    { headerContent }
                </div>

                <div className="chat-balloon__body">
                    { bodyContent }
                </div>
            </div>
        );
    }
}

ChatBalloonView.propTypes = {
    headerContent: PropTypes.node.isRequired,
    bodyContent: PropTypes.node.isRequired
};

export default ChatBalloonView
