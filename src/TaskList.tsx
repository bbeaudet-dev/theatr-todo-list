import { View, Text } from "react-native";
import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const taskItems = [
    { id: "1", content: "Task 1", isCompleted: false, dateCreated: Date.now(), dateCompleted: [] },
    { id: "2", content: "Task 2", isCompleted: false, dateCreated: Date.now(), dateCompleted: [] },
    { id: "3", content: "Task 3", isCompleted: false, dateCreated: Date.now(), dateCompleted: [] },
  ];

  return (  
    <View>
      {taskItems.map((task) => (
        <TaskItem key={task.id} id={task.id} content={task.content} isCompleted={task.isCompleted} dateCreated={task.dateCreated} dateCompleted={task.dateCompleted} />
      ))}
    </View>
  );
}