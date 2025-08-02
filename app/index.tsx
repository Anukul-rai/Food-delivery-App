import { SafeAreaView, StatusBar } from "react-native";
import Homescreen from "./homescreen";

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#c9e4af'}}>
      <StatusBar barStyle='light-content'/>
        <Homescreen/>
    </SafeAreaView>
  );
}
