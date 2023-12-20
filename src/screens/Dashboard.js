import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DashboardCard from '../components/DashboardCard';
import Header from '../components/Header';
import {ScrollView, GestureHandlerRootView} from 'react-native-gesture-handler';

export default function Dashboard(props) {
  // const [role, setRole] = useState(props.route.params.role);
  // let booleanRole = role === 'true';
  // const [modelVisible, setModelVisible] = useState(booleanRole);

  const [role, setRole] = useState('true');
  const [modelVisible, setModelVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  function Navigator(params) {
    props.navigation.navigate(`${params}`);
  }

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <Header props={{setDrawerVisible}} />
        <View style={styles.break}></View>
        <ScrollView>
          {role == 'false' ? <NewDisclaimer /> : null}
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                Navigator('LiveRates');
              }}>
              <DashboardCard
                propsData={{
                  bgColor: '#d5f5ff',
                  color: '#4e9ec8',
                  icon: 'access-point',
                  text: 'Live Rates',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Navigator('Insights');
              }}>
              <DashboardCard
                propsData={{
                  bgColor: '#c1c6fe',
                  color: '#8973d9',
                  icon: 'text-box-search',
                  text: 'Insights',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                Navigator('GoldCalculator');
              }}>
              <DashboardCard
                propsData={{
                  bgColor: '#bfeec4',
                  color: '#21694c',
                  icon: 'gold',
                  text: 'Gold Calculator',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Navigator('SilverCalculator');
              }}>
              <DashboardCard
                propsData={{
                  bgColor: '#ffe9d5',
                  color: '#deb974',
                  icon: 'podium-silver',
                  text: 'Silver Calculator',
                }}
              />
            </TouchableOpacity>
          </View>
          <>
            <View style={styles.rowLeft}>
              <TouchableOpacity
                onPress={() => {
                  Navigator('TradingGuide');
                }}>
                <DashboardCard
                  propsData={{
                    bgColor: '#d9e5f9',
                    color: '#459880',
                    icon: 'book-open-page-variant',
                    text: 'Trading Guide',
                  }}
                />
              </TouchableOpacity>
            </View>
          </>
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rowLeft: {
    justifyContent: 'flex-start',
    marginLeft: 10,
    width: '30%',
  },
  break: {
    height: 20,
  },
});
