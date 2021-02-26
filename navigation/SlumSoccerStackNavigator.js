import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SlumSoccerHome from '../screens/SlumSoccerHome';
import ChildProtectionScreen from '../screens/ChildProtectionScreen';
import IntroductionScreen from '../screens/IntroductionScreen';
import AimsScreen from '../screens/AimsScreen';
import GoodPracticeScreen from '../screens/GoodPracticeScreen';
import GoodPracticeGuidelines from '../screens/GoodPracticeGuidelines';
import PhotographyFilmingScreen from '../screens/PhotographyFilmingScreen';
import PracticesAvoidScreen from '../screens/PracticesAvoidScreen';
import RecruitmentScreen from '../screens/RecruitmentScreen';
import RecruitmentGuidelines from '../screens/guidelines/RecruitmentGuidelines';
import AllegationsScreen from '../screens/AllegationsScreen';

const Stack = createStackNavigator(); // Creates a stack navigator

const SlumSoccerStackNavigator = ({navigation}) => { // Stack Navigation for Slum Soccer
    return <Stack.Navigator>
        <Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>), headerRight: () => (<Button onPress={() => navigation.navigate('Register')} title = "Register"
              color="#fff"/>), headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "Back" component = {SlumSoccerHome}/>

<Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "ChildProtectionScreen" component = {ChildProtectionScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "IntroductionScreen" component = {IntroductionScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "AimsScreen" component = {AimsScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "GoodPracticeScreen" component = {GoodPracticeScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "GoodPracticeGuidelines" component = {GoodPracticeGuidelines}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "PhotographyFilmingScreen" component = {PhotographyFilmingScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "PracticesAvoidScreen" component = {PracticesAvoidScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "RecruitmentScreen" component = {RecruitmentScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "RecruitmentGuidelines" component = {RecruitmentGuidelines}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "AllegationsScreen" component = {AllegationsScreen}/>


    </Stack.Navigator>
    
}

export default SlumSoccerStackNavigator; // Exports the Slum Soccer Stack Navigator