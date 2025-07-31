import { SafeAreaView, StatusBar } from "react-native";
import Homescreen from "./homescreen";

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#d5d1d1'}}>
      <StatusBar barStyle='light-content'/>
        <Homescreen/>
    </SafeAreaView>
  );
}
