import React from 'react';
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
import { grid, search, star, person } from 'ionicons/icons';
import Home from './pages/Home';

// My screens are imported here
import Institutions from './pages/Institutions';
import Landing from './pages/Landing';
import SearchScreen from './pages/SearchScreen';
import MyAccount from './pages/MyAccount';

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
import Follow from './pages/Follow';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/landing" component={Landing} exact={true} />
          <Route path="/institutions" component={Institutions} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/follows" component={Follow} />
          <Route path="/myaccount" component={MyAccount} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="institutions" href="/institutions">
            <IonIcon icon={grid} />
            <IonLabel>Institutions</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
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
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
