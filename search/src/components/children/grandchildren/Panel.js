import React from 'react';

class Panel extends React.Component {
    render() {
        return(
            <a className="selection-panel col-sm-6 col-xs-12 btn btn-info" href={this.props.url}>
                <h2>{this.props.title}</h2>
            </a>
        )
    }
};

export default Panel;