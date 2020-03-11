import {
  IonContent,
  IonPage,
  IonLabel,
  IonAvatar,
  IonList,
  IonListHeader,
  IonItem
} from '@ionic/react';
import React from 'react';

const Followers = () => {
  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonListHeader>Check your followers</IonListHeader>
          <IonItem></IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Followers;
