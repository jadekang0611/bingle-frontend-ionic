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
  IonLoading
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { people } from './data/dummy-data';
import { followingPeople } from './data/dummy-data-following';
import './Follow.css';

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
      projects: ''
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
      projects: ''
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
      projects: ''
    }
  ]);

  function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => ++value);
  }

  const [busy, setBusy] = useState<boolean>(false);
  const forceUpdate = useForceUpdate();

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
              if (user.bootcamp !== '') {
                return (
                  <IonItem key={id}>
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
                            <img src={user.photo} alt={user.bootcamp}></img>
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
    </IonPage>
  );
};

export default Follow;
