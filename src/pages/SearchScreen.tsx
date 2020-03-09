import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonRow,
  IonGrid,
  IonCol,
  IonAvatar,
  IonSlides,
  IonSlide,
  IonLabel
} from '@ionic/react';
import './SearchScreen.css';
import person1 from './image/avatars/person1.png';
import person2 from './image/avatars/person2.png';
import person3 from './image/avatars/person3.png';
import person4 from './image/avatars/person4.png';
import person5 from './image/avatars/person5.png';
import person6 from './image/avatars/person6.png';
import person7 from './image/avatars/person7.png';
import person8 from './image/avatars/person8.png';
import person9 from './image/avatars/person9.png';
import person10 from './image/avatars/person10.png';
//

const slideOpts = {
  slidesPerView: 4,
  initialSlide: 1,
  speed: 400
};

const SearchScreen: React.FC = () => {
  const avatars = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
    person9,
    person10
  ];

  const avartarBio = [
    {
      image: { person1 },
      name: 'Mariah Carey',
      title: 'UI/UX Designer',
      institution: 'General Assembly'
    }
  ];
  return (
    <IonPage>
      {/* <IonToolbar>
        <IonTitle>Search Screen</IonTitle>
      </IonToolbar> */}
      <IonContent>
        {/* <IonToolbar>
          <IonTitle size="large">Search Screen</IonTitle>
        </IonToolbar> */}
        <IonSearchbar
          className="searchBar-container"
          // showCancelButton="focus"
          placeholder="Software Engineer"
          autocomplete="on"
          inputmode="text"
        ></IonSearchbar>

        <IonSlides options={slideOpts} id="avatar-container">
          {avatars.map((avatar, i) => {
            return (
              <IonSlide className="avatar-slide-single" key={i}>
                <img
                  className="avatar-img"
                  src={avatar}
                  width="200"
                  alt="avatar"
                />
              </IonSlide>
            );
          })}
        </IonSlides>
        <br></br>
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <img src={person1} alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>Mariah Carey</h2>
              <h3>Software Engineer</h3>
              <p>General Assembly</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src={person1} alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>Mariah Carey</h2>
              <h3>Software Engineer</h3>
              <p>General Assembly</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src={person1} alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>Mariah Carey</h2>
              <h3>Software Engineer</h3>
              <p>General Assembly</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SearchScreen;
