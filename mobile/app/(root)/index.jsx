import { Show, useUser } from '@clerk/expo'
import { useClerk } from '@clerk/expo'
import { Link } from 'expo-router'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useTransactions } from '../../hooks/useTransactions'
import { useEffect } from 'react'
import PageLoader from '../../components/PageLoader'
import { Image } from 'react-native'

export default function Page() {
  const { user } = useUser()
  // const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(user.id)
  const { signOut } = useClerk()
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






// console.log('userId', user?.id);
//   console.log("transactions:", transactions)
//    console.log("summary:", summary)

if (isLoading) return <PageLoader />
  return (
    <View style={styles.container}>
      <View style= {styles.content}>
<View style={styles.header}>

{/* LEFT */}
<View style={styles.headerLeft}>
<Image 
source={require('../../assets/images/logo.png')} 
style={styles.headerLogo}
resizeMode='contain'
 />
</View>



{/* RIGHT */}

</View>
      </View>
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