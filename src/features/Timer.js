import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

const ONE_SECOND_IN_MS = 1000;

const vibrationPattern = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = () => {
    Vibration.vibrate(vibrationPattern);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isRunning}
          onProgress={setProgress}
          onEnd={() => onEnd()}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ padding: spacing.sm }}>
        <ProgressBar
          progress={progress}
          style={styles.progressBar}
          color={colors.progressBar}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isRunning && (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsRunning(true);
            }}
          />
        )}
        {isRunning && (
          <RoundedButton
            title="Pause"
            onPress={() => {
              setIsRunning(false);
            }}
          />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={() => clearSubject(null)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  progressBar: {
    height: 10,
  },
});
