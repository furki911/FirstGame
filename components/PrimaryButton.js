import { Pressable, View, Text, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  const { children } = props;
  const pressHandler = () => {
    console.log("Pressed");
  };
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#4e0329",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 4,
    shadowColor: "black",
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default PrimaryButton;
