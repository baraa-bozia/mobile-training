import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { useBooks } from '../../hooks/useBooks'
import { useEffect } from 'react'
import { FlatList } from 'react-native'
import { Colors } from '../../constants/colors'
import { useRouter } from 'expo-router'
import { Pressable } from 'react-native'
import ThemedCard from '../../components/ThemedCard'

const Books = () => {
    const { books, fetchBooks } = useBooks();
 const router = useRouter()
  useEffect(() => {
    fetchBooks();
  }, []);
//   return (
//     <ThemedView style={styles.container} safe={true}>

//       <Spacer />
//       <ThemedText title={true} style={styles.heading}>
//         Your Reading List
//       </ThemedText>

//     </ThemedView>
//   )
// }

  return (
    // <ThemedView style={styles.container}>
    //        <Spacer />
    //   <ThemedText title={true} style={styles.heading}>
    //     Your Reading List
    //    </ThemedText>
    //   <FlatList
    //     data={books}
    //     keyExtractor={(item) => item.id}
    //     contentContainerStyle={{marginTop:40,backgroundColor:'gray',borderLeftColor:Colors.primary}}
    //     renderItem={({ item }) => (
    //       <ThemedView style={styles.card}>
    //         <ThemedText title>{item.title}</ThemedText>
    //         <ThemedText>Author: {item.author}</ThemedText>
    //         <ThemedText>{item.description}</ThemedText>
    //       </ThemedView>
    //     )}
    //   />
    // </ThemedView>
    <ThemedView style={styles.container}>
  <Spacer />

  <ThemedText title={true} style={styles.heading}>
    Your Reading List
  </ThemedText>

  {/* <FlatList 
    data={books}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.listContainer}
    renderItem={({ item }) => (
      <ThemedView style={styles.card}>
        <ThemedText title style={styles.bookTitle}>
          {item.title}
        </ThemedText>

        <ThemedText style={styles.author}>
          Author✍️: {item.author}
        </ThemedText>

      </ThemedView>
    )}
  /> */}

<FlatList
  data={books}
  keyExtractor={(item) => item.id}
  contentContainerStyle={styles.list}
  renderItem={({ item }) => (
    <Pressable onPress={() => router.push(`/books/${item.id}`)}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{item.title}</ThemedText>
        <ThemedText>Written by {item.author}</ThemedText>
      </ThemedCard>
    </Pressable>
  )}
/>



</ThemedView>
  );
}



export default Books

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: "center",
//     alignItems: "stretch",
//         padding: 50,

//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: 18,
//     textAlign: "center",
//   },
//     card: {
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
// })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  listContainer: {
    paddingBottom: 20,
  },

  card: {
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#cdccccff',

    borderLeftWidth: 5,
    borderLeftColor: Colors.primary,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },

  bookTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },

  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
});