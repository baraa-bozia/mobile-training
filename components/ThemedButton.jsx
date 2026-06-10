import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";




const ThemedButton = ({ style, children, ...props }) => {

  return (
    <Pressable
      style={({pressed}) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: '#583535ff',
  },

});
// •  Open ThemedButton.jsx. Write a note: what does {style, ...props} do, and why is style LAST in the array?

// what does {style, ...props} do?
// * Answer:
// style={({ pressed }) => [...] } lets us change styles based on the Pressable state, like when it is pressed.
// ...props is the rest operator in destructuring, it collects all extra props and passes them to the component.

// why is style LAST in the array?
// * Answer:
// We put style last so user styles can override default styles since React Native applies styles from left to right.
// - styles.btn → default button style
// - pressed && styles.pressed → overrides when pressed
// - style → user-provided style (highest priority)

// •  Write 3–5 sentences explaining the style-as-a-function pattern in your own words.
// * Answer:
// It is used instead of passing a static style object, we provide a function that receives the current state (like 'pressed')
//  so we can return different styles based on state or events.
//  This allows the UI to change dynamically.