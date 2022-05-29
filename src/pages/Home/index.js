import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'Conta de luz',
    value: '300,90',
    date: '22/09/2022',
    type: 0 // 0 = despesas, 1 = entradas
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '2.500,90',
    date: '14/09/2022',
    type: 1 // 0 = despesas, 1 = entradas
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.500,90',
    date: '17/09/2022',
    type: 1 // 0 = despesas, 1 = entradas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Kaio Rodrigo" />

      <Balance saldo="5.320,80" gastos="-435,90" />

      <Actions />

      <Text style={styles.title}> Ultimas movimentações </Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})
