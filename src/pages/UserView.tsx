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
import person3 from './image/avatars/person3.png';

const UserView: React.FC = () => {
  const projects = [
    'https://via.placeholder.com/150x120',
    'https://via.placeholder.com/150x120',
    'https://via.placeholder.com/150x120',
    'https://via.placeholder.com/150x120',
    'https://via.placeholder.com/150x120',
    'https://via.placeholder.com/150x120',
    'https://via.placeholder.com/150x120',
    'https://via.placeholder.com/150x120'
  ];
  return (
    <IonPage>
      <IonButtons className="back-button-container" slot="start">
        <IonBackButton defaultHref="/search" />
      </IonButtons>
      <IonContent>
        <div id="behind-background-box">
          <img className="user-view-image" src={person3} alt="user" />
        </div>
        <div id="user-view-card-box">
          <IonCard className="user-view-card">
            <IonCardHeader>
              <IonCardTitle className="user-name">Mariah Carey</IonCardTitle>
              <IonCardSubtitle className="user-title">
                UI/UX Designer
              </IonCardSubtitle>
              <IonCardSubtitle className="user-blurb">
                I became an expert in UI/UX after the GA immersive program!
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="user-bottom-container">
              <IonRow>
                <IonButton
                  className="user-view-button ripple-parent"
                  shape="round"
                >
                  {' '}
                  Follow
                  <IonRippleEffect type="unbounded"></IonRippleEffect>
                </IonButton>
              </IonRow>
              <IonGrid id="card-bottom-section-grid">
                <IonRow>
                  <IonCol>
                    <IonRow className="card-bottom-title">Followers</IonRow>
                    <IonRow className="card-bottom-number">20K</IonRow>
                  </IonCol>
                  <div className="vertical-line"></div>
                  <IonCol>
                    <IonRow className="card-bottom-title">Following</IonRow>
                    <IonRow className="card-bottom-number">5K</IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </div>
        <div id="project-section-box">
          <IonGrid className="project-section-grid">
            <IonRow className="project-section-title-row">
              <h2 className="project-section-title">PROJECTS</h2>
              <IonButton
                className="user-view-button view-all-button"
                shape="round"
                size="default"
              >
                VIEW ALL
                <IonRippleEffect></IonRippleEffect>
              </IonButton>
            </IonRow>
            <IonRow className="project-section-img-row">
              <IonCol size="6">
                {projects.map((project, i) => {
                  return (
                    <img className="project-img" src={project} alt="project" />
                  );
                })}
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <IonButton className="contact-button" shape="round">
          CONTACT
          <IonRippleEffect></IonRippleEffect>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserView;
