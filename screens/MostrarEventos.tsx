import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'


const eventos = [
  { id: '1', name: 'Martin Garrix', price: '$90', category: 'Electrónica', stock: 500 },
  { id: '2', name: 'Conejita Bunny', price: '$50', category: 'Trap', stock: 200 },
  { id: '3', name: 'Angel Garanda', price: '$50', category: 'Nacional', stock: 300 },
  { id: '4', name: 'La Brandon', price: '$50', category: 'Pop', stock: 100 },
  { id: '5', name: 'Diego Villacis', price: '$50', category: 'Reggaeton', stock: 200 },
];

export default function MostrarEventos() {

  const renderItem = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.price}</Text>
      <Text style={styles.cell}>{item.category}</Text>
      <Text style={styles.cell}>{item.stock}</Text>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>Nombre</Text>
        <Text style={styles.headerText}>Precio</Text>
        <Text style={styles.headerText}>Categoría</Text>
        <Text style={styles.headerText}>Boletos</Text>
      </View>
      <FlatList
        data={eventos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 5,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    marginStart: 3
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  cell: {
    flex: 1,
    color: 'black',
    marginStart: 3
  },
});