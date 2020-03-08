import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem
} from '@ionic/react';

const SearchScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search Screen</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar
          showCancelButton="focus"
          placeholder="Software Engineer"
          autocomplete="on"
          inputmode="text"
        ></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default SearchScreen;
