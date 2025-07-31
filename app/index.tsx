import { Text, View } from "react-native";
import Homescreen from "./homescreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Homescreen/>
    </View>
  );
}
