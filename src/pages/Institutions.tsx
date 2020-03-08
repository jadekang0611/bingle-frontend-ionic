import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

// Institution image are imported here

import appAcademy from './image/appAcademy.png';
import bloc from './image/bloc.png';
import codingdojo from './image/codingdojo.png';
import flatiron from './image/flatiron.png';
import generalAssembly from './image/generalAssembly.png';
import hackReactor from './image/hackReactor.png';
import ironhack from './image/ironhack.png';
import lambda from './image/lambda.png';
import leWagon from './image/leWagon.png';
import udacity from './image/udacity.png';

const Institutions: React.FC = () => {
  const institutionLogo = [
    appAcademy,
    bloc,
    codingdojo,
    flatiron,
    generalAssembly,
    hackReactor,
    ironhack,
    lambda,
    leWagon,
    udacity
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Institutions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Institutions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow
            {...institutionLogo.map(institution => {
              return (
                <IonCol size="6">
                  <input
                    type="image"
                    src={institution}
                    value={institution}
                    width="150"
                    height="150"
                    alt="institution"
                  />
                </IonCol>
              );
            })}
          ></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Institutions;
