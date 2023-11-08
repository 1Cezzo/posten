import { getDatabase, ref, push } from 'firebase/database'
import app from './firebase'

const database = getDatabase(app)
const usersRef = ref(database, 'users')

export const saveUserData = async (email, password) => {
  try {
    await push(usersRef, { email, password })
    return 'User data saved successfully'
  } catch (error) {
    console.error('Error saving user data:', error)
    throw new Error('An error occurred while saving user data')
  }
}
