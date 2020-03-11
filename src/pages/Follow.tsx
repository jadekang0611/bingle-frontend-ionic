import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonAvatar,
  IonList,
  IonListHeader,
  IonItem,
  IonButton,
  IonRow,
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

  const followerHandler = () => {
    setShowFollow(followers);
    console.log(showFollow);
  };

  const followingHandler = () => {
    setShowFollow(following);
  };
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar className="follow-tool-bar-container">
          <IonButton onClick={followerHandler}>
            <IonLabel>Followers</IonLabel>
          </IonButton>
          <IonButton onClick={followingHandler}>
            <IonLabel>Following</IonLabel>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>Check out your followers</IonListHeader>
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
                    <h3>{user.title}</h3>
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
