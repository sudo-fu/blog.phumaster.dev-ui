import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import DefaultLayout from './layouts/default/DefaultLayout';
import DummyLayout from './layouts/dummy/DummyLayout';

const Home = lazy(() => import('./modules/home/Home'));
const Post = lazy(() => import('./modules/post/Post'));

const DefaultLayoutRoutes: React.FC = () => {
    const { path } = useRouteMatch();
    return (
        <DefaultLayout>
            <Switch>
                <Route
                    path={path}
                    component={Home}
                    exact
                />
                <Route
                    path={`${path}p/:id`}
                    component={Post}
                />
                <Route
                    render={() => <div>404 not found</div>}
                />
            </Switch>
        </DefaultLayout>
    );
};

const DummyLayoutRoutes: React.FC = () => {
    const { path } = useRouteMatch();
    return (
        <DummyLayout>
            <Switch>
                <Route
                    path={`${path}/123`}
                    render={() => <div>dummy123</div>}
                    exact
                />
                <Route
                    path={`${path}/:id`}
                    render={() => <div>dummy456</div>}
                />
                <Route
                    path={path}
                    exact
                    render={() => <div>dummy789</div>}
                />
            </Switch>
        </DummyLayout>
    );
};

const Routes: React.FC = () => (
    <Router>
        <Suspense fallback={<div>loading....</div>}>
            <Switch>
                <Route
                    path="/dummy"
                    component={DummyLayoutRoutes}
                />
                <Route
                    path="/"
                    component={DefaultLayoutRoutes}
                />
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;
