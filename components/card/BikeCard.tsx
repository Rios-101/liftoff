import { images } from "@/constant";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface BikeCardProps {
  product: {
    id: number;
    name: string;
    subtitle: string;
    price: string;
    discount: string;
    image: any;
    color: string;
    rotation: number;
  };
  index: number;
}

export default function BikeCard({ product, index }: BikeCardProps) {
  const handleProductPress = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <View
      className="w-[48%] mb-6"
      style={{
        marginTop: index % 2 === 1 ? -20 : 0  // Lift up odd-indexed cards (2nd, 4th, 6th...)
      }}
    >
      <TouchableOpacity
        className="relative"
        style={{ height: 250 }}
        onPress={handleProductPress}
      >
        {/* Background Image */}
        <Image
          source={images.bg2}
          className="absolute inset-0 w-full h-full"
          resizeMode="stretch"
        />

        {/* Content Container */}
        <View className="relative p-5 h-full justify-between">
          {/* Top Section */}
          <View>
            {/* Heart Icon */}
            <TouchableOpacity className="absolute top-0 right-0 z-10">
              <Ionicons name="heart-outline" size={22} color="white" />
            </TouchableOpacity>
          </View>

          {/* Middle Section - Product Image */}
          <View className="items-center flex-1 justify-center">
            <Image
              source={product.image}
              style={{ width: 121, height: 89 }}
              resizeMode="contain"
            />
          </View>

          {/* Bottom Section - Product Details */}
          <View>
            <Text className="text-white/60 text-[13px] font-poppins-medium">{product.name}</Text>
            <Text className="text-white font-poppins-bold mt-1">{product.subtitle}</Text>
            <View className="flex-row justify-between items-center mt-1">
              <Text className="text-white/60 text-[13px] font-poppins-medium">{product.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}