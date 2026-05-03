import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.logo}>LogosAplikacji</Text>
        <Text style={styles.button}>Umów Ponownie</Text>
      </View>

      <View style={styles.middle}>
        <View style={styles.leftBox}>
           <Text style={styles.titleLBox}>Opinie i oceny</Text>
           <View style={styles.bottomLBox}>
             <View style={styles.half}>
               <Text>zabieg z pracownikiem</Text>
             </View>
             <View style={styles.half}>
               <Text >Umow</Text>
             </View>
           </View>
        </View>

        <View style={styles.rightBox}>
          <Text>zabieg z pracownikiem</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap:10, 
  },

  header: {
    backgroundColor: "#120a57",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
  },
  logo: {
    color: "#ffffff",
    fontSize: 30,
  },
  button: {
    backgroundColor: "#9de6f3",
    color: "#fd0000",
    height: 20,
  },

  middle: {
    flexDirection: "row",
    height: 200,
    gap: 10,
  },
  
  leftBox: {
    flex: 3,
    backgroundColor: "#B0AEC4",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  titleLBox: {
    backgroundColor: "#9ad23a",
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
  half: {
  flex: 1, 
  },

  bottomLBox: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignSelf: "flex-start",
  width: "100%",
  },

  rightBox: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    alignItems: "flex-end",
  },

});