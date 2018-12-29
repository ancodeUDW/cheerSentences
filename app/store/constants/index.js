

const INITIAL_STATE = {
    adMobCode: 'nothing',
    adMobTestCode: 'to check', // todo: optional?
    useAdvertisement: true, // todo: optional?
};

export default {
    APP_STATE: {
        SET_ADMOB_CODE:         'SET_ADMOB_CODE',
        SET_ADMOB_CODE_TEST:    'SET_ADMOB_CODE_TEST',
        SET_USE_ADMOB: 'SET_USE_ADMOB',
        INITIAL_STATE,
    },
    SENTENCE_STATE: {
        SET_TITLE:           'SET_TITLE',
        SET_SENTENCES_BY_ID: 'SET_SENTENCES_BY_ID',  // the list of sentences ids
        SET_MASCOT:          'SET_MASCOT',      // by id, the mascot list we will use - for animation
        SET_MASCOT_TIME:     'SET_MASCOT_TIME', // by id, the mascot time to animate
        SET_SOURCE:          'SET_SOURCE',  // by ids, the source of the sentences
        SET_BALLOON:         'SET_BALLOON', // by ids, the balloon type we will use
        SET_BUTTON:          'SET_BUTTON', // by ids, the button images (list) // used for the bottom navigate button zone

        ADD_TITLE:           'ADD_TITLE',
        ADD_SENTENCES_BY_ID: 'ADD_SENTENCES_BY_ID',  // the list of sentences ids
        ADD_MASCOT:          'ADD_MASCOT',      // by id, the mascot list we will use - for animation
        ADD_MASCOT_TIME:     'ADD_MASCOT_TIME', // by id, the mascot time to animate
        ADD_SOURCE:          'ADD_SOURCE',  // by ids, the source of the sentences
        ADD_BALLOON:         'ADD_BALLOON', // by ids, the balloon type we will use
        ADD_BUTTON:          'ADD_BUTTON', // by ids, the button images (list) // used for the bottom navigate button zone

        DEL_TITLE:           'DEL_TITLE',
        DEL_SENTENCES_BY_ID: 'DEL_SENTENCES_BY_ID',  // the list of sentences ids
        DEL_MASCOT:          'DEL_MASCOT',      // by id, the mascot list we will use - for animation
        DEL_MASCOT_TIME:     'DEL_MASCOT_TIME', // by id, the mascot time to animate
        DEL_SOURCE:          'DEL_SOURCE',  // by ids, the source of the sentences
        DEL_BALLOON:         'DEL_BALLOON', // by ids, the balloon type we will use
        DEL_BUTTON:          'DEL_BUTTON', // by ids, the button images (list) // used for the bottom navigate button zone
    }
}