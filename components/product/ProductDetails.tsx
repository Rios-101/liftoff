import { NeumorphicTabButton } from "@/components/product/NeumorphicTabButton";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import GradientButton from "../general/GradientButton";

interface ProductDetailsProps {
  productName: string;
  productPrice: string;
  onAddToCart: () => void;
}

const { height } = Dimensions.get('window');

export default function ProductDetails({ productName, productPrice, onAddToCart }: ProductDetailsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'specification'>('description');

  return (
    <LinearGradient
      colors={["#353F54", "#222834"]}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 24,
        paddingTop: 32,
        // paddingBottom: 24,
        marginTop: -18,
        minHeight: height - 340,
      }}
    >
      {/* Tab Navigation */}
      <View className="flex-row items-center justify-around rounded-xl p-1 mb-6">
        <NeumorphicTabButton
          label="Description"
          active={activeTab === "description"}
          onPress={() => setActiveTab("description")}
        />
        <NeumorphicTabButton
          label="Specification"
          active={activeTab === "specification"}
          onPress={() => setActiveTab("specification")}
        />
      </View>

      {/* Tab Content */}
      {activeTab === "description" ? (
        <View>
          <Text className="text-white text-xl font-poppins-bold mb-3">
            PEUGEOT - LR01
          </Text>
          <Text className="text-gray-300 font-poppins-normal text-sm leading-6">
            The LR01 uses the same design as the most iconic bikes from PEUGEOT
            Cycles&apos; 130-year history and combines it with agile geometry, as well as a lugged steel frame and threaded bottom bracket, while retaining a 9.8kg design, this city bike also features a 1x drivetrain options and nimano shimano claris drivetrain.
          </Text>
        </View>
      ) : (
        <View className="space-y-4">
          <SpecRow label="Frame" value="Lugged Steel" />
          <SpecRow label="Weight" value="9.8 kg" />
          <SpecRow label="Drivetrain" value="Shimano Claris 1x8" />
          <SpecRow label="Brakes" value="Mechanical Disc" />
          <SpecRow label="Wheels" value="700c Alloy" />
          <SpecRow label="Tires" value="32c Road" />
        </View>
      )}

      {/* Spacer */}
      <View className="flex-1" />

      {/* Price + Add to Cart */}
      <View className="flex-row bg-primary-bg3 items-center justify-between px-5 py-7 -mx-5 rounded-full mt-6">
        <View>
          <Text className="text-primary-100 text-3xl font-poppins-bold">
            {productPrice}
          </Text>
        </View>


        <GradientButton width={160} height={44} onPress={onAddToCart}>
          <Text className="text-white font-poppins-semibold text-base">
            Add to Cart
          </Text>
        </GradientButton>
      </View>
    </LinearGradient>
  );
}

// Helper component for specification rows
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between py-2">
      <Text className="text-gray-400 font-poppins-normal text-sm">{label}</Text>
      <Text className="text-white font-poppins-medium text-sm">{value}</Text>
    </View>
  );
}