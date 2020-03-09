import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonItem,
  IonInput,
  IonText,
  IonLabel,
  IonList,
  IonHeader,
  IonPage,
  IonTitle,
  IonButton,
  IonToolbar
} from '@ionic/react';
import { loginUser } from '../firebaseConfig';
import './LogIn.css';
import { toast } from '../toast';

const LogIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    console.log('hit');
    console.log('User:' + username);
    const res = await loginUser(username, password);
    if (!res) {
      toast('There was an error logging in.');
    } else {
      toast('You are logged in!');
    }
    console.log(res);
  }
  return (
    <IonPage>
      <IonContent>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonItem>
            <IonLabel position="stacked">
              Email <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              required
              type="email"
              onIonChange={(e: any) => setUsername(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Password <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              required
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
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
