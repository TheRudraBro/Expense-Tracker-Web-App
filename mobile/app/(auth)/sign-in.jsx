import { useSignIn } from '@clerk/expo'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { COLORS } from '../../constants/colors'

export default function Page() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleSubmit = async () => {
    if (!isLoaded) return

    setLoading(true)
    setErrorMessage('')

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      })

      await setActive({
        session: completeSignIn.createdSessionId,
      })

      router.replace('/')
    } catch (err) {
      console.log(JSON.stringify(err, null, 2))

      setErrorMessage(
        err?.errors?.[0]?.message || 'Login failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
      }}
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      extraScrollHeight={40}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/revenue-i1.png')}
          style={styles.illustration}
        />

        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.label}>Email address</Text>

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          placeholderTextColor={COLORS.textLight}
          onChangeText={setEmailAddress}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          placeholderTextColor={COLORS.textLight}
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        {errorMessage ? (
          <Text style={styles.error}>
            {errorMessage}
          </Text>
        ) : null}

        <Pressable
          style={({ pressed }) => [
            styles.button,
            (!emailAddress || !password || loading) &&
              styles.buttonDisabled,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSubmit}
          disabled={!emailAddress || !password || loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Loading...' : 'Continue'}
          </Text>
        </Pressable>

        <View style={styles.linkContainer}>
          <Text>Dont have an account? </Text>

          <Link href="/sign-up">
            <Text>Sign up</Text>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    backgroundColor: COLORS.background,
  },

  illustration: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  title: {
    marginBottom: 8,
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '700',
  },

  label: {
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.text,
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: COLORS.white,
    color: COLORS.text,
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: '600',
  },

  linkContainer: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 12,
    alignItems: 'center',
  },

  error: {
    color: COLORS.expense,
    fontSize: 12,
    marginTop: 4,
  },
})