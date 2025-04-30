import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";

import "./global.css";

export default function Index() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/workouts");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View className="flex-1 bg-gray-900 items-center justify-center">
      <FlatList
        className="w-full"
        data={data}
        renderItem={({ item }) => (
          <Text className="p-4 border-b border-gray-700 text-white">{item.title}</Text>
        )}
        keyExtractor={(item) => item.date}
        ListHeaderComponent={() => (
          <View className="w-full p-4 border-b border-gray-700">
            <Text className="text-2xl font-bold text-white">Latest transactions</Text>
          </View>
        )}
        stickyHeaderIndices={[0]}
      />
      <Link className="absolute bottom-20 underline text-white" href="/about">
        Go to About screen
      </Link>
      <Link className="absolute bottom-20 underline text-white" href="/workout/new" asChild>
        <Button title="Create Workout" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});
