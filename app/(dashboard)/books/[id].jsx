// import { StyleSheet } from "react-native";
// import { useLocalSearchParams } from "expo-router";
// import ThemedText from "../../../components/ThemedText";
// import ThemedView from "../../../components/ThemedView";
// import { useBooks } from "../../../hooks/useBooks";
// import { useState } from "react";
// import { useEffect } from "react";
// import ThemedLoader from "../../../components/ThemedLoader";

// const BookDetails = () => {
//   const { id } = useLocalSearchParams();
// const { fetchBookById } = useBooks()
// const [book, setBook] = useState(null)


// useEffect(() => {
//   async function loadBook() {
//     const bookData = await fetchBookById(id)
//     setBook(bookData)
//   }
//   loadBook()
// }, [id])
// const handleDelete = async () => {
//   await deleteBook(id)
//   setBook(null)
//   router.replace('/books')
// }
// //   return (
// //     <ThemedView safe={true} style={styles.container}>
// //       <ThemedText>{id}</ThemedText>
// //     </ThemedView>
// //   );
// if (!book) {
//   return (
//     <ThemedView safe={true} style={styles.container}>
//       <ThemedLoader />
//     </ThemedView>
//   )
// }

// // then the real template:
// return(
// <ThemedView>

// <ThemedCard style={styles.card}>
//   <ThemedText style={styles.title}>{book.title}</ThemedText>
//   <ThemedText>By {book.author}</ThemedText>
//   <Spacer />
//   <ThemedText title={true}>Book description:</ThemedText>
//   <ThemedText>{book.description}</ThemedText>
// </ThemedCard>
// <ThemedButton onPress={handleDelete} style={styles.delete}>
//   <ThemedText style={{ color: '#fff', textAlign: 'center' }}>Delete Book</ThemedText>
// </ThemedButton>
// </ThemedView>
// );

// };

// export default BookDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "stretch",
//   },
// });

// // import { StyleSheet, Text } from "react-native"
// // import { useLocalSearchParams, useRouter } from "expo-router"
// // import { useEffect, useState } from "react"
// // import { useBooks } from "../../../hooks/useBooks"
// // // import { Colors } from "../../../constants/Colors"
// // import ThemedText from "../../../components/ThemedText"
// // import ThemedButton from "../../../components/ThemedButton"
// // import ThemedView from "../../../components/ThemedView"
// // import Spacer from "../../../components/Spacer"
// // import ThemedCard from "../../../components/ThemedCard"
// // import ThemedLoader from "../../../components/ThemedLoader"   // correct path!
// // import { Colors } from "../../../constants/colors" 

// // const BookDetails = () => {
// //   const [book, setBook] = useState(null)
// //   const { id } = useLocalSearchParams()
// //   const { fetchBookById, deleteBook } = useBooks()
// //   const router = useRouter()
 
// //   const handleDelete = async () => {
// //     await deleteBook(id)
// //     setBook(null)
// //     router.replace('/books')
// //   }
 
// //   useEffect(() => {
// //     async function loadBook() {
// //       const bookData = await fetchBookById(id)
// //       setBook(bookData)
// //     }
// //     loadBook()
// //     return () => setBook(null)
// //   }, [id])
 
// //   if (!book) {
// //     return (
// //       <ThemedView safe={true} style={styles.container}>
// //         <ThemedLoader />
// //       </ThemedView>
// //     )
// //   }
 
// //   return (
// //     <ThemedView safe={true} style={styles.container}>
// //       <ThemedCard style={styles.card}>
// //         <ThemedText style={styles.title}>{book.title}</ThemedText>
// //         <ThemedText>Written by {book.author}</ThemedText>
// //         <Spacer />
// //         <ThemedText title={true}>Book description:</ThemedText>
// //         <Spacer height={10} />
// //         <ThemedText>{book.description}</ThemedText>
// //       </ThemedCard>
// //       <ThemedButton onPress={handleDelete} style={styles.delete}>
// //         <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Book</Text>
// //       </ThemedButton>
// //     </ThemedView>
// //   )
// // }
 
// // export default BookDetails
 
// // const styles = StyleSheet.create({
// //   container: { flex: 1, alignItems: "stretch" },
// //   title: { fontSize: 22, marginVertical: 10 },
// //   card: { margin: 20 },
// //   delete: { marginTop: 40, backgroundColor: Colors.warning, width: 200, alignSelf: "center" },
// // })
import { StyleSheet, Text } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { useBooks } from "../../../hooks/useBooks"
import { Colors } from "../../../constants/colors"
import ThemedText from "../../../components/ThemedText"
import ThemedButton from "../../../components/ThemedButton"
import ThemedView from "../../../components/ThemedView"
import Spacer from "../../../components/Spacer"
import ThemedCard from "../../../components/ThemedCard"
import ThemedLoader from "../../../components/ThemedLoader"   // correct path!
 
const BookDetails = () => {
  const [book, setBook] = useState(null)
  const { id } = useLocalSearchParams()
  const { fetchBookById, deleteBook } = useBooks()
  const router = useRouter()
 
  const handleDelete = async () => {
    await deleteBook(id)
    setBook(null)
    router.replace('/books')
  }
 
  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id)
      setBook(bookData)
    }
    loadBook()
    return () => setBook(null)
  }, [id])
 
  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    )
  }
 
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />
        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
      <ThemedButton onPress={handleDelete} style={styles.delete}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  )
}
 
export default BookDetails
 
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "stretch" },
  title: { fontSize: 22, marginVertical: 10 },
  card: { margin: 20 },
  delete: { marginTop: 40, backgroundColor: Colors.warning, width: 200, alignSelf: "center" },
})