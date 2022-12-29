// @ts-nocheck
import { StyleSheet, Text, View } from 'react-native';

import Balance from '../../components/Balance';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header username="Nome Teste" />
      <Balance balance="10.000,00" expenses="-555,03"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
