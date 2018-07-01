import React from 'react';

class Message extends React.Component {
    render() {
        return(
            <div className="result-div panel panel-default">
                <div className="panel-body">
                    <h5 className="black-text">{this.props.message}</h5>
                </div>
            </div>
        )
    }
};

export default Message;