import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import logoPage from '@/component/logoPage';
import MainPage from '@/component/MainPage';
import ContactPage from '@/component/contactPage';
import Header from '@/component/header';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{
          header: () => <Header />, 
        }}
      />
    </Stack.Navigator>
  );
};

const ContactPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactPage"
        component={ContactPage}
        options={{
          header: () => <Header />, 
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="MainPageStack">
      <Tab.Screen
        name="MainPageStack"
        component={MainPageStack}
        options={{ title: 'Main Page' }} 
      />
      <Tab.Screen 
        name="ContactPageStack" 
        component={ContactPageStack}
        options={{ title: 'Contact Page' }} 
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
  
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen
              name="LogoPage"
              component={logoPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="GamePage" 
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
   

  );
};

export default App;
