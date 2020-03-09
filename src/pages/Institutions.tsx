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
import './Institutions.css';

// Institution image are imported here

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

const Institutions: React.FC = () => {
  const institutionLogo = [
    appAcademy,
    bloc,
    codingDojo,
    flatIron,
    generalAssembly,
    hackReactor,
    ironHack,
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
        <br></br>
        <IonGrid>
          <IonRow>
            {institutionLogo.map((institution, i) => {
              return (
                <IonCol className="institution-col" key={i}>
                  <input
                    className="institution-img"
                    type="image"
                    src={institution}
                    value={institution}
                    onClick={() => {}}
                    alt="logos"
                    width="120"
                    height="120"
                  />
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Institutions;
