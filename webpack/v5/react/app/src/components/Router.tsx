import React from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import routeCodes from '@/config/routeCodes';
import MyLoadingComponent from './MyLoadingComponent';

const AsyncDemo = Loadable({
  loader: () => import('@/components/Demo'),
  loading: MyLoadingComponent,
});

const App: React.FC = () => {
  const { HOME } = routeCodes;

  return (
    <div>
      <Switch>
        <Route path={HOME} exact={true} component={AsyncDemo} />
        <Redirect to={HOME} />
      </Switch>
    </div>
  );
};
export default withRouter(App);
