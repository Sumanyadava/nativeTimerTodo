import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { colors } from "./src/utils/color";
import { Focus } from "./src/features/Focus";
import { useEffect, useState } from "react";
import { Timer } from "./src/features/Timer";
import FocusHistory from "./src/features/FocusHistory";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [currentSubject, setCurrentSubjecst] = useState(null);
  const [history, setHistory] = useState([]);
// --------------------- 
  useEffect(() => {
    AsyncStorage.getItem('history').then(data => {
      //geting from local
      const storedHistory = data ? JSON.parse(data) : [];
      setHistory(storedHistory)
    }).catch(err => console.log(err))
  },[]);

  useEffect(()=> {
    //saving to local
    AsyncStorage.setItem('history',JSON.stringify(history)).catch(err => console.log(err))
  },[history]);

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem('history')
      setHistory([])
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubjecst} />
          <FocusHistory history={history} />
          <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
            <Text style={styles.clearButtonText}>Clear History</Text>
          </TouchableOpacity>

        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history,subject])
          }}
          clearSubject={() => {setCurrentSubjecst(null)}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 50,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
    fontSize: 30,
    textAlign: "center",
    marginTop: 100,
  },
  clearButton: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  clearButtonText: {
    color: colors.darkBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
