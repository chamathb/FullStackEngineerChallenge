import React from 'react';
import Container from '@material-ui/core/Container';
import UserMgt from './pages/UserMgt';
import ReviewMgt from './pages/ReviewMgt';
import Home from './pages/Home';
import BottomNav from './component/BottomNav';
import AddReview from './pages/CreateReview';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [{
  path: "/home",
  exact: true,
  main: () => <Home/>
}, {
  path: "/manage/users",
  main: () => <UserMgt/>
}, {
  path: "/manage/feedback",
  main: () => <ReviewMgt/>
}, {
  path: "/add/review",
  main: () => <AddReview />
}];

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <div className="App">
          <div>

          </div>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}

        </div>
        <BottomNav />
      </Container>
    </Router>
  );
}

export default App;
