import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
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
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const UserView: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/landing" />
      </IonButtons>
      <IonContent>
        <IonCard>
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
        <IonGrid>
          <IonRow>
            <IonCol>
              <h2>PROJECTS</h2>
            </IonCol>
            <IonCol>
              <IonButton>VIEW ALL</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
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
      </IonContent>
    </IonPage>
  );
};

export default UserView;
