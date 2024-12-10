import { doc, collection, getDocs, query, where, setDoc } from "firebase/firestore";
import { auth, db } from './config';
import { signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth";

const validGrades = Array.from({ length: 6 }, (_, i) => `Grade-${i + 7}`);
function generateRandomPassword() {
  const length = 6;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for (let i = 0; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}

export const formValidation = {
  async register(email: string, lrn: string, fullName: string, grade: string) {
    console.log(email);
    try {
      // Reference to the 'students' subcollection within the specified grade
      const studentsCollection = collection(db, 'users', grade, 'students');
      const q = query(studentsCollection, where('lrn', '==', lrn.trim().toLowerCase()));
      const result = await getDocs(q);

      if (!result.empty) {
        throw new Error('LRN already exists in Firestore document.');
      }

      // Create a new user with email and a generated password
      const userCredential = await createUserWithEmailAndPassword(auth, email, generateRandomPassword());
      const user = userCredential.user.uid;

      // Add a new document with the user's UID as the document ID
      await setDoc(doc(db, 'users', grade, 'students', user), {
        email,
        lrn: lrn.trim().toLowerCase(),
        fullName,
        grade,
        role: 'student',
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      console.log(error);
    }
  },

  async login(lrn: string, password: string) {
    try {
      for (const grade of validGrades) {
        console.log(`Checking in ${grade}`);

        const findLrn = collection(db, 'users', grade, 'students');
        const q = query(findLrn, where('lrn', '==', lrn.trim().toLowerCase()));
        const result = await getDocs(q);

        if (result.empty) {
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

  async sendEmailReset(lrn: string) {
    try {
      for (const grade of validGrades) {
        console.log(`Checking in ${grade}`);

        const findLrn = collection(db, 'users', grade, 'students');
        const q = query(findLrn, where('lrn', '==', lrn.trim().toLowerCase()));
        const result = await getDocs(q);

        if (result.empty) {
          continue;
        }
        const userDoc = result.docs[0].data();
        if (!userDoc.email) {
          throw new Error("Email not found in Firestore document.");
        }
        await sendPasswordResetEmail(auth, userDoc.email);
        return;
      }
      throw new Error("LRN not found in any grade.");
    } catch (error) {
      console.error("Email reset failed:", error);
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