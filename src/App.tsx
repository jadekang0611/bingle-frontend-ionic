import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { square, grid, search, star, person, home } from 'ionicons/icons';

// My screens are imported here
// import Institutions from './pages/Institutions';
import Landing from './pages/Landing';
import SearchScreen from './pages/SearchScreen';
import MyAccount from './pages/MyAccount';
import Follow from './pages/Follow';
import Onboarding from './pages/Onboarding';
import Signup from './pages/Signup';
import LogIn from './pages/LogIn';
import UserView from './pages/UserView';
import ViewMyPage from './pages/ViewMyPage';
import ProtectedRoute from './components/ProtectedRoute';
import { auth } from './firebaseConfig';

import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(authenticated => {
      authenticated ? setAuthenticated(true) : setAuthenticated(false);
    });
  });
  console.log(authenticated);
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonTabs> */}
        <IonRouterOutlet>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={Signup} />
          <Route path="/onboarding" component={Onboarding} />
          <Route path="/landing" component={Landing} exact={true} />
          {/* <Route path="/institutions" component={Institutions} /> */}
          <Route path="/search" component={SearchScreen} />
          <Route path="/follows" component={Follow} />
          <Route path="/myaccount" component={MyAccount} exact={true} />
          <Route path="/user/:uid" component={UserView} />
          <Route path="/myaccount/:uid" component={ViewMyPage} />
          <Route exact path="/" render={() => <Redirect to="/landing" />} />
        </IonRouterOutlet>
        {/* <IonTabBar slot="bottom" translucent={true}>
            <IonTabButton tab="landing" href="/landing">
              <IonIcon icon={home} />
              <IonLabel>Landing</IonLabel>
            </IonTabButton> */}

        {/* <IonTabButton tab="splash" href="/signup/onboarding">
              <IonIcon icon={square} />
              <IonLabel>Onboarding</IonLabel>
            </IonTabButton> */}
        {/* <IonTabButton tab="institutions" href="/institutions">
            <IonIcon icon={grid} />
            <IonLabel>Institutions</IonLabel>
          </IonTabButton> */}
        {/* <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="follows" href="/follows">
              <IonIcon icon={star} />
              <IonLabel>Follow</IonLabel>
            </IonTabButton>
            <IonTabButton tab="myaccount" href="/myaccount">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs> */}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
