import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import React from 'react';
import Cesta from './src/pages/cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] =  useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });
  if (!fonteCarregada) {
    return(
      <AppLoading/>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#00b6a2'}/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}