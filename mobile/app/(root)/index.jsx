import { Show, useUser } from '@clerk/expo'
import { useClerk } from '@clerk/expo'
import { Link } from 'expo-router'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useTransactions } from '../../hooks/useTransactions'
import { useEffect } from 'react'

export default function Page() {
  const { user } = useUser()
  // const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(user.id)

const {
  transactions,
  summary,
  isLoading,
  loadData,
  deleteTransaction,
} = useTransactions(user?.id)

  useEffect(
    () => {
      loadData()
    }, [loadData]
  )
console.log('userId', user?.id);
  console.log("transactions:", transactions)
   console.log("summary:", summary)
  const { signOut } = useClerk()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Show when="signed-out">
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </Show>
      <Show when="signed-in">
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Text>Balance: {summary.balance}</Text>
        <Text>Income: {summary.income}</Text>
        <Text>Expenses: {summary.expenses}</Text>
        <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
      </Show>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3da40a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})