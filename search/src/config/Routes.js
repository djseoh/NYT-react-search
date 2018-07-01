// Include the React library
import React from 'react';
import router from 'react-router';
import Main from '../components/Main';
import Search from '../components/children/Search';
import Saved from '../components/children/Saved';
import Panels from '../components/children/Panels';

const Route = router.Route;
const Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server

const hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

class Routes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>

                    <Route path="search" component={Search} />
                    <Route path="saved" component={Saved} />

                    <IndexRoute component={Panels} />
                </Route>
            </Router>
        )
    }
}

export default Routes
