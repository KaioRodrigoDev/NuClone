import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Kaio Rodrigo" />
      <Balance saldo="5.320,80" gastos="-435,90" />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  }
})
