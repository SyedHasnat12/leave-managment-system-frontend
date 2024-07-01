import React, { useEffect, useMemo } from 'react';

// import redux for auth guard
import { useDispatch, useSelector } from 'react-redux';

// import layout
import Layout from 'layout/Layout';

// import routing modules
import RouteIdentifier from 'routing/components/RouteIdentifier';
import { getRoutes } from 'routing/helper';
import routesAndMenuItems from 'routes.js';
import Loading from 'components/loading/Loading';
import { SnackbarProvider } from 'notistack';
import { setCurrentUser } from 'auth/authSlice';
import { API_URL } from 'config';
import axios from 'axios';
import { useHistory , useLocation  } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const { currentUser, isLogin } = useSelector((state) => state.auth);


  const history = useHistory();
  const location = useLocation();

  const getUser = () => {
    let userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`${API_URL}/User/profile/${userId}`).then((res) => {
        const { isSuccess, message, user } = res.data;
        if (isSuccess) {
          user.name = user.firstName +' '+user.lastName
          dispatch(setCurrentUser(user));
          if (location.pathname === '/login' || location.pathname === '/register') {
            history.push('/dashboards/default');
          }
        } else {
          dispatch(setCurrentUser({}));
          history.push('/login');
        }
      }).catch((error) => {
        console.error('Error fetching user profile:', error);
        dispatch(setCurrentUser({}));
        history.push('/login');
      });
    }else {
      history.push('/login');
    }
  };

  useEffect(() => {
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const routes = useMemo(() => getRoutes({ data: routesAndMenuItems, isLogin, userRole: currentUser.role }), [isLogin, currentUser]);
  if (routes) {
    return (
      <SnackbarProvider>
        <Layout>
          <RouteIdentifier routes={routes} fallback={<Loading />} />
        </Layout>
      </SnackbarProvider>
    );
  }
  return <></>;
};

export default App;
