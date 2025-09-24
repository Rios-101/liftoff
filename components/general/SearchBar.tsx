import GradientButton from "@/components/general/GradientButton";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClose: () => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  onClose,
  placeholder = "Search bikes..."
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <View className="w-full">
      <LinearGradient
        colors={['#353F54', '#222834']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-2xl p-1"
        style={{
          shadowColor: '#10141C',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <View className="flex-row items-center bg-transparent rounded-2xl px-4 py-3">
          {/* Search Icon */}
          <TouchableOpacity onPress={handleSearch} className="mr-3">
            <Ionicons name="search" size={20} color="#94a3b8" />
          </TouchableOpacity>

          {/* Text Input */}
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={placeholder}
            placeholderTextColor="#64748b"
            className="flex-1 text-white font-poppins-medium text-base"
            style={{ color: '#ffffff' }}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
            autoFocus
          />

          {/* Clear/Close Icons */}
          <View className="flex-row items-center">
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={handleClear} className="mr-3">
                <Ionicons name="close-circle" size={20} color="#64748b" />
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={onClose} className="bg-blue-500 p-2 rounded-xl">
              <Ionicons name="close" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}