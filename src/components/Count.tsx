import { Text, View } from 'react-native'

interface CountProps {
  text: string
  textColor: string
  amount: number
}

export default function Count({ text, textColor, amount }: CountProps) {
  return (
    <View className="flex-row gap-2">
      <Text className={`font-inter-black text-sm ${textColor}`}>{text}</Text>
      <View className="rounded-full bg-gray-400 px-2 py-[2] text-sm">
        <Text className="text-gray-200">{amount}</Text>
      </View>
    </View>
  )
}
