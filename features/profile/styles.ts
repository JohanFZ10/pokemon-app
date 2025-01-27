import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      marginTop: 50,
      marginBottom: 30,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    profileAvatarContainer: {
      marginBottom: 20,
    },
    profileAvatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#007bff',
    },
    userInfo: {
      alignItems: 'center',
      marginBottom: 30,
    },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 16,
      color: '#555',
    },
    actions: {
      width: '100%',
    },
    actionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#007bff',
      padding: 15,
      marginVertical: 10,
      borderRadius: 8,
    },
    actionText: {
      color: '#fff',
      marginLeft: 10,
      fontSize: 16,
    },
    logoutButton: {
      backgroundColor: '#dc3545',
    },
  });
  