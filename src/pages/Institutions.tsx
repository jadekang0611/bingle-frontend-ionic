import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
  IonButton
} from '@ionic/react';
import './Institutions.css';
import Modal from './Modal';

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
    {
      name: 'appAcademy',
      src: appAcademy
    },
    {
      name: 'bloc',
      src: bloc
    },
    {
      name: 'codingDojo',
      src: codingDojo
    },
    {
      name: 'flatIron',
      src: flatIron
    },
    {
      name: 'generalAssembly',
      src: generalAssembly
    },
    {
      name: 'hackReactor',
      src: hackReactor
    },
    {
      name: 'ironHack',
      src: ironHack
    },
    {
      name: 'lambda',
      src: lambda
    },
    {
      name: 'leWagon',
      src: leWagon
    },
    {
      name: 'udacity',
      src: udacity
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState('');
  const [name, setName] = useState('');

  async function closeModal() {
    await setShowModal(false);
  }

  function openModal(e: any) {
    setName(e.target.name);
    setSrc(e.target.src);
    setShowModal(true);
  }

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
              console.log(institution.name);
              return (
                <IonCol className="institution-col" key={i}>
                  <input
                    className="institution-img"
                    type="image"
                    src={institution.src}
                    name={institution.name}
                    alt="logos"
                    width="120"
                    height="120"
                    onClick={openModal}
                  />
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
        <IonModal isOpen={showModal}>
          <Modal closeAction={closeModal} src={src} name={name}></Modal>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Institutions;
