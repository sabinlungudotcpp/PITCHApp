import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const HomeNavigator = createStackNavigator({
    Home: HomeScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'orange'
        }
    }
});

export default createAppContainer(HomeNavigator); // Creates an app container out of the product navigator