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
  IonBackButton
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
        <div className="behind-background">
          <img
            className="user-view-image"
            src="https://via.placeholder.com/200"
            alt="user"
          />
        </div>
        <IonCard className="user-view-card">
          <IonCardHeader>
            <IonCardTitle>Mariah Carey</IonCardTitle>
            <IonCardSubtitle>UI/UX Designer</IonCardSubtitle>
            <IonCardSubtitle>
              I became an expert in UI/UX after the GA immersive program!
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton>Follow</IonButton>
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
        <IonGrid className="project-section">
          <IonRow>
            <IonCol>
              <h2>PROJECTS</h2>
            </IonCol>
            <IonCol>
              <IonButton>VIEW ALL</IonButton>
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
          <IonButton className="contact-button">HIRE</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default UserView;
