import * as R             from 'ramda';
import { createSelector } from 'reselect'

const appState = R.prop('appState');

const adMobCode = createSelector(
    appState,
    R.prop('adMobCode')
);

const adMobTestCode = createSelector(
    appState,
    R.prop('adMobTestCode')
);

export default {
    adMobCode,
    adMobTestCode
}