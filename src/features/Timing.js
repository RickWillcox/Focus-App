import React from 'react';
import { View } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="3s"
          onPress={() => {
            onChangeTime(1 / 20);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="5m"
          onPress={() => {
            onChangeTime(5);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="10m"
          onPress={() => {
            onChangeTime(10);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="20m"
          onPress={() => {
            onChangeTime(20);
          }}
        />
      </View>
    </>
  ); //
};

const styles = {
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
};
