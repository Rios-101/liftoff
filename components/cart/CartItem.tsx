import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    subtitle: string;
    price: string;
    image: any;
    quantity: number;
  };
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

export default function CartItem({ item, onIncrement, onDecrement }: CartItemProps) {
  return (

    <View className="flex-row p-4 mb-3 mx-3  items-center" style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgba(255,255,255,0.5)' }}>
      {/* Bike Image */}
      <LinearGradient
        colors={['#363E51', '#4C5770']}
        start={{ x: 0.85, y: 0 }}   // approximate 322.57deg
        end={{ x: 0.15, y: 1 }}
        style={{ borderRadius: 20 }}
        className="w-[100px] h-[90px] rounded-3xl mr-4 items-center justify-center"
      >
        <Image
          source={item.image}
          style={{ width: 60, height: 45 }}
          resizeMode="contain"
        />
      </LinearGradient>


      {/* Item Details */}
      <View className="flex-1 flex-col justify-between  h-[80px]">
        <Text className="text-white font-poppins-semibold text-base ">
          {item.subtitle}
        </Text>
        <Text className="text-blue-400 font-poppins-bold text-lg">
          {item.price}
        </Text>
      </View>

      {/* Quantity Controls */}
      <View className=" flex-col justify-end h-[80px]">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => onDecrement(item.id)}
            className="w-8 h-8 bg-[#353F54] rounded-lg items-center justify-center"
          >
            <Ionicons name="remove" size={16} color="white" />
          </TouchableOpacity>

          <Text className="text-white font-poppins-medium text-base mx-3 min-w-[20px] text-center">
            {item.quantity}
          </Text>

          <TouchableOpacity
            onPress={() => onIncrement(item.id)}
            className="w-8 h-8 bg-blue-500 rounded-lg items-center justify-center"
          >
            <Ionicons name="add" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}