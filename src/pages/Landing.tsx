import React from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonToolbar,
  IonFooter,
  IonTitle,
  IonText,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import './Landing.css';

const Landing: React.FC = () => {
  return (
    <IonPage className="landing-page">
      <IonContent className="landing-page">
        <IonToolbar>
          <IonTitle className="logo">Bingle</IonTitle>
        </IonToolbar>
        <IonGrid>
          <IonRow className="button-container">
            <IonCol>
              <IonButton
                className="landing-button log-in-button"
                expand="block"
              >
                Log In
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                className="landing-button sign-up-button"
                expand="block"
              >
                Sign up
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFooter className="ion-no-border landing-footer">
          <IonToolbar>
            <IonTitle className="footer-title">
              Copyright &copy; 2020 Bingle
            </IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Landing;
