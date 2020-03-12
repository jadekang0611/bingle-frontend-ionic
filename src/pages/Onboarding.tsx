import {
  IonContent,
  IonSlides,
  IonSlide,
  IonButton,
  IonIcon
} from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

import React from 'react';
import './Onboarding.css';

// This is an optional parameter set to pass to the swiper instance
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

//TODO: (1) Add corresponding images (2) Add corresponding blurb (3) Make sure the routing is added to the continue button (4) Add routing with a condition to App component that only a user who is signing up for the first time sees this.

const Onboarding: React.FC = () => {
  return (
    <IonContent
      fullscreen
      className="ion-padding onboarding-container"
      scroll-y="false"
    >
      <IonSlides pager={false} options={slideOpts}>
        <IonSlide className="slide">
          <img src="https://via.placeholder.com/250" alt="splash-img" />
          <h2>Become a Bingler</h2>
          <p>
            Welcome! The <b>Bingle app</b> is a judgment free place for
            bootcampers. Tell other binglers about who you are.
          </p>
        </IonSlide>
        <IonSlide className="slide">
          <img src="https://via.placeholder.com/250" alt="splash-img" />
          <h2>Find Binglers</h2>
          <p>
            Get to know other <b>Binglers</b> who previously attended or are
            currently enrolled in your bootcamps or other bootcamps.
          </p>
        </IonSlide>
        <IonSlide className="slide">
          <img src="https://via.placeholder.com/250" alt="splash-img" />
          <h2>Be Binglified</h2>
          <p>
            Simply grow your portfolio, inspire and be inspired by other
            Binglers, and be found by your next employers.
          </p>
        </IonSlide>
        <IonSlide className="slide">
          <img src="https://via.placeholder.com/250" alt="splash-img" />
          <h2>Ready to start?</h2>
          <IonButton fill="clear">Let's Start!</IonButton>
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default Onboarding;
