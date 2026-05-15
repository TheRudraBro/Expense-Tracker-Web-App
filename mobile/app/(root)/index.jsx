import { Show, useUser } from '@clerk/expo'
import { useClerk } from '@clerk/expo'
import { Link, useRouter } from 'expo-router'
import { Text, View, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { useTransactions } from '../../hooks/useTransactions'
import { useEffect } from 'react'
import PageLoader from '../../components/PageLoader'
import { Image } from 'react-native'
import { COLORS } from '../../constants/colors'
import { styles } from '../../assets/styles/home.styles'
import { Ionicons } from '@expo/vector-icons'

export default function Page() {
  const { user } = useUser()
  const router = useRouter()
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
 <View style={styles.welcomeContainer}>
<Text style={styles.welcomeText}> 
Welcome,
</Text>
<Text style={styles.usernameText}>
  {/* Email: mrmajumder2@gmail.com so user name will be the part before @ */}
  {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
</Text>

 </View>
</View>



{/* RIGHT */}
<View style={styles.headerRight}>
<TouchableOpacity style={styles.addButton} onPress={() => router.push('/create')}>
<Ionicons name="add" size={20} color="#fff" />
<Text style={styles.addButtonText}>
  Add
</Text>
</TouchableOpacity>
 {/* LOGOUT BUTTON */}
  <TouchableOpacity
    style={styles.logoutButton}
    onPress={() => signOut()}
  >
    <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
  </TouchableOpacity>

</View>



{/* Header close */}

</View>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 60,
//     gap: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: '#3da40a',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   welcomeText: {
// }) 