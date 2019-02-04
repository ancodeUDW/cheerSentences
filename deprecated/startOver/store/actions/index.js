import appStateActions      from './appState/index';           // stores info about adblock and similar
import sentenceStateActions from './sentenceState/index'; // stores info about sentences


export {
    appStateActions as appState,
    sentenceStateActions as sentenceState
}

export default {
    appState:      appStateActions,
    sentenceState: sentenceStateActions
}