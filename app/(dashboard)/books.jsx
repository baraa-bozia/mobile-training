import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { useBooks } from '../../hooks/useBooks'
import { useEffect } from 'react'
import { FlatList } from 'react-native'

const Books = () => {
    const { books, fetchBooks } = useBooks();

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
    <ThemedView style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedView style={styles.card}>
            <ThemedText title>{item.title}</ThemedText>
            <ThemedText>Author: {item.author}</ThemedText>
            <ThemedText>{item.description}</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}



export default Books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
        padding: 50,

  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
    card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
})