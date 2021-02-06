import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen'; // Imports the home screen
import HomeStack from '../navigation/StackNavigator';

const RootDrawerNavigator = createDrawerNavigator({
    HomeScreen: {
        screen: HomeStack
    },

    RegisterScreen: {
        screen: RegisterScreen
    }
});

export default createAppContainer(RootDrawerNavigator);