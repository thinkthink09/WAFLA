import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";

import "./global.css";

export default function Index() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/static", {
          method: "POST",
        });
        // const response = await fetch("/api/ai", {
        //   method: "POST",
        //   body: JSON.stringify({ prompt: "Generate 10 different workouts for me" }),
        // });

        const json = await response.json();

        console.log("Response from API:", json);
        setData(json.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View className="flex flex-column bg-gray-900">
      <View className="flex-1 flex-colum items-center justify-center">
        <FlatList
          className="w-full"
          data={data}
          renderItem={({ item }) => (
            <View className="w-full p-4 border-b border-gray-700">
              <Text className="text-lg font-bold text-white">{item.title}</Text>
              <Text className="text-sm text-gray-400">
                {item.amount} / {item.amount}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.date}
          ListHeaderComponent={() => (
            <View className="w-full p-4 border-b border-gray-700">
              <Text className="text-2xl font-bold text-white">Latest transactions</Text>
            </View>
          )}
          stickyHeaderIndices={[0]}
        />
      </View>
      <View className="flex flex-row w-full p-4 bg-gray-800">
        <Link className="flex-1 text-center underline text-white" href="/about" asChild>
          <Text className="w-32 self-center">Go to About screen</Text>
        </Link>
        <Link className="flex-1 text-center underline text-white" href="/workout/new" asChild>
          <Text className="w-32 self-center">Create Workout</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
