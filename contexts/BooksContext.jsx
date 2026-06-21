import { createContext, useState, useContext, useEffect } from "react"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../lib/firebase"
import { UserContext } from "./UserContext"
import { useUser } from "../hooks/useUser"

export const BooksContext = createContext()

export function BooksProvider({ children }) {
//   const { user } = useContext(UserContext)
  const [books, setBooks] = useState([])   // starts as an empty list
  const {user} = useUser()

 
  async function fetchBooks() {
    try{
   const q= query(collection(db,"books"), where ("userId", "==",user.uid))
   const snapshot = await getDocs(q)
   const list = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
   setBooks(list)
    }
    catch(error){
  console.log(error.message)
    }
  }
  async function fetchBookById(id) {}

  
  async function createBook(data) {
      try {
    // await addDoc(collection(db, "books"), {
    //   ...data,
    //   userId: user.uid,
    // })
    const docRef = await addDoc(collection(db, "books"),  {  ...data,
       userId: user.uid});

setBooks((prev) => [
  ...prev,
  {
    id: docRef.id,
    ...data,
  },
]);
  } catch (error) {
    console.log(error.message)
  }

  }
  async function deleteBook(id) {}
 
  useEffect(()=>{
    if(user){
        fetchBooks()
    }
    else{
        setBooks([])
    }
  },[user]
)
  
  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  )
}