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
  IonItem
} from '@ionic/react';
import React, { useState } from 'react';
import { people } from './data/dummy-data';
import {followingPeople} from './data/dummy-data-following'
import './Home.css';

const Follow: React.FC = () => {
  let followers = people;
  let following = followingPeople;
  const [showFollowers, setShowFollowers] = useState();

  const followerHandler = () => {
    // setShowFollowers();
  };
  return (
    <IonPage>
      <IonContent>
        <IonSegment>
          <IonSegment
            onIonChange={e => console.log('Segment selected, e.detail.value')}
          >
            <IonSegmentButton value="followers" onClick={followerHandler}>
              <IonLabel>Followers</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="following">
              <IonLabel>Following</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

export default Follow;
