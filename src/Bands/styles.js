import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "black",
    padding: 10,
  },

  band: {
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#444444",
  },

  infoTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nameTogether: {
    color: "white",
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },

  nameSplit: {
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },

  formed: {
    color: "white",
    fontSize: 16,
  },

  origin: {
    fontSize: 18,
    color: "#979797",
  },

  fans: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
