import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00adf5',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00adf5',
  },
  button: {
    backgroundColor: '#00adf5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    marginLeft: 10,
  },
  appointmentList: {
    flex: 1,
  },
  appointmentItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#00adf5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#F44336',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerSelectStyles: {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#00adf5',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
      backgroundColor: 'white',
      marginBottom: 10,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: '#00adf5',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30,
      backgroundColor: 'white',
      marginBottom: 10,
    },
    iconContainer: {
      top: 10,
      right: 12,
    },
  },
});

export default styles;
