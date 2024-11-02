import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Switch } from 'react-native'; // Updated import
import { Picker } from '@react-native-picker/picker';

const TestDriveForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    district: '',
    testDriveModel: '',
    showroom: '',
    contactContent: '',
    consent: false,
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Title *</Text>
      <Picker
        selectedValue={formData.title}
        onValueChange={(itemValue) => handleChange('title', itemValue)}
        required
      >
        <Picker.Item label="Please select ..." value="" />
        <Picker.Item label="Mr" value="Mr" />
        <Picker.Item label="Ms" value="Ms" />
        <Picker.Item label="Mrs" value="Mrs" />
      </Picker>
      <Text>First Name *</Text>
      <TextInput
        style={styles.input}
        value={formData.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
        required
      />
      <Text>Last Name *</Text>
      <TextInput
        style={styles.input}
        value={formData.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
        required
      />
      <Text>Phone *</Text>
      <TextInput
        style={styles.input}
        value={formData.phone}
        onChangeText={(text) => handleChange('phone', text)}
        required
        keyboardType="phone-pad"
      />
      <Text>Email *</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        required
        keyboardType="email-address"
      />
      <Text>City/Province *</Text>
      <Picker
        selectedValue={formData.city}
        onValueChange={(itemValue) => handleChange('city', itemValue)}
        required
      >
        <Picker.Item label="Please select ..." value="" />
        <Picker.Item label="City1" value="City1" />
        <Picker.Item label="City2" value="City2" />
      </Picker>
      <Text>District</Text>
      <TextInput
        style={styles.input}
        value={formData.district}
        onChangeText={(text) => handleChange('district', text)}
      />
      <Text>Test Drive Model *</Text>
      <Picker
        selectedValue={formData.testDriveModel}
        onValueChange={(itemValue) => handleChange('testDriveModel', itemValue)}
        required
      >
        <Picker.Item label="Please select ..." value="" />
        <Picker.Item label="Model1" value="Model1" />
        <Picker.Item label="Model2" value="Model2" />
      </Picker>
      <Text>Preferred Showroom/Dealer *</Text>
      <Picker
        selectedValue={formData.showroom}
        onValueChange={(itemValue) => handleChange('showroom', itemValue)}
        required
      >
        <Picker.Item label="Please select ..." value="" />
        <Picker.Item label="Showroom1" value="Showroom1" />
        <Picker.Item label="Showroom2" value="Showroom2" />
      </Picker>
      <Text>Other Contact Content</Text>
      <TextInput
        style={styles.textArea}
        value={formData.contactContent}
        onChangeText={(text) => handleChange('contactContent', text)}
        multiline
      />
      <View style={styles.switchContainer}>
        <Text>I Agree</Text>
        <Switch
          value={formData.consent}
          onValueChange={(value) => handleChange('consent', value)}
        />
      </View>
      {/* Consent Statements */}
      <Text>1. I am over 18 years old and I have a valid B2 driver’s license.*</Text>
      <Text>2. I hereby agree to allow THACO (and its affiliates and partners)...</Text>
      <Text>3. I also agree to allow THACO (and its affiliates and partners)...</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default TestDriveForm;
