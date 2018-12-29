import React  from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { StyleSheet, Text, View } from 'react-native';
import appStateSelectors from 'app/store/reducer/appState/selectors.js';
// import config from 'app/config';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from 'expo';

const styles = {
    bottomBanner: {
    },

    container: {
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    }
};


const mapStateToProps = (state) => {
    const adMobCode     = appStateSelectors.adMobCode(state);
    const adMobTestCode = appStateSelectors.adMobTestCode(state);

    return {
        adMobCode,
        adMobTestCode,
    }
};

/**
 * creates a banner if we have the suitable information
 */
class AddBanner extends React.Component {
    render() {
        const {adMobCode, adMobTestCode} = this.props;
        console.log("addBanner", {adMobCode, adMobTestCode});

        return R.isNil(adMobCode) ? null :(
            <View style={styles.container}>
                <AdMobBanner
                    style={this.type !== 'relative' ? styles.bottomBanner : {}}
                    bannerSize="smartBannerPortrait"
                    adUnitID={adMobCode}
                    onDidFailToReceiveAdWithError={this.bannerError}
                />
            </View>
        );
    }

    bannerError = (error) => {
        console.log("banner error!", error);
    }
}

export default connect(mapStateToProps)(AddBanner);
