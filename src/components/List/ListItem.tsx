import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Text, TouchableOpacity } from 'react-native'

export interface Task {
  description: string
  isCompleted: boolean
}

interface ListItemProps {
  task: Task
  onChangeTask: () => void
  onDeleteTask: () => void
}

export default function ListItem({
  task: { description, isCompleted },
  onChangeTask,
  onDeleteTask,
}: ListItemProps) {
  return (
    <TouchableOpacity
      onPress={onChangeTask}
      className={`mb-2 flex-row items-center rounded-lg border bg-gray-500 p-3 pr-2 ${
        !isCompleted ? 'border-gray-400' : 'border-gray-500'
      } `}
    >
      {!isCompleted ? (
        <FontAwesome name="circle-o" size={18} color="#4EA8DE" />
      ) : (
        <FontAwesome name="check-circle" size={18} color="#5E60CE" />
      )}
      <Text
        className={`mx-2 flex-1 font-inter-regular text-sm ${
          !isCompleted ? 'text-gray-100' : 'text-gray-300 line-through'
        }`}
      >
        {description}
      </Text>
      <TouchableOpacity className="p-2" onPress={onDeleteTask}>
        <Ionicons name="trash-outline" size={18} color="#808080" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
