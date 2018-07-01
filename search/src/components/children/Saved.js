import React from 'react';
import Result from './grandchildren/greatgrandchildren/Result';
import Message from './grandchildren/Message';

import helpers from '../utils/helpers';

class Saved extends React.Component {
    state = {
            saved: [],
            message: ''
        };
    // The moment the page renders get the saved items
    componentDidMount () {
        helpers.getSaved().then(function(response) {
            if (response.data.length > 0) {
                this.setState({ saved: response.data });
            } else {
                this.setState({ message: 'No items saved yet!' });
            }

        }.bind(this));
    }
    render() {
        return(
            <div className="result-holder">
                <h3>Saved</h3>
                {this.state.saved.map(function(article, i) {
                    return (
                        <Result key={i} url={article.url} title={article.title} date={article.date} articleID={article.articleID} savedPage={true} />
                    );
                })}
                {this.state.message.length > 0 &&
                    <Message message={this.state.message} />
                }
            </div>
        )
    }
};

export default Saved;