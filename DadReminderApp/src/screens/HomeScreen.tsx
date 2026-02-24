import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Reminder = {
  id: string;
  title: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'> & {
  reminders: Reminder[];
  deleteReminder: (id: string) => void;
};

const HomeScreen = ({ navigation, reminders, deleteReminder }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>

      <Button
        title="Add Reminder"
        onPress={() => navigation.navigate('AddReminder')}
      />

      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
            <Button
              title="Delete"
              onPress={() => deleteReminder(item.id)}
            />
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No reminders yet</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
  empty: {
    marginTop: 20,
    textAlign: 'center',
    color: '#999',
  },
});

export default HomeScreen;