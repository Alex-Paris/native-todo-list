import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native'

import logoImg from './assets/logo.png'
import { Task } from './List/ListItem'

interface HeaderProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function Header({ tasks, setTasks }: HeaderProps) {
  const [task, setTask] = useState('')

  function handleAddTask() {
    if (tasks.findIndex((i) => i.description === task) > -1) {
      Alert.alert('Atenção', 'Já existe uma tarefa de mesmo nome inserido!')
      return
    }

    setTasks((state) => [
      ...state,
      {
        description: task,
        isCompleted: false,
      },
    ])
    setTask('')
  }

  return (
    <View className="relative h-44 items-center justify-center bg-gray-700">
      <Image source={logoImg} alt="Todo List Logo" />
      <View className="absolute top-[80%] w-full flex-row gap-1 px-6">
        <TextInput
          className="flex-1 rounded-lg border border-gray-700 bg-gray-500 p-4 font-inter-regular text-base text-gray-100 focus:border-purple-dark"
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          keyboardType="default"
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity
          className="items-center justify-center rounded-md bg-blue-dark p-[18] hover:bg-blue"
          onPress={handleAddTask}
        >
          <AntDesign name="pluscircleo" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
