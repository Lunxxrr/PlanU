import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar } from 'react-native-calendars';
import PushNotification from 'react-native-push-notification';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const PlanUApp = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    id: '',
    title: '',
    date: new Date(),
    recurrence: 'none',
    recurrenceEnd: null,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState('date');
  const [selectedDate, setSelectedDate] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    loadAppointments();
    setupNotifications();
  }, []);

  const setupNotifications = () => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
    });
  };

  // ... (rest of the functions remain the same)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/planu-logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>PlanU</Text>
      </View>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...markedDates,
          [selectedDate]: { selected: true, marked: markedDates[selectedDate]?.marked }
        }}
        theme={{
          todayTextColor: '#00adf5',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          dotColor: '#00adf5',
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Appointment Title"
          value={newAppointment.title}
          onChangeText={(text) => setNewAppointment({ ...newAppointment, title: text })}
        />
        <TouchableOpacity onPress={() => {setShowDatePicker(true); setDatePickerMode('date');}} style={styles.button}>
          <Icon name="date-range" size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Select Date</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setShowDatePicker(true); setDatePickerMode('time');}} style={styles.button}>
          <Icon name="access-time" size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Select Time</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={newAppointment.date}
            mode={datePickerMode}
            display="default"
            onChange={handleDateChange}
          />
        )}
        <RNPickerSelect
          onValueChange={(value) => setNewAppointment({ ...newAppointment, recurrence: value })}
          items={[
            { label: 'No recurrence', value: 'none' },
            { label: 'Daily', value: 'daily' },
            { label: 'Weekly', value: 'weekly' },
            { label: 'Monthly', value: 'monthly' },
          ]}
          style={styles.pickerSelectStyles}
          value={newAppointment.recurrence}
          Icon={() => <Icon name="repeat" size={24} color="gray" />}
        />
        {newAppointment.recurrence !== 'none' && (
          <TouchableOpacity onPress={() => {setShowDatePicker(true); setDatePickerMode('date');}} style={styles.button}>
            <Icon name="event-repeat" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>Select Recurrence End Date</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleAddAppointment} style={styles.button}>
          <Icon name={editMode ? "edit" : "add"} size={20} color="#ffffff" />
          <Text style={styles.buttonText}>{editMode ? 'Update Appointment' : 'Add Appointment'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.appointmentList}>
        {renderAppointments()}
      </ScrollView>
    </View>
  );
};

export default PlanUApp;
