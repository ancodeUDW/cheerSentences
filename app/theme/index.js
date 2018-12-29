import React       from 'react';

import faceOpenImg   from './multimedia/images/startScreen/face1.png';
import faceClosedImg from './multimedia/images/startScreen/face2.png';
import logoImg       from './multimedia/images/startScreen/logo.png';
import background    from './multimedia/images/common/background.png';

import candyIntro1   from './multimedia/images/candies/candy.png'
import candyIntro2   from './multimedia/images/candies/candy2.png'

// todo: make all the time in ms!!!
export default {
    ADMOB: {
        /**
         * this is for the advertisement revenue
         */
        advertisement: true, // says if we will use the advertisement feature or not
        BANNER_ID: "ca-app-pub-4506849732662038/8250394180",
        TEST: {
            BANNER_ID:   "ca-app-pub-3940256099942544/6300978111"
        }
    },
    GENERAL: {
        font: "", // imports the font's data. Todo: maybe the font must be executed in another way.
        initialRoute: 'INTRO', // what will be the first scene
    },
    SCENES: {
        // intro page that will appear before loading the rest of the app
        INTRO: {
            // Intro type scene has:
            //  * a mascot image that might do an animation
            //  * maybe the app name
            background: background,
            type: 'INTRO',
            route: 'INTRO',
            waitTime: 3000, // Time we will wait until going to the start page. In seconds.

            mascot: [
                faceOpenImg,
                faceClosedImg
            ], // animation for the login

            mascotAniTime: [
                2000,
                500, // makes the blink
            ],

            // logo: logoImg, // logo (optional)
            nextScene: 'START' // the scene we will jump next
        },

        // this is the start page, in where the user will select which scene he wants to go
        // esentially this is a sentence type page, but will not be placed in the sentence option menu
        START: {
            background: background,
            type: 'START',
            route: 'START',

            mascot: [
                candyIntro1,
                candyIntro2
            ], // animation for the login

            mascotAniTime: [
                2000,
                500, // makes the blink
            ],

            sentence: "Hello! how are you doing?",
            sentenceSource: '',

        },
        // info about the creator of the app
        ABOUT:{
            // About type scene has:
            // list of names and emails that made the app
            Type: 'ABOUT'
        },

        CONFIG:{
            type: 'CONFIG'

        },

        // TYPE "SENTENCES"
        // Sentence type scenes has:
        //  * a mascot who talks - might be animated
        //  * bottom button to go to other sentences. should be an image and could be animated
        //  * the sentence
        //  * the balloon design (might have 2 parts, and might be animated)
        HAPPY: {
            route:        'HAPPY',
            type:           'SENTENCE',
            buttonIcon:     "",
            mascot:         "",
            balloon:        "",
            sentenceList:   "",
        },
        NEUTRAL:{
            route:        'NEUTRAL',
            type:           'SENTENCE',
            buttonIcon:     "",
            mascot:         "",
            balloon:        "",
            sentenceList:   "",
        },
        SAD:{
            route:        'SAD',
            type:           'SENTENCE',
            name:           'sad',
            buttonIcon:     "",
            mascot:         "",
            balloon:        "",
            sentenceList:   "",
        },

    },
};