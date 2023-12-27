import { database } from '../../../FirebaseConfig';
import { get, ref } from 'firebase/database';

export async function fetchDatabase() {
    const dbRef = ref(database);
    try {
      const snapshot = await get(dbRef);
  
      if (snapshot.exists()) {
        const retData = snapshot.val();
        return retData;
      } else {
      
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  