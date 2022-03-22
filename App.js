import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Report from './screens/Report';
import FeatureSuggestion from './screens/Feature';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Faq" component={Home} />
        <Stack.Screen name="Report" options={{ title: 'Report an issue' }} component={Report} />
        <Stack.Screen name="Feature" options={{ title: 'Suggest a feature' }} component={FeatureSuggestion} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
