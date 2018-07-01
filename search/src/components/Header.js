import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="page-header" role="navigation">
                <div className="container">
                    <div className="col-xs-12 col-sm-6 title">
                        <h1><a href="/">React NYTimes</a></h1>
                    </div>
                    <div className="col-xs-12 col-sm-6 header-links">
                        <h4><a href="#/search">Search <span className="glyphicon glyphicon-search"/></a></h4>
                        <h4><a href="#/saved">Saved <span className="glyphicon glyphicon-bookmark"/></a></h4>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;