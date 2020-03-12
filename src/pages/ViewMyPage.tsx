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
import './ViewMyPage.css';
import person3 from './image/avatars/person3.png';
import { RouteComponentProps } from 'react-router';

interface ViewMyPageProps
  extends RouteComponentProps<{
    uid: string;
  }> {}

const ViewMyPage: React.FC<ViewMyPageProps> = ({ match }) => {
  const projects = [
    'https://via.placeholder.com/170x120',
    'https://via.placeholder.com/170x120',
    'https://via.placeholder.com/170x120',
    'https://via.placeholder.com/170x120',
    'https://via.placeholder.com/170x120',
    'https://via.placeholder.com/170x120',
    'https://via.placeholder.com/170x120',
    'https://via.placeholder.com/170x120'
  ];
  return (
    <IonPage>
      <IonButtons className="my-back-button-container" slot="start">
        <IonBackButton defaultHref="/myaccount" />
      </IonButtons>
      <IonContent>
        <div id="my-behind-background-box">
          <img className="user-view-image" src={person3} alt="user" />
        </div>
        <div id="my-user-view-card-box">
          <IonCard className="my-user-view-card">
            <IonCardHeader>
              <IonCardTitle className="my-user-name">
                Mariah Carey {match.params.uid}
              </IonCardTitle>
              <IonCardSubtitle className="my-user-title">
                UI/UX Designer
              </IonCardSubtitle>
              <IonCardSubtitle className="my-user-blurb">
                I became an expert in UI/UX after the GA immersive program!
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="my-user-bottom-container">
              <IonRow>
                <IonButton
                  className="my-user-view-button ripple-parent"
                  shape="round"
                  disabled
                >
                  {' '}
                  Follow
                  <IonRippleEffect type="unbounded"></IonRippleEffect>
                </IonButton>
              </IonRow>
              <IonGrid id="my-card-bottom-section-grid">
                <IonRow>
                  <IonCol>
                    <IonRow className="my-card-bottom-title">Followers</IonRow>
                    <IonRow className="my-card-bottom-number">20K</IonRow>
                  </IonCol>
                  <div className="my-vertical-line"></div>
                  <IonCol>
                    <IonRow className="my-card-bottom-title">Following</IonRow>
                    <IonRow className="my-card-bottom-number">5K</IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </div>
        <div id="my-project-section-box">
          <IonGrid className="my-project-section-grid">
            <IonRow className="my-project-section-title-row">
              <h2 className="my-project-section-title">PROJECTS</h2>
              <IonButton
                className="my-user-view-button view-all-button"
                shape="round"
                size="default"
              >
                GITHUB
                <IonRippleEffect></IonRippleEffect>
              </IonButton>
            </IonRow>
            <IonRow className="my-project-section-img-row">
              {projects.map((project, i) => {
                return (
                  <IonCol size="6">
                    <img
                      className="my-project-img"
                      src={project}
                      alt="project"
                    />
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </div>
        <IonButton className="my-contact-button" shape="round" disabled>
          CONTACT
          <IonRippleEffect></IonRippleEffect>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ViewMyPage;
