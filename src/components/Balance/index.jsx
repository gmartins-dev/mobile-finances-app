import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Balance({ balance, expenses }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.itemTitle}>Balance</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>£</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.itemTitle}>Expenses</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>£</Text>
          <Text style={styles.expenses}>{expenses}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: '#DADADA',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    marginRight: 6,
    color: '#DADADA',
    fontSize: 22,
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71',
  },
  expenses: {
    fontSize: 22,
    color: '#e74c3c',
  },
});
