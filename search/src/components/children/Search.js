import React from 'react';

import Query from './grandchildren/Query';
import Results from './grandchildren/Results';
import Message from './grandchildren/Message';

import helpers from '../utils/helpers';

class Search extends React.Component {
    state = {
            term: '',
            begin: '',
            end: '',
            results: [],
            searched: '',
            message: ''
    
    };
    setTerms = () => {
        this.setState(
            {
                term: this.state.term,
                begin: this.state.begin,
                end: this.state.end
            }
        );
    }
    componentDidUpdate() {
        // Check whether we have a new queryURL.
        if (this.state.searched !== this.state.term + this.state.begin + this.state.end) {
            this.setState({
                searched: this.state.term + this.state.begin + this.state.end
            });
            // Run the query for the address
            helpers.runQuery(this.state.term, this.state.begin, this.state.end).then(function(data) {
                if (data) {
                    if (JSON.stringify(data) !== JSON.stringify(this.state.results)) {
                        this.setState({results: data});
                    }
                } else {
                    this.setState({message: 'No results found!'})
                }
            }.bind(this));
        }
    }
    render() {
        return(
            <div>
                <h1 className="black-text">Search</h1>
                <Query setTerms={this.setTerms} />
                {this.state.results.length > 0 &&
                    <Results results={this.state.results}/>
                }
                {this.state.message.length > 0 &&
                    <Message message={this.state.message} />
                }
            </div>
        )
    }
};

export default Search;