import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    padding: 24,
    justifyContent: "space-between",
  },
  front: {
    width: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    backgroundColor: "#DAE1E7",
  },
  back: {
    width: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#BAC1C7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  logo: {
    backgroundColor: "#8795A0",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flag: {
    flexDirection: "row",
    gap: -12,
  },
  red: {
    backgroundColor: "red",
  },
  orange: {
    backgroundColor: "orange",
  },
  label: {
    fontSize: 14,
    color: "#4F5F64",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
})
