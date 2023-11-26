
// Importing necessary modules and components
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';
import { StatusBar } from 'expo-status-bar';

// The main App component
export default function App() {

 // Returning the JSX for the App component
 return (
  <>
    <SafeAreaView style={styles.container} >
      <View>
        {/* Rendering the TodoScreen component */}
        <TodoScreen />
      </View>
      {/* Rendering the StatusBar component */}
    </SafeAreaView>
      <StatusBar style="auto" />
    </>
 );
}

// Defining the styles for the App component
const styles = StyleSheet.create({
 container: {
    flex: 1, 
    marginTop:20,
 }
});
//
//In this code, we have a main `App` component that renders a `SafeAreaView` component. Inside the `SafeAreaView`, we render the `TodoScreen` component and the `StatusBar` component. The `StatusBar` component is used to display the status bar at the top of the screen. The `SafeAreaView` component ensures that the content is rendered within the safe area boundaries of the device.
//
//The `styles` object is empty because we are not using any custom styles in this component. However, it is a good practice to define an empty `styles` object in case we need to add styles in the future..</s>