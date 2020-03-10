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
      name: 'App Academy',
      src: appAcademy,
      url: 'https://www.appacademy.io/',
      mainColor: 'red',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    },
    {
      name: 'bloc',
      src: bloc,
      url: 'https://bloc.io',
      mainColor: 'blue',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    },
    {
      name: 'Coding Dojo',
      src: codingDojo,
      url: 'https://www.codingdojo.com',
      mainColor: '#000',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    },
    {
      name: 'Flatiron School',
      src: flatIron,
      url: 'https://https://flatironschool.com/',
      mainColor: '#00b3e6',
      about: 'To enable the pursuit of a better life through education',
      details:
        'Education should be the best investment you make in your future—and at Flatiron School, we’re committed to helping you learn the skills you need to change yours for the better. Online and on our 12 WeWork campuses across the country and in London, we provide the skills, community, and immersive, outcomes-driven curriculum you need to launch a career in Software Engineering, Data Science, or UX/UI Design.'
    },
    {
      name: 'generalAssembly',
      src: generalAssembly,
      url: 'https://https://generalassemb.ly/',
      mainColor: '#ED201E',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    },
    {
      name: 'hackReactor',
      src: hackReactor,
      url: 'https://https://www.galvanize.com/',
      mainColor: '#DE821C',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    },
    {
      name: 'ironHack',
      src: ironHack,
      url: 'https://ironhack.com',
      mainColor: '#56b4ff',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    },
    {
      name: 'lambda',
      src: lambda,
      url: 'https://lambdaschool.com/',
      mainColor: '#ec3943',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    },
    {
      name: 'leWagon',
      src: leWagon,
      url: 'https://www.lewagon.com/',
      mainColor: '#ED1118',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    },
    {
      name: 'udacity',
      src: udacity,
      url: 'https://www.udacity.com/',
      mainColor: '#52b3e4',
      about:
        'Since App Academy started 6 years ago, graduates have been placed at over 1,000+ tech companies',
      details:
        "Over twelve weeks, you'll learn all the skills needed to begin a career as a web developer. Through hands-on projects, we train you to build web applications with Ruby on Rails, JavaScript, and React/Redux. Prior programming experience isn't required. However, you will need lots of tenacity and a passion for building cool stuff."
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [details, setDetails] = useState('');
  const [mainColor, setMainColor] = useState('');
  const [url, setUrl] = useState('');

  async function closeModal() {
    await setShowModal(false);
  }

  function openModal(e: any) {
    setName(e.target.name);
    setSrc(e.target.src);
    setAbout(e.target.about);
    setUrl(e.target.url);
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
                    about={institution.about}
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
          <Modal
            closeAction={closeModal}
            src={src}
            name={name}
            about={about}
          ></Modal>
          <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Institutions;
