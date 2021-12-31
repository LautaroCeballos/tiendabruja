import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc, getDocs, getFirestore, Timestamp, getDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
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
    }).catch((err) => {
      return `Error al devolver los productos ${err}`
    })
}

export const getProduct = (productId) => {
  return getDoc(doc(db, "products", productId))
  .then((result) => {
    if(result.exists()){
      return {
        ...result.data()
      }
    } else {
      return `No se encontro el articulo especificado`
    }
  }).catch((err) => {
    return `Error al devolver el producto ${err}`
  })
}

export const deleteProduct = (productId) => {
  return deleteDoc(doc(db, "products", productId))
    .then(() => {
      return "Producto eliminado con exito"
    }).catch((err) => {
      return `Error al eliminar el producto ${err}`
    })
}

export const updateProduct = (productId, productData) => {
  return setDoc(doc(db, "products", productId), productData)
    .then(() => {
      return "Producto actualizado con exito"
    }).catch((err) => {
      return `Error al actualizar el producto ${err}`
    })
}



