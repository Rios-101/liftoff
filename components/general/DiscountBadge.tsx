import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

interface DiscountBadgeProps {
  discount: string;
  className?: string;
}

export default function DiscountBadge({
  discount,
  className = "absolute top-3 left-3 z-10"
}: DiscountBadgeProps) {
  return (
    <View className={className}>
      <LinearGradient
        colors={['#FF6B35', '#FF8E53']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="px-3 py-1.5 rounded-full"
        style={{
          shadowColor: '#FF6B35',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <Text className="text-white text-xs font-poppins-bold">{discount}</Text>
      </LinearGradient>
    </View>
  );
}