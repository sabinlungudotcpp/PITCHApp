import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native'; // Determines which platform is used (Android / iOS)
import HomeScreen from '../screens/HomeScreen'; // Import the Product Overview Screen

const StackNavigator = createStackNavigator({
    HomeScreen: HomeScreen 
}, {
    defaultNavigationOptions: {
        backgroundColor: 'transparent',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '' : 'orange'
        },

        headerTintColor: Platform.OS === 'android' ? 'orange' : 'black'
    }
});

export default createAppContainer(StackNavigator); // Creates an app container out of the product navigator