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
  IonToolbar,
  IonLoading,
  IonRouterLink,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList
} from '@ionic/react';
import {
  arrowBackCircle,
  logOutOutline,
  search,
  starOutline,
  personCircleOutline
} from 'ionicons/icons';
import './ViewMyPage.css';
import person3 from './image/avatars/person3.png';
import { RouteComponentProps } from 'react-router';
import { logoutUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

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
  const [busy, setBusy] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState([
    {
      src: '',
      url: ''
    }
  ]);
  const [following, setFollowing] = useState('');
  const [followers, setFollowers] = useState('');
  const history = useHistory();

  function goToSearch() {
    history.push('/search');
  }

  function goToFollows() {
    history.push('/follows');
  }

  function goToEdit() {
    history.push('/myaccount');
  }

  function signOut() {
    logoutUser();
    history.replace('/');
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
        setBusy(false);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="tool-bar-style">
          <IonButtons className="my-back-button-container" slot="start">
            <IonBackButton defaultHref="/myaccount" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Loading..." duration={0} isOpen={busy}></IonLoading>
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
                    <IonRouterLink href={project.url}>
                      <img
                        className="my-project-img"
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
            <IonIcon icon={logOutOutline} onClick={signOut} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={search} onClick={goToSearch} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={starOutline} onClick={goToFollows} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={personCircleOutline} onClick={goToEdit} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonPage>
  );
};

export default ViewMyPage;
