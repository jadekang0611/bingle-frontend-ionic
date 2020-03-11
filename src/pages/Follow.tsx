import {
  IonContent,
  IonPage,
  IonLabel,
  IonAvatar,
  IonList,
  IonListHeader,
  IonItem,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonChip
} from '@ionic/react';
import React, { useState } from 'react';
import { people } from './data/dummy-data';
import { followingPeople } from './data/dummy-data-following';
import './Follow.css';

const Follow: React.FC = () => {
  let followers = people;
  let following = followingPeople;
  const [showFollow, setShowFollow] = useState(followers);
  const [who, setWho] = useState('Check out your followers');

  const followerHandler = () => {
    setShowFollow(followers);
    setWho('Check out your followers');
  };

  const followingHandler = () => {
    setShowFollow(following);
    setWho('See who you are following');
  };
  return (
    <IonPage>
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
              return (
                <IonItem key={id}>
                  <IonAvatar slot="start">
                    <img src={user.img} alt={user.name} />
                  </IonAvatar>
                  <IonLabel>
                    <IonRow className="follower-following-name-institution-row">
                      <h2>{user.name}</h2>
                      <IonChip className="institution-chip">
                        <IonLabel>
                          <h3>{user.institution}</h3>
                        </IonLabel>
                        <IonAvatar>
                          <img
                            src={user.institutionLogo}
                            alt={user.institution}
                          ></img>
                        </IonAvatar>
                      </IonChip>
                    </IonRow>
                    <h3 className="follow-title">{user.title}</h3>
                  </IonLabel>
                </IonItem>
              );
            }
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Follow;
