// import { createContext, useState, useContext, useEffect } from "react"
// import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
// import { db } from "../lib/firebase"
// import { UserContext } from "./UserContext"
// import { useUser } from "../hooks/useUser"

// export const BooksContext = createContext()

// export function BooksProvider({ children }) {
// //   const { user } = useContext(UserContext)
//   const [books, setBooks] = useState([])   
//   const {user} = useUser()

 
//   async function fetchBooks() {
//     try{
//    const q= query(collection(db,"books"), where ("userId", "==",user.uid))
//    const snapshot = await getDocs(q)
//    const list = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
//    setBooks(list)
//     }
//     catch(error){
//   console.log(error.message)
//     }
//   }
//   // async function fetchBookById(id) {}
// async function fetchBookById(id) {
//   try {
//     const docRef = doc(db, "books", id)
//     const docSnap = await getDoc(docRef)
//     if (docSnap.exists()) {
//       return { id: docSnap.id, ...docSnap.data() }
//     }
//   } catch (error) {
//     console.log(error.message)
//   }
// }
  
//   async function createBook(data) {
//       try {
//     // await addDoc(collection(db, "books"), {
//     //   ...data,
//     //   userId: user.uid,
//     // })
//     const docRef = await addDoc(collection(db, "books"),  {  ...data,
//        userId: user.uid});

// setBooks((prev) => [
//   ...prev,
//   {
//     id: docRef.id,
//     ...data,
//   },
// ]);
//   } catch (error) {
//     console.log(error.message)
//   }

//   }
//   // async function deleteBook(id) {}
//  async function deleteBook(id) {
//   try {
//     await deleteDoc(doc(db, "books", id))
//   } catch (error) {
//     console.log(error.message)
//   }
// }
//   useEffect(()=>{
//     if(user){
//         fetchBooks()
//     }
//     else{
//         setBooks([])
//     }
//   },[user]
// )
  
//   return (
//     <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
//       {children}
//     </BooksContext.Provider>
//   )
// }

import { createContext, useEffect, useState } from "react"
import { collection, addDoc, getDocs, query, where, onSnapshot, doc, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "../lib/firebase"
import { useUser } from "../hooks/useUser"
 
export const BooksContext = createContext()
 
export function BooksProvider({ children }) {
  const [books, setBooks] = useState([])
  const { user } = useUser()
 

  async function fetchBooks() {
    try {
      const q = query(collection(db, "books"), where("userId", "==", user.uid))
      const snapshot = await getDocs(q)
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setBooks(list)
    } catch (error) {
      console.log(error.message)
    }
  }
 
async function fetchBookById(id) {
  try {
    const docRef = doc(db, "books", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    }
  } catch (error) {
    console.log(error.message)
  }
}

 
  async function createBook(data) {
    try {
      await addDoc(collection(db, "books"), { ...data, userId: user.uid })
    } catch (error) {
      console.log(error.message)
    }
  }
 
  async function deleteBook(id) {
  try {
    await deleteDoc(doc(db, "books", id))
  } catch (error) {
    console.log(error.message)
  }
}

 
  useEffect(() => {
    if (user) { fetchBooks() } else { setBooks([]) }
  }, [user])



useEffect(() => {
  let unsubscribe
  if (user) {
    const q = query(collection(db, "books"), where("userId", "==", user.uid))
    unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setBooks(list)
    })
  } else {
    setBooks([])
  }
  return () => unsubscribe && unsubscribe()
}, [user])

 
  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  )
}