import React, { useState, useEffect } from 'react';
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
  IonRippleEffect,
  IonHeader,
  IonToolbar
} from '@ionic/react';
import './ViewMyPage.css';
import person3 from './image/avatars/person3.png';
import { RouteComponentProps } from 'react-router';

interface ViewMyPageProps
  extends RouteComponentProps<{
    uid: string;
  }> {}

const ViewMyPage: React.FC<ViewMyPageProps> = ({ match }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [bootcamp, setBootcamp] = useState('');
  const [blurb, setBlurb] = useState('');
  const [photo, setPhoto] = useState('');
  const [github, setGithub] = useState('');
  const [portfolio, setPortfolio] = useState([
    {
      src: '',
      url: ''
    }
  ]);
  const [following, setFollowing] = useState('');
  const [followers, setFollowers] = useState('');

  useEffect(() => {
    const uid: any = match.params.uid;

    const params = {
      headers: {
        'Content-Type': 'application/json'
      },

      method: 'GET'
    };
    fetch(
      'https://us-central1-bingle-backend.cloudfunctions.net/app/api/read/user/' +
        uid,
      params
    )
      .then(res => {
        return res.json();
        console.log(res);
      })
      .then(data => {
        const userData = data[0];
        setName(userData.name);
        setTitle(userData.title);
        setBlurb(userData.blurb);
        setPhoto(userData.photo);
        setBootcamp(userData.bootcamp);
        setPortfolio(userData.projects);
        setFollowers(userData.followersCount);
        setFollowing(userData.followingCount);
      });
  }, []);

  return (
    <IonPage>
      <IonToolbar className="tool-bar-style">
        <IonButtons className="my-back-button-container" slot="start">
          <IonBackButton defaultHref="/myaccount" />
        </IonButtons>
      </IonToolbar>
      <IonContent fullscreen>
        <IonCard className="my-user-view-card">
          <img
            className="my-user-view-image"
            src={photo}
            alt="user"
            width="150"
          />

          <IonCardHeader>
            <IonCardTitle className="my-user-name">{name}</IonCardTitle>
            <IonCardSubtitle className="my-user-title">{title}</IonCardSubtitle>
            <IonCardSubtitle className="my-user-blurb">{blurb}</IonCardSubtitle>
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
                  <IonRow className="my-card-bottom-number">{followers}</IonRow>
                </IonCol>
                <div className="my-vertical-line"></div>
                <IonCol>
                  <IonRow className="my-card-bottom-title">Following</IonRow>
                  <IonRow className="my-card-bottom-number">{following}</IonRow>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <div id="my-project-section-box">
          <IonGrid className="my-project-section-grid">
            <IonRow className="my-project-section-title-row">
              <h2 className="my-project-section-title">PROJECTS</h2>
              <IonButton
                className="my-user-view-button view-all-button"
                shape="round"
                size="default"
                href={github}
                disabled
              >
                GITHUB
                <IonRippleEffect></IonRippleEffect>
              </IonButton>
            </IonRow>
            <IonRow className="my-project-section-img-row">
              {portfolio.map((project, i) => {
                return (
                  <IonCol size="6">
                    <img
                      className="my-project-img"
                      src={project.src}
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
