import { useState } from 'react'
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import logoImg from './assets/logo.png'

export default function Header() {
  const [task, setTask] = useState('')

  function handleAddTask() {
    Alert.alert('Atenção', 'Já existe uma tarefa de mesmo nome inserido!')
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
          className="rounded-md bg-blue-dark p-[18] hover:bg-blue"
          onPress={handleAddTask}
        >
          <Text className="text-base text-white">⊕</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
