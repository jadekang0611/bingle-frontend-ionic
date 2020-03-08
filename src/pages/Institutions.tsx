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

import appAcademy from './image/appAcademy.png';
import bloc from './image/bloc.png';
import codingDojo from './image/codingDojo.png';
import flatIron from './image/flatIron.png';
import generalAssembly from './image/generalAssembly.png';
import hackReactor from './image/hackReactor.png';
import ironHack from './image/ironHack.png';
import lambda from './image/lambda.png';
import leWagon from './image/leWagon.png';
import udacity from './image/udacity.png';

const Institutions: React.FC = () => {
  // const institutionLogo = [
  //   appAcademy,
  //   bloc,
  //   codingdojo,
  //   flatiron,
  //   generalAssembly,
  //   hackReactor,
  //   ironhack,
  //   lambda,
  //   leWagon,
  //   udacity
  // ];

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
            <IonCol className="institution-col">
              <img src={appAcademy} alt={appAcademy} width="120" height="120" />
            </IonCol>
            <IonCol className="institution-col">
              <img src={bloc} alt={bloc} width="120" height="120" />
            </IonCol>
          </IonRow>
          <br></br>
          <IonRow>
            <IonCol className="institution-col">
              <img src={codingDojo} alt={codingDojo} width="120" height="120" />
            </IonCol>
            <IonCol className="institution-col">
              <img src={flatIron} alt={flatIron} width="120" height="120" />
            </IonCol>
          </IonRow>
          <br></br>
          <IonRow>
            <IonCol className="institution-col">
              <img
                src={generalAssembly}
                alt={generalAssembly}
                width="120"
                height="120"
              />
            </IonCol>
            <IonCol className="institution-col">
              <img
                src={hackReactor}
                alt={hackReactor}
                width="120"
                height="120"
              />
            </IonCol>
          </IonRow>
          <br></br>
          <IonRow>
            <IonCol className="institution-col">
              <img src={ironHack} alt={ironHack} width="120" height="120" />
            </IonCol>
            <IonCol className="institution-col">
              <img src={lambda} alt={lambda} width="120" height="120" />
            </IonCol>
          </IonRow>
          <br></br>
          <IonRow>
            <IonCol className="institution-col">
              <img src={leWagon} alt={leWagon} width="120" height="120" />
            </IonCol>
            <IonCol className="institution-col">
              <img src={udacity} alt={udacity} width="120" height="120" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Institutions;
