import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native"; 
import { useKeepAwake } from 'expo-keep-awake';

import { colors } from "../utils/color";
import { Countdown } from "../components/Countdown";
import { Button } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { ProgressBar, color } from "react-native-paper";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];



export const Timer = ({ focusSubject,clearSubject,onTimerEnd }) => {
    useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes , setMinutes] = useState(0.2)

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false)
    setProgress(1)
    reset();
    onTimerEnd(focusSubject)
  }
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          onProgress={setProgress}
          minutes={minutes}
          onEnd={onEnd}
          isPaused={!isStarted}
        />

        <View style={{ paddingTop: 24 }}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{ padding: 24 }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: 10 }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="Pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes}/>
      </View>

      <RoundedButton size={50} title='-' onPress= {clearSubject} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});
