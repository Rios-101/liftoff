import { images } from "@/constant";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ImageBackground, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => (
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(36, 44, 59, 0.95)',
            backdropFilter: 'blur(20px)',
          }}>
            <ImageBackground
              source={images.nav}
              style={{ width: '100%', height: '100%', opacity: 0.3 }}
              resizeMode="cover"
            />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          paddingBottom: 20,
          paddingTop: 0,
          height: 84,
          elevation: 0,
          shadowOpacity: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#64748b',
        tabBarShowLabel: false,
        tabBarItemStyle: {
          paddingVertical: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              backgroundColor: focused ? '#3b82f6' : 'transparent',
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 8,
              shadowColor: focused ? '#3b82f6' : 'transparent',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: focused ? 0.3 : 0,
              shadowRadius: 8,
              elevation: focused ? 6 : 0,
            }}>
              <Ionicons
                name="home"
                size={24}
                color={focused ? 'white' : color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="heart"
              size={24}
              color={focused ? 'white' : color}
              style={{
                backgroundColor: focused ? '#3b82f6' : 'transparent',
                padding: focused ? 12 : 0,
                borderRadius: focused ? 16 : 0,
                shadowColor: focused ? '#3b82f6' : 'transparent',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: focused ? 0.3 : 0,
                shadowRadius: 8,
                elevation: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="bag"
              size={24}
              color={focused ? 'white' : color}
              style={{
                backgroundColor: focused ? '#3b82f6' : 'transparent',
                padding: focused ? 12 : 0,
                borderRadius: focused ? 16 : 0,
                shadowColor: focused ? '#3b82f6' : 'transparent',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: focused ? 0.3 : 0,
                shadowRadius: 8,
                elevation: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? 'white' : color}
              style={{
                backgroundColor: focused ? '#3b82f6' : 'transparent',
                padding: focused ? 12 : 0,
                borderRadius: focused ? 16 : 0,
                shadowColor: focused ? '#3b82f6' : 'transparent',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: focused ? 0.3 : 0,
                shadowRadius: 8,
                elevation: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="menu"
              size={24}
              color={focused ? 'white' : color}
              style={{
                backgroundColor: focused ? '#3b82f6' : 'transparent',
                padding: focused ? 12 : 0,
                borderRadius: focused ? 16 : 0,
                shadowColor: focused ? '#3b82f6' : 'transparent',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: focused ? 0.3 : 0,
                shadowRadius: 8,
                elevation: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}