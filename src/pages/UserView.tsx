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
  IonRippleEffect
} from '@ionic/react';
import './UserView.css';
import { auth } from '../firebaseConfig';
import person3 from './image/avatars/person3.png';
import { RouteComponentProps } from 'react-router';

interface UserViewProps
  extends RouteComponentProps<{
    uid: string;
  }> {}

const UserView: React.FC<UserViewProps> = ({ match }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
  const [disabled, setDisabled] = useState(false);
const [followText, setFollowText] = useState("Follow");

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
      })
      .then(data => {
        const userData = data[0];
        setName(userData.name);
        setUsername(userData.email);
        setPassword(userData.password);
        setTitle(userData.title);
        setBlurb(userData.blurb);
        setPhoto(userData.photo);
        setBootcamp(userData.bootcamp);
        setPortfolio(userData.projects);
        setFollowers(userData.followersCount);
        setFollowing(userData.followingCount);

            // disable button
    if (auth !== null) {
      if (auth.currentUser !== null) {
         if (userData.followers.includes(auth.currentUser.uid)) {
           setDisabled(true);
           setFollowText("Following");
         }
      }
    }
      });

  }, []);
  let mailto = 'mailto:' + username;

  const followHandler = (e: any) => {
    e.preventDefault();
    const followId: any = match.params.uid;
    if (auth !== null) {
      if (auth.currentUser !== null) {
        const uid = auth.currentUser.uid;

        const data = {
          uid: uid,
          followId: followId
        };

        const params = {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          method: 'PUT'
        };

        fetch(
          'https://us-central1-bingle-backend.cloudfunctions.net/app/api/create/follow',
          params
        ).then(res => {
          let update = followers + 1;
          setFollowers(update);
          setDisabled(true);
          setFollowText("Following");
        });
      }
    }
  };

  return (
    <IonPage>
      <IonButtons className="back-button-container" slot="start">
        <IonBackButton defaultHref="/search" />
      </IonButtons>
      <IonContent>
        <div id="behind-background-box">
          <img className="user-view-image" src={photo} alt="user" />
        </div>
        <div id="user-view-card-box">
          <IonCard className="user-view-card">
            <IonCardHeader>
              <IonCardTitle className="user-name">{name}</IonCardTitle>
              <IonCardSubtitle className="user-title">{title}</IonCardSubtitle>
              <IonCardSubtitle className="user-blurb">{blurb}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="user-bottom-container">
              <IonRow>
                <IonButton
                  className="user-view-button ripple-parent"
                  shape="round"
                  onClick={followHandler}
                  disabled={disabled}
                >
                  {followText}
                  <IonRippleEffect type="unbounded"></IonRippleEffect>
                </IonButton>
              </IonRow>
              <IonGrid id="card-bottom-section-grid">
                <IonRow>
                  <IonCol>
                    <IonRow className="card-bottom-title">Followers</IonRow>
                    <IonRow className="card-bottom-number">{followers}</IonRow>
                  </IonCol>
                  <div className="vertical-line"></div>
                  <IonCol>
                    <IonRow className="card-bottom-title">Following</IonRow>
                    <IonRow className="card-bottom-number">{following}</IonRow>
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
                href={github}
              >
                GITHUB
                <IonRippleEffect></IonRippleEffect>
              </IonButton>
            </IonRow>
            <IonRow className="project-section-img-row">
              {portfolio.map((project, i) => {
                return (
                  <IonCol size="6">
                    <img
                      className="project-img"
                      src={project.src}
                      alt="project"
                    />
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </div>
        <IonButton className="contact-button" shape="round" href={mailto}>
          CONTACT
          <IonRippleEffect></IonRippleEffect>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserView;
