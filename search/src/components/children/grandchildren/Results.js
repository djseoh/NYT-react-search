import React from 'react';

import Result from './greatgrandchildren/Result';

class Results extends React.Component {
    render() {
        return(
            <div>
                <h1 className="black-text">Results</h1>
                <div className="result-holder">
                    {this.props.results.map(function(article, i) {
                        return (
                            <Result key={i} url={article.url} title={article.title} date={article.date} articleID={article.articleID} savedPage={false}/>
                        );
                    })}
                </div>
            </div>
        )
    }
};

export default Results;