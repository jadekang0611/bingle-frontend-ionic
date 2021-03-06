import React, { useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonRippleEffect
} from '@ionic/react';
import './Landing.css';

import BingleLogo from './image/BINGLE.png';

const Landing: React.FC = () => {
  // useEffect(() => {
  //   let hide = document.getElementsByTagName('ion-tab-bar');
  //   if (hide !== null) {
  //     for (let i = 0; i < hide.length; i++) {
  //       hide[i].className = 'hide';
  //     }
  //   }
  // });

  return (
    <IonPage className="landing-page">
      <IonContent className="landing-page ">
        <div className="center-items">
          <div className="logo-container">
            <img id="bingle-logo" src={BingleLogo} alt="Bingle" />
          </div>
          <div className="landing-blurb-container">
            <h2>Empowering the bootcamp community</h2>
          </div>
          <IonGrid>
            <IonRow className="button-container">
              <IonCol>
                <IonButton
                  className="landing-button log-in-button"
                  expand="block"
                  href="/login"
                >
                  Log In
                  <IonRippleEffect type="unbounded"></IonRippleEffect>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="landing-button sign-up-button"
                  expand="block"
                  href="/signup"
                >
                  Sign up
                  <IonRippleEffect type="unbounded"></IonRippleEffect>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Landing;
