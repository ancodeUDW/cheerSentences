import appStateActions      from './appState';           // stores info about adblock and similar
import sentenceStateActions from './sentenceState'; // stores info about sentences


export {
    appStateActions as appState,
    sentenceStateActions as sentenceState
}

export default {
    appState:      appStateActions,
    sentenceState: sentenceStateActions
}