import GradientButton from "@/components/general/GradientButton";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface ProductHeaderProps {
  title: string;
  onBackPress: () => void;
}

export default function ProductHeader({ title, onBackPress }: ProductHeaderProps) {
  return (
    <View className="flex-row justify-between items-center px-4 pt-2">
      <GradientButton onPress={onBackPress}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </GradientButton>
      <Text className="text-white text-lg font-poppins-semibold">
        {title}
      </Text>
      <View className="size-12" />
    </View>
  );
}