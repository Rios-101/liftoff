import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Favorites() {
  return (
    <View className="flex-1" style={{ backgroundColor: '#242C3B' }}>
      <StatusBar style="light" />
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-white text-2xl font-bold mb-4">Favorites</Text>
        <Text className="text-slate-400 text-center">
          Your favorite bikes will appear here
        </Text>
      </View>
    </View>
  );
}