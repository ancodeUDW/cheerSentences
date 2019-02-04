

const APP_STATE_INITIAL_STATE = {
    adMobCode: 'nothing',
    adMobTestCode: 'to check', // todo: optional?
    useAdvertisement: true, // todo: optional?
};


const SENTENCE_STATE_INITIAL_STATE = {
    mascots:         {},
    mascotTimes:     {},
    balloons:        {},
    sentenceSources: {},
    titles:          {},
    buttons:         {},
    backgrounds:     {},
    sentencesById:   [], // the id will be used in the route
};

export default {
    APP_STATE: {
        SET_ADMOB_CODE:         'SET_ADMOB_CODE',
        SET_ADMOB_CODE_TEST:    'SET_ADMOB_CODE_TEST',
        SET_USE_ADMOB: 'SET_USE_ADMOB',
        INITIAL_STATE: APP_STATE_INITIAL_STATE,
    },
    SENTENCE_STATE: {
        ADD_SENTENCE:         'ADD_SENTENCE',
        REMOVE_SENTENCE:      'REMOVE_SENTENCE',

        // SET_TITLES:           'SET_TITLES',
        // SET_SENTENCES_BY_ID:  'SET_SENTENCES_BY_ID',  // the list of sentences ids
        // SET_MASCOTS:          'SET_MASCOTS',      // by id, the mascot list we will use - for animation
        // SET_MASCOT_TIMES:     'SET_MASCOT_TIMES', // by id, the mascot time to animate
        // SET_SOURCES:          'SET_SOURCES',  // by ids, the source of the sentences
        // SET_BALLOONS:         'SET_BALLOONS', // by ids, the balloon type we will use
        // SET_BUTTONS:          'SET_BUTTONS', // by ids, the button images (list) // used for the bottom navigate button zone
        //
        // ADD_TITLES:           'ADD_TITLES',
        // ADD_SENTENCES_BY_ID:  'ADD_SENTENCES_BY_ID',  // the list of sentences ids
        // ADD_MASCOTS:          'ADD_MASCOTS',      // by id, the mascot list we will use - for animation
        // ADD_MASCOT_TIMES:     'ADD_MASCOT_TIMES', // by id, the mascot time to animate
        // ADD_SOURCES:          'ADD_SOURCES',  // by ids, the source of the sentences
        // ADD_BALLOONS:         'ADD_BALLOONS', // by ids, the balloon type we will use
        // ADD_BUTTONS:          'ADD_BUTTONS', // by ids, the button images (list) // used for the bottom navigate button zone
        //
        // DEL_TITLES:           'DEL_TITLES',
        // DEL_SENTENCES_BY_ID:  'DEL_SENTENCES_BY_ID',  // the list of sentences ids
        // DEL_MASCOTS:          'DEL_MASCOTS',      // by id, the mascot list we will use - for animation
        // DEL_MASCOT_TIMES:     'DEL_MASCOT_TIMES', // by id, the mascot time to animate
        // DEL_SOURCES:          'DEL_SOURCES',  // by ids, the source of the sentences
        // DEL_BALLOONS:         'DEL_BALLOONS', // by ids, the balloon type we will use
        // DEL_BUTTONS:          'DEL_BUTTONS', // by ids, the button images (list) // used for the bottom navigate button zone

        INITIAL_STATE:       SENTENCE_STATE_INITIAL_STATE
    }
}