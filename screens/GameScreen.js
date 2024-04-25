import { StyleSheet, Text, View } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Text>Higher or Lower</Text>
      {/* Guess */}
      <View>
        {/* +
        _ */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },
});

export default GameScreen;
