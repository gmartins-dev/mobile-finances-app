// @ts-nocheck
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const mockList = [
  {
    id: 1,
    label: 'Cinema Tickets',
    value: '30,67',
    date: '13/09/2022',
    type: 0, //type 0 = expenses
  },
  {
    id: 2,
    label: 'Salary payment',
    value: '3210,55',
    date: '15/09/2022',
    type: 1, //type 1 = entrances?
  },
  {
    id: 3,
    label: 'Bike bought',
    value: '200,67',
    date: '19/09/2022',
    type: 0,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header username="Nome Teste" />
      <Balance balance="10.000,00" expenses="-555,03" />
      <Text style={styles.title}>Last records</Text>
      <Actions />
      <FlatList
        data={mockList}
        style={styles.list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
