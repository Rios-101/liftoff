import CartItem from "@/components/cart/CartItem";
import GradientButton from "@/components/general/GradientButton";
import SwipeButton from "@/components/general/SwipeButton";
import { images } from "@/constant";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CartItemType {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  image: any;
  quantity: number;
  numericPrice: number;
}

export default function Cart() {
  const { fromProduct } = useLocalSearchParams();
  const [promoCode, setPromoCode] = useState("");
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: 1,
      name: "Road Bike",
      subtitle: "PEUGEOT - LR01",
      price: "$1,999.99",
      image: images.Bicycle1,
      quantity: 1,
      numericPrice: 1999.99,
    },
    {
      id: 2,
      name: "Mountain Bike",
      subtitle: "PILOT - CHROMOLY 520",
      price: "$2,499.99",
      image: images.Bicycle2,
      quantity: 1,
      numericPrice: 2499.99,
    },
    {
      id: 3,
      name: "BMX Bike",
      subtitle: "SMITH - Trade",
      price: "$100",
      image: images.Bicycle,
      quantity: 1,
      numericPrice: 100,
    },
  ]);

  const handleApply = () => {
    console.log("Applying promo code:", promoCode);
    // TODO: Add logic to validate/apply promo code
  };

  const handleIncrement = (id: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleBack = () => {
    if (fromProduct) {
      // Navigate back to the specific product page
      const productId = Array.isArray(fromProduct) ? fromProduct[0] : fromProduct;

      router.push(`/product/${productId}` as any);
    } else {
      // Default back behavior
      router.back();
    }
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    // TODO: Implement checkout navigation
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0);
  const deliveryFee = 0; // Free shipping
  const discount = subtotal * 0.3; // 30% discount
  const total = subtotal - discount + deliveryFee;

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#242C3B' }}>
      <StatusBar style="light" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4">

        <GradientButton onPress={handleBack}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </GradientButton>


        <Text className="text-white text-lg font-poppins-semibold">
          My Shopping Cart
        </Text>

        <View className="w-12" />
      </View>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Cart Items */}
          <View className="pb-6">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))}
          </View>

          {/* Free Shipping Message */}
          <View className="mx-4 mb-6">
            <Text className="text-white/60 text-[15px] font-poppins-medium text-center">
              Your cart qualifies for free shipping
            </Text>
          </View>

          {/* BW20 Code with Apply Button */}
          <View className="mx-4 mb-6">
            <LinearGradient
              colors={['#191E29', '#242C3B']}
              style={{
                borderRadius: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}
            >
              <TextInput
                value={promoCode} // bind state
                onChangeText={setPromoCode} // update state
                placeholder="Enter promo code"
                placeholderTextColor="rgba(255,255,255,0.5)"
                className="flex-1 px-4 py-6 text-white text-sm font-poppins-medium"
                style={{ minHeight: 50 }}
              />

              <TouchableOpacity
                className="bg-blue-500 flex justify-center items-center px-4 py-6 w-[114px] rounded-lg"
                onPress={handleApply}
              >
                <Text className="text-white text-sm font-poppins-medium">Apply</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/* Order Summary */}
          <View className="mx-4 mb-6 space-y-4">
            <View className="flex-row justify-between">
              <Text className="text-gray-400 text-[15px] font-poppins-normal">Subtotal:</Text>
              <Text className="text-gray-300 text-[15px] font-poppins-normal">
                ${subtotal.toFixed(2)}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-400 text-[15px] font-poppins-normal">Delivery Fee:</Text>
              <Text className="text-gray-300 text-[15px] font-poppins-normal">$0</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-400 text-[15px] font-poppins-normal">Discount:</Text>
              <Text className="text-gray-300 text-[15px] font-poppins-normal">-30%</Text>
            </View>

            {/* Separator line - optional, not visible in image but might be there */}

            <View className="flex-row justify-between pt-2">
              <Text className="text-gray-300 text-[16px] font-poppins-semibold">Total:</Text>
              <Text className="text-[#4FC3F7] text-[20px] font-poppins-bold">
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* Checkout Button */}
          <SwipeButton
            onSwipeComplete={() => {
              // Add a small delay for the animation to complete
              setTimeout(() => {
                handleCheckout();
              }, 500);
            }}
          />

          <View style={{ height: 50 }} />
        </ScrollView>


      </KeyboardAvoidingView>



      {/* Bottom Padding for Navigation */}

    </SafeAreaView>
  );
}