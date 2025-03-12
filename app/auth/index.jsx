import { View, Text, StyleSheet } from "react-native";

const Auth = () => {
  return (
    <View style={styles.container}>
      <Text>Auth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
});

export default Auth;
