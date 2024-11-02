import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './home';
import { Provider as PaperProvider } from 'react-native-paper';
import bookForm from './screens/bookForm';
import list3Siries from './screens/List/List3Siries'
import The3Series from './screens/The3Series'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="The3Series">
        <Stack.Screen 
            name="The3Series" 
            component={The3Series} 
            options={{ headerShown: false }} // Hide the header
          />
        <Stack.Screen 
            name="list3Siries" 
            component={list3Siries} 
            options={{ headerShown: false }} // Hide the header
          />
          <Stack.Screen 
            name="home" 
            component={home} 
            options={{ headerShown: false }} // Hide the header
          />
                    <Stack.Screen 
            name="bookForm" 
            component={bookForm} 
            options={{ headerShown: false }} // Hide the header
          />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;