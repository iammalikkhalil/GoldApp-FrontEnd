import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../assets/Colors';

export default function Disclaimer() {
  return (
    <View style={styles.container}>
      <Icon style={styles.alertIcon} name="alert-circle" />
      <Text style={styles.heading}>Disclamier</Text>
      <Text style={styles.body}>
        Trading foreign exchange on margin involves a significant level of risk
        and may not be suitable for all investors. The substantial leverage can
        both amplify gains and magnify losses. Prior to deciding to invest in
        foreign exchange, it is crucial to thoroughly assess your investment
        objectives, level of experience, and risk tolerance. There is a
        possibility that you could incur a loss, potentially even the entirety
        of your initial investment, and therefore, it is advisable not to invest
        funds that you cannot afford to lose. It is important to be fully aware
        of all the risks associated with foreign exchange trading and to seek
        guidance from an independent financial advisor if you harbor any
        uncertainties.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: Colors.secondaryBgColor,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  icon: {
    textAlign: 'center',
    marginBottom: 15,
  },
  heading: {
    marginTop: 5,
    color: '#FFD700',
    fontSize: 30,
    fontWeight: '600',
    textAlign: "center"
  },
  alertIcon: {
    textAlign: 'center',
    fontSize: 100,
    color: '#FFD700',
  },
  body: {
    color: Colors.primaryFontColor,
    fontSize: 14,
    textAlign: 'justify',
    marginVertical: 5,
    color: 'white',
  },
});
