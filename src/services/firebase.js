import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc, getDocs, getFirestore, Timestamp } from "firebase/firestore"
import { getStorage, ref, getDownloadURL,  uploadBytesResumable } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC3M2rBLj2jVtdluypfVvEGFmoXLSIoY-4",
  authDomain: "tiendabruja-2926e.firebaseapp.com",
  projectId: "tiendabruja-2926e",
  storageBucket: "tiendabruja-2926e.appspot.com",
  messagingSenderId: "838449979093",
  appId: "1:838449979093:web:22bc332f0b137a61674c5c"
};

initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore();

export const loginWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider()
  await signInWithRedirect(auth, googleProvider)
}

export const signOutUser = () => {
  signOut(auth)
}

export const authStateChanged = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromGoogleAuth(user) : null
    onChange(normalizedUser)
  })
}

const mapUserFromGoogleAuth = (user) => {
  const userMap = {
    name: user.displayName,
    email: user.email,
    imgProfile: user.photoURL
  }
  return userMap
}

// export const getUserResult = async () => {
//   const result = await getRedirectResult(auth)
//   if(result){
//     const credential = GoogleAuthProvider.credentialFromResult(result)
//     const token = credential.accessToken
//     const user = result.user
//     console.log(`Token:  ${token}`)
//     console.log(`User:  ${user.toJSON()}`)
//   }
// }


export const addProduct = async (imgFile, product) => {
  const {publicImageUrl} = await uploadImage(imgFile, product.name)
  const productData = {
    ...product,
    img: publicImageUrl,
    createAt: Timestamp.fromDate(new Date())
  }
  return addDoc(collection(db, "products"), productData)
}

const uploadImage = async (file, product) => {
  const filePath = `${product}/${file.name}`
  const newImageRef = ref(getStorage(), filePath)
  const fileSnapshot = await uploadBytesResumable(newImageRef, file)
  const publicImageUrl = await getDownloadURL(newImageRef)

  return { publicImageUrl, fileSnapshot }

    // const task = fileSnapshot
    // if(task){
    //     let onProgress = () => {}
    //     let onError = () => {
    //         console.log('Error')
    //     }
    //     let onComplete = () => {
    //         console.log('onComplete')
    //     }
    //     task.on('state_changed', onProgress, onError, onComplete)
    // }
}

export const getProducts = () => {
  return getDocs(collection(db, "products"))
    .then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        return {
          ...data,
          id,
        }
      })
    })
}


