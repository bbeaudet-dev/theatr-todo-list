import { View, Text } from "react-native";
import React from "react";
import { Task } from "./types";

export default function TaskItem({ content, isCompleted, dateCreated, dateCompleted }: Task) {
  return (  
    <View>
      <Text>{content}</Text>
      <Text>{isCompleted ? "Completed" : "Not Completed"}</Text>
      <Text>{dateCreated}</Text>
      <Text>{dateCompleted}</Text>
    </View>
  );
}