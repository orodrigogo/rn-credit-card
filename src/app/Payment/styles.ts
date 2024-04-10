import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    marginTop: 62,
  },
  frontCard: {
    width: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  backCard: {
    width: "100%",
    backfaceVisibility: "hidden",
  },
  button: {
    alignItems: "center",
    marginTop: 32,
  },
})
