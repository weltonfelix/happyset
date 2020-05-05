import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Stock from './pages/Stock';
import Product from './pages/Product';
import Orders from './pages/Orders';
import Feedback from './pages/Feedback';
import FeedbackDone from './pages/FeedbackDone';
import CEP from './pages/CEP';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="CEP" component={CEP} />
        <AppStack.Screen name="Stock" component={Stock} />
        <AppStack.Screen name="Product" component={Product} />
        <AppStack.Screen name="Orders" component={Orders} />
        <AppStack.Screen name="Feedback" component={Feedback} />
        <AppStack.Screen name="FeedbackDone" component={FeedbackDone} />

      </AppStack.Navigator>
    </NavigationContainer>
  );
}
