import FeaturedBikeCard from "@/components/general/FeaturedBikeCard";
import GradientButton from "@/components/general/GradientButton";
import { images } from "@/constant";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/poppins';
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const filterOptions = [
    { label: "All", text: "All", isActive: true },
    { label: "bicycle", image: images.iconBike, isActive: false },
    { label: "location", image: images.icon1, isActive: false },
    { label: "mountain", image: images.icon2, isActive: false },
    { label: "Road", image: images.icon3, isActive: false },
  ];

  const bikeProducts = [
    {
      id: 1,
      name: "Road Bike",
      subtitle: "PEUGEOT - LR01",
      price: "$1,999.99",
      discount: "30% Off",
      image: images.Bicycle1,
      color: "#3B82F6",
      rotation: -3,
    },
    {
      id: 2,
      name: "Mountain Bike",
      subtitle: "SMITH - Trade",
      price: "$2,499.99",
      discount: "30% Off",
      image: images.Bicycle2,
      color: "#EF4444",
      rotation: 2,
    },
    {
      id: 3,
      name: "E-Bike",
      subtitle: "TREK - E-Power",
      price: "$3,299.99",
      discount: "25% Off",
      image: images.Bicycle,
      color: "#10B981",
      rotation: -1,
    },
    {
      id: 4,
      name: "BMX Bike",
      subtitle: "MONGOOSE - Stunt",
      price: "$899.99",
      discount: "20% Off",
      image: images.Bicycle,
      color: "#F59E0B",
      rotation: 4,
    },
    {
      id: 5,
      name: "Hybrid Bike",
      subtitle: "SPECIALIZED - City",
      price: "$1,599.99",
      discount: "15% Off",
      image: images.Bicycle,
      color: "#8B5CF6",
      rotation: -2,
    },
    {
      id: 6,
      name: "Gravel Bike",
      subtitle: "CANNONDALE - Adventure",
      price: "$2,199.99",
      discount: "30% Off",
      image: images.Bicycle,
      color: "#06B6D4",
      rotation: 3,
    },
  ];

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#242C3B' }}>
      <ImageBackground
        source={images.bg}
        className="flex-1"
        resizeMode="cover"
        imageStyle={{ transform: [{ translateY: 150 }] }}
      >
        <StatusBar style="light" />
        <ScrollView className="flex-1 px-4 pt-4">
          {/* Header */}
          <View className="flex-row font-poppins-bold justify-between items-center  ">
            <Text className="text-white text-3xl font-bold">Choose Your Bike</Text>
            <GradientButton>
              <Ionicons name="search" size={24} color="white" />
            </GradientButton>
          </View>

          <View className="relative pb-20 my-5">
            {/* Featured Bike Card */}
            <FeaturedBikeCard
              discount="30% Off"
              image={images.Bicycle}
            />

            {/* Filter Chips */}
            <View className="mb-8 absolute bottom-1 w-full">
              <View className="flex-row justify-between" style={{ minHeight: 80 }}>
                {filterOptions.map((option, index) => {
                  // Create wave pattern: low -> mid -> high -> mid -> low
                  const waveOffsets = [48, 36, 24, 12, 0];
                  // const waveOffsets = [0, 12, 24, 36, 48];
                  const verticalOffset = waveOffsets[index] || 0;

                  return (
                    <View
                      key={index}
                      className="flex-1 mx-1"
                      style={{ transform: [{ translateY: verticalOffset }] }}
                    >
                      <GradientButton
                        isActive={option.isActive}
                        className="w-full"
                        gradientClassName="py-3 rounded-2xl h-[50px] w-[50px] items-center justify-center"
                        onPress={() => {
                          console.log('Pressed:', option.label);
                        }}
                      >
                        {option.image && (
                          <Image
                            source={option.image}
                            style={{
                              width: 20,
                              height: 20,
                              tintColor: option.isActive ? "white" : "#94a3b8"
                            }}
                            resizeMode="contain"
                          />
                        )}

                        {option.text && (
                          <Text className={`font-semibold text-center ${option.isActive ? 'text-white' : 'text-slate-300'
                            }`}>
                            {option.text}
                          </Text>
                        )}
                      </GradientButton>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>



          {/* Product Grid */}
          <View className="flex-row flex-wrap justify-between">
            {bikeProducts.map((product, index) => (
              <View
                key={product.id}
                className="w-[48%] mb-6"
                style={{
                  marginTop: index % 2 === 1 ? -20 : 0  // Lift up odd-indexed cards (2nd, 4th, 6th...)
                }}
              >
                <TouchableOpacity
                  className="relative"
                  style={{ height: 250 }}
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
                      {/* Discount Badge */}


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
            ))}
          </View>

          {/* Bottom Padding for Navigation */}
          <View style={{ height: 104 }} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
