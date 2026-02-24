import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddReminderScreen from '../screens/AddReminderScreen';

export type RootStackParamList = {
  Home: undefined;
  AddReminder: undefined;
};

type Reminder = {
  id: string;
  title: string;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const addReminder = (title: string) => {
  const newReminder = {
    id: Date.now().toString(),
    title,
  };
  setReminders(prev => [...prev, newReminder]);
};

const deleteReminder = (id: string) => {
  setReminders(prev => prev.filter(r => r.id !== id));
};

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {props => (
            <HomeScreen
              {...props}
              reminders={reminders}
              deleteReminder={deleteReminder}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddReminder">
          {props => (
            <AddReminderScreen
              {...props}
              addReminder={addReminder}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;