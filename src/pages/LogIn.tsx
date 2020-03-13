import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonContent,
  IonItem,
  IonInput,
  IonText,
  IonLabel,
  IonList,
  IonPage,
  IonButtons,
  IonButton,
  IonToolbar,
  IonBackButton,
  IonHeader,
  IonLoading,
  IonListHeader,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { loginUser } from '../firebaseConfig';
import './LogIn.css';
import { toast } from '../toast';


const LogIn: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  // useEffect(() => {
  //   let hide = document.getElementsByTagName('ion-tab-bar');
  //   if (hide !== null) {
  //     for (let i = 0; i < hide.length; i++) {
  //       hide[i].className = 'hide';
  //     }
  //   }
  // });

  async function login() {
    setBusy(true);
    const res: any = await loginUser(username, password);
    if (res) {
      history.replace('/search');
      toast('You are logged in!');
    }
    setBusy(false);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="login-tool-bar toolbar-background">
          <IonButtons className="login-back-button-container" slot="start">
            <IonBackButton className="back-button-icon" defaultHref="/landing" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonLoading
        message="Logging in..."
        duration={0}
        isOpen={busy}
      ></IonLoading>
      <IonContent id="login-screen">
        <h2 className="login-title">Welcome back!</h2>
        <div id="login-container">
          <IonList lines="full" class="ion-no-margin ion-no-padding">
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                required
                placeholder="Enter your email"
                type="email"
                onIonChange={(e: any) => setUsername(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                required
                placeholder="Enter your password"
                type="password"
                value={password}
                onIonChange={(e: any) => setPassword(e.target.value)}
              ></IonInput>
            </IonItem>
          </IonList>
          <div className="ion-padding">
            <IonButton expand="block" onClick={login} class="ion-no-margin">
              Login
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
