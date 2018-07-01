import React from 'react';

import Panel from './grandchildren/Panel';

class Panels extends React.Component {
    render() {
        return(
            <div className="panels container">
                <Panel title="Search" url="#/search" />
                <Panel title="Saved" url="#/saved" />
            </div>
        )
    }
};

export default Panels;