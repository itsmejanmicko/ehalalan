import {initializeApp} from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    updatePassword,
  } from 'firebase/auth';
  import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
  const validGrades = ['grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'];
class Firebase {
    constructor(){
        this.firebase = initializeApp(firebaseConfig);
        this.auth = getAuth();
        this.firestore = getFirestore();
    }

    signIn = async(lrn,password) => {
        
    }
    signUp = async(email, password, lrn, grade, fullName)=> {
      
        if(!validGrades.includes(lrn)){
            throw new Error('Invalid Grade Level');
        }
        const gradeLevel = grade.toLowerCase(); 
        const findLrn = collection(this.firestore, 'users', gradeLevel, 'students');
        const query = query(findLrn, where('lrn', '==', lrn));
        const result = await getDocs(query);

        if(!result.empty){
            throw new Error('LRN already exists');
        }
        const userCredentital = await createUserWithEmailAndPassword(this.auth, email, password);
        const user = userCredentital.user.uid;

        await setDoc(doc(this.firestore,'users', gradeLevel, 'students', user),{
            email,
            fullName,
            lrn,
            grade,
            role: 'student',
            createdAt: new Date().toISOString()
        })


    }
    signOut = () => this.auth.signOut();

}
export default Firebase