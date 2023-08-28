import { Alert, FlatList, View } from 'react-native'

import Count from '../components/Count'
import ListEmpty from '../components/List/ListEmpty'
import ListItem, { Task } from '../components/List/ListItem'

interface HomeProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function Home({ tasks, setTasks }: HomeProps) {
  const createdAmount = tasks.reduce((acc) => acc + 1, 0)

  const completedAmount = tasks.reduce((acc, task) => {
    if (task.isCompleted) {
      return acc + 1
    }
    return acc
  }, 0)

  function handleTask(item: Task) {
    setTasks((state) => {
      const index = state.findIndex((i) => i.description === item.description)
      state[index].isCompleted = !state[index].isCompleted
      return [...state]
    })
  }

  function handleDeleteTask(item: Task) {
    Alert.alert('Remover', `Deseja remover a tarefa ${item.description}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((state) =>
            state.filter((task) => task.description !== item.description),
          )
          Alert.alert('Deletado!')
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View className="mx-6 mt-14">
      <View className="flex-row items-center justify-between">
        <Count text="Criadas" textColor="text-blue" amount={createdAmount} />
        <Count
          text="Concluídas"
          textColor="text-purple"
          amount={completedAmount}
        />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <ListItem
            task={item}
            onChangeTask={() => handleTask(item)}
            onDeleteTask={() => handleDeleteTask(item)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty />}
        showsVerticalScrollIndicator={false}
        className="mt-5"
      />
    </View>
  )
}
