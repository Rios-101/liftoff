import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Cart() {
  return (
    <View className="flex-1" style={{ backgroundColor: '#242C3B' }}>
      <StatusBar style="light" />
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-white text-2xl font-bold mb-4">Shopping Cart</Text>
        <Text className="text-slate-400 text-center">
          Your cart is empty
        </Text>
      </View>
    </View>
  );
}