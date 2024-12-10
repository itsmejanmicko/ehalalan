import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from './config';
import { signInWithEmailAndPassword } from "firebase/auth";

const validGrades = Array.from({ length: 6 }, (_, i) => `grade-${i + 7}`);

export const formValidation = {
  async login(lrn: string, password: string) {
    try {
      for (const grade of validGrades) {
        console.log(`Checking in ${grade}`);

        const findLrn = collection(db, 'users', grade, 'students');
        const q = query(findLrn, where('lrn', '==', lrn.trim().toLowerCase()));
        const result = await getDocs(q);

        if (result.empty) {
          console.warn("LRN not found in grade:", grade);
          continue; 
        }
        const userDoc = result.docs[0].data();
        if (!userDoc.email) {
          throw new Error("Email not found in Firestore document.");
        }
        const userCredential = await signInWithEmailAndPassword(auth, userDoc.email, password);
        return userCredential; 
      }
      throw new Error("LRN not found in any grade.");
    } catch (error) {
      console.error("Login failed:", error);
      throw error; 
    }
  },
  async logout() {
    try {
       await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
};
