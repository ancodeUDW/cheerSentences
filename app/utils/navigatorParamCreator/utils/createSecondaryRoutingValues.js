import * as R from "ramda";
import ConvoScreen from "app/components/ConvoScreen";
import u from "updeep";

const processSecRoute = (baseValues, currentData) => {
    let {route} = currentData;

    let modification = {
        NavigatorConfig: route === DEFAULT ? R.always({initialRouteName: route}): R.identity,
        RouteConfigs: R.assoc(route, {screen: ConvoScreen})
    };

    return u(modification, baseValues);
};

const createSecondaryRoutingValues = data => {
    let baseValues = {RouteConfigs: {}, NavigatorConfig:{} }

    if (data.length > 0){

        return R.reduce(processSecRoute, baseValues)
    }

    return baseValues
};

export default createSecondaryRoutingValues;
