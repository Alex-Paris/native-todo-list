import { Image, Text, View } from 'react-native'

import clipboardImg from '../assets/Clipboard.png'

export default function ListEmpty() {
  return (
    <View className="items-center border-t border-t-gray-400 px-5 py-12">
      <Image source={clipboardImg} alt="Clipboard" />
      <Text className="mt-4 text-center font-inter-black text-sm text-gray-300">
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text className="text-center font-inter-regular text-sm text-gray-300">
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
