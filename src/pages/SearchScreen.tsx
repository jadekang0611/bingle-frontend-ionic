import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonList,
  IonItem,
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

import { people } from './data/dummy-data';

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

  let count = 0;

  function alternateColors() {
    if (count === 4) {
      count = 1;
    } else {
      count++;
    }
  }

  // const [searchString, setSearchString] = useState();
  // const [searchResults, setSearchResults] = useState();
  // const searchHandler = (event: any) => {
  //   setSearchString(event.target.value);
  // };
  // useEffect(() => {
  //   const results = people.filter(user => {
  //     if (user !== undefined) {
  //       user.title.toLowerCase().includes(searchString);
  //     }
  //   });
  //   setSearchResults(results);
  // }, [searchString]);
  return (
    <IonPage>
      <IonContent>
        <IonSearchbar
          className="searchBar-container"
          // showCancelButton="focus"
          placeholder="Software Engineer"
          autocomplete="on"
          inputmode="text"
          // value={searchString}
          // onChange={searchHandler}
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
        <IonList id="show-users-container">
          {/* TypeScript gave me an error that my object possibly underfined; therefore, I wrapped my whole mapped array with a condition  */}
          {people.map((user, id) => {
            alternateColors();

            if (user !== undefined) {
              return (
                <IonItem
                  key={id}
                  className={`alt-color-${count} search-users-container`}
                  onClick={() => {}}
                >
                  <IonAvatar className="search-image-container" slot="start">
                    <img
                      className="user-image-md"
                      src={process.env.PUBLIC_URL + user.img}
                      alt="avatar"
                    />
                  </IonAvatar>
                  <IonLabel className="user-info-basic">
                    <h2>{user.name}</h2>
                    <div className="spacing"></div>
                    <h3>{user.title}</h3>
                    <div className="spacing"></div>
                    <p>{user.institution}</p>
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

export default SearchScreen;
