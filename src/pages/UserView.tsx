import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButtons,
  IonButton,
  IonBackButton,
  IonRippleEffect
} from '@ionic/react';
import React from 'react';
import './UserView.css';

const UserView: React.FC = () => {
  return (
    <IonPage>
      <IonButtons className="back-button-container" slot="start">
        <IonBackButton defaultHref="/landing" />
      </IonButtons>
      <IonContent>
        <div id="behind-background-box">
          <img
            className="user-view-image"
            src="https://via.placeholder.com/200"
            alt="user"
          />
        </div>
        <div id="user-view-card-box">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="user-name">Mariah Carey</IonCardTitle>
              <IonCardSubtitle className="user-name">
                UI/UX Designer
              </IonCardSubtitle>
              <IonCardSubtitle className="user-name">
                I became an expert in UI/UX after the GA immersive program!
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonButton
                  className="user-view-button ion-activatable ripple-parent"
                  shape="round"
                >
                  {' '}
                  Follow
                  <IonRippleEffect type="unbounded"></IonRippleEffect>
                </IonButton>
              </IonRow>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonRow>Followers</IonRow>
                    <IonRow>20K</IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow>Following</IonRow>
                    <IonRow>5K</IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </div>
        <div id="project-section-box">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h2>PROJECTS</h2>
              </IonCol>
              <IonCol>
                <IonButton
                  className="user-view-button ion-activatable ripple-parent"
                  shape="round"
                >
                  VIEW ALL
                  <IonRippleEffect></IonRippleEffect>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src="https://via.placeholder.com/150x120" alt="project" />
              </IonCol>
              <IonCol>
                <img src="https://via.placeholder.com/150x120" alt="project" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src="https://via.placeholder.com/150x120" alt="project" />
              </IonCol>
              <IonCol>
                <img src="https://via.placeholder.com/150x120" alt="project" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src="https://via.placeholder.com/150x120" alt="project" />
              </IonCol>
              <IonCol>
                <img src="https://via.placeholder.com/150x120" alt="project" />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <IonButton className="contact-button" shape="round">
          HIRE
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserView;
