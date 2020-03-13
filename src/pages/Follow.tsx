import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonLabel,
  IonAvatar,
  IonList,
  IonListHeader,
  IonItem,
  IonBackButton,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLoading,
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

import appAcademy from './image/logos/appAcademy.png';
import bloc from './image/logos/bloc.png';
import codingDojo from './image/logos/codingDojo.png';
import flatIron from './image/logos/flatIron.png';
import generalAssembly from './image/logos/generalAssembly.png';
import hackReactor from './image/logos/hackReactor.png';
import ironHack from './image/logos/ironHack.png';
import lambda from './image/logos/lambda.png';
import leWagon from './image/logos/leWagon.png';
import udacity from './image/logos/udacity.png';

import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { people } from './data/dummy-data';
import { followingPeople } from './data/dummy-data-following';
import './Follow.css';
import { logoutUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value => ++value);
}

const Follow: React.FC = () => {
  let followers = people;
  let following = followingPeople;
  const [showFollow, setShowFollow] = useState([
    {
      name: '',
      email: '',
      blurb: '',
      bootcamp: '',
      completion: '',
      title: '',
      followers: '',
      following: '',
      github: '',
      photo: '',
      projects: '',
      uid: ''
    }
  ]);
  const [who, setWho] = useState('Check out your followers');
  let [currentFollowers, setCurrentFollowers] = useState([
    {
      name: '',
      email: '',
      blurb: '',
      bootcamp: '',
      completion: '',
      title: '',
      followers: '',
      following: '',
      github: '',
      photo: '',
      projects: '',
      uid: ''
    }
  ]);

  let [currentFollowing, setCurrentFollowing] = useState([
    {
      name: '',
      email: '',
      blurb: '',
      bootcamp: '',
      completion: '',
      title: '',
      followers: '',
      following: '',
      github: '',
      photo: '',
      projects: '',
      uid: ''
    }
  ]);

  function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => ++value);
  }

  const [busy, setBusy] = useState<boolean>(false);
  const forceUpdate = useForceUpdate();

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
    if (auth !== null) {
      if (auth.currentUser !== null) {
        const uid = auth.currentUser.uid;

        const params = {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'GET'
        };
        fetch(
          'https://us-central1-bingle-backend.cloudfunctions.net/app/api/read/followers/' +
            uid,
          params
        )
          .then(res => {
            return res.json();
          })
          .then(data => {
            for (let i = 0; i < data.length; i++) {
              fetch(
                'https://us-central1-bingle-backend.cloudfunctions.net/app/api/read/user/' +
                  data[i],
                params
              )
                .then(res => {
                  return res.json();
                })
                .then(data => {
                  let newFollowers = currentFollowers;
                  newFollowers.push(data[0]);
                  setCurrentFollowers(newFollowers);
                  setShowFollow(newFollowers);
                  setBusy(false);
                  forceUpdate();
                });
            }
            console.log(currentFollowers);
          });

        // get following
        fetch(
          'https://us-central1-bingle-backend.cloudfunctions.net/app/api/read/following/' +
            uid,
          params
        )
          .then(res => {
            return res.json();
          })
          .then(data => {
            for (let i = 0; i < data.length; i++) {
              fetch(
                'https://us-central1-bingle-backend.cloudfunctions.net/app/api/read/user/' +
                  data[i],
                params
              )
                .then(res => {
                  return res.json();
                })
                .then(data => {
                  let newFollowing = currentFollowing;
                  newFollowing.push(data[0]);
                  setCurrentFollowing(newFollowing);
                });
            }
            console.log(currentFollowing);
          });
      } // user is auth
    }
  }, []);

  const followerHandler = () => {
    setShowFollow(currentFollowers);
    setWho('Check out your followers');
  };

  const followingHandler = () => {
    setShowFollow(currentFollowing);
    setWho('See who you are following');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="follow-tool-bar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/search"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Loading..." duration={0} isOpen={busy}></IonLoading>
      <IonRow className="follow-button-row">
        <IonCol>
          <IonButton
            className="follower-button"
            expand="full"
            onClick={followerHandler}
          >
            <IonLabel>Followers</IonLabel>
          </IonButton>
        </IonCol>
        <div id="follow-vertical-line"></div>
        <IonCol>
          <IonButton
            className="following-button"
            expand="full"
            onClick={followingHandler}
          >
            <IonLabel>Following</IonLabel>
          </IonButton>
        </IonCol>
      </IonRow>

      <IonContent>
        <IonList>
          <IonListHeader className="follow-main-title">{who}</IonListHeader>
          {showFollow.map((user, id) => {
            if (user !== undefined) {
              let link = '/user/' + user.uid;
              if (user.bootcamp !== '') {
                let bootcampSrc = '';
                if (user.bootcamp === 'appAcademy') {
                  bootcampSrc = appAcademy;
                } else if (user.bootcamp === 'bloc') {
                  bootcampSrc = bloc;
                } else if (user.bootcamp === 'Coding Dojo') {
                  bootcampSrc = codingDojo;
                } else if (user.bootcamp === 'Flatiron') {
                  bootcampSrc = flatIron;
                } else if (user.bootcamp === 'General Assembly') {
                  bootcampSrc = generalAssembly;
                } else if (user.bootcamp === 'Hack Reactor') {
                  bootcampSrc = hackReactor;
                } else if (user.bootcamp === 'Iron Hack') {
                  bootcampSrc = ironHack;
                } else if (user.bootcamp === 'Lambda School') {
                  bootcampSrc = lambda;
                } else if (user.bootcamp === 'Le Wagon') {
                  bootcampSrc = leWagon;
                } else if (user.bootcamp === 'Udacity') {
                  bootcampSrc = udacity;
                }
                return (
                  <IonItem routerLink={link} key={id}>
                    <IonAvatar slot="start">
                      <img src={user.photo} alt={user.name} />
                    </IonAvatar>
                    <IonLabel>
                      <IonRow className="follower-following-name-institution-row">
                        <h2>{user.name}</h2>
                        <IonChip className="institution-chip">
                          <IonLabel>
                            <h3>{user.bootcamp}</h3>
                          </IonLabel>
                          <IonAvatar>
                            <img src={bootcampSrc} alt={user.bootcamp}></img>
                          </IonAvatar>
                        </IonChip>
                      </IonRow>
                      <h3 className="follow-title">{user.title}</h3>
                    </IonLabel>
                  </IonItem>
                );
              }
            }
          })}
        </IonList>
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

export default Follow;
