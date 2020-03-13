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
  IonToolbar,
  IonLoading,
  IonRouterLink,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList
} from '@ionic/react';
import './UserView.css';
import {
  arrowBackCircle,
  logOutOutline,
  search,
  starOutline,
  personCircleOutline,
  mailOutline
} from 'ionicons/icons';
import { auth } from '../firebaseConfig';
import { RouteComponentProps } from 'react-router';
import { logoutUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

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
  const [followText, setFollowText] = useState('Follow');
  const [busy, setBusy] = useState<boolean>(false);
  const history = useHistory();
  let mailto = 'mailto:' + username;
  function goToHome() {
    history.push('/search');
  }

  function goToFollows() {
    history.push('/follows');
  }

  function goToEdit() {
    history.push('/myaccount');
  }

  function contact() {
    history.push(mailto);
  }

  useEffect(() => {
    setBusy(true);
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
        setGithub(userData.github);
        setBusy(false);

        // disable button
        if (auth !== null) {
          if (auth.currentUser !== null) {
            if (userData.followers.includes(auth.currentUser.uid)) {
              setDisabled(true);
              setFollowText('Following');
            }
          }
        }
      });
  }, []);

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
          setFollowText('Following');
        });
      }
    }
  };

  return (
    <IonPage>
      <IonToolbar className="tool-bar-style">
        <IonButtons className="back-button-container" slot="start">
          <IonBackButton defaultHref="/search" />
        </IonButtons>
      </IonToolbar>
      <IonLoading message="Loading..." duration={0} isOpen={busy}></IonLoading>
      <IonContent>
        <IonCard className="user-view-card">
          <img className="user-view-image" src={photo} alt="user" width="150" />
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
                    <IonRouterLink href={project.url}>
                      <img
                        className="project-img"
                        src={project.src}
                        alt="project"
                      />
                    </IonRouterLink>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={arrowBackCircle} />
        </IonFabButton>
        <IonFabList side="start">
          <IonFabButton>
            <IonIcon icon={logOutOutline} onClick={logoutUser} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={starOutline} onClick={goToFollows} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={personCircleOutline} onClick={goToEdit} />
          </IonFabButton>
          <IonFabButton href={mailto}>
            <IonIcon icon={mailOutline} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonPage>
  );
};

export default UserView;
