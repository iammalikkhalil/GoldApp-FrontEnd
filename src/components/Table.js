import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Colors from '../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Table() {
  const [headingOneTriangleRotater, setHeadingOneTriangleRotater] =
    useState(false);
  const [headingTwoTriangleRotater, setHeadingTwoTriangleRotater] =
    useState(false);
  const [headingThreeTriangleRotater, setHeadingThreeTriangleRotater] =
    useState(false);
  const [headingFourTriangleRotater, setHeadingFourTriangleRotater] =
    useState(false);
  const [upOne, setUpOne] = useState(false);
  const [upTwo, setUpTwo] = useState(true);
  const [randomNumber, serRandomNumber] = useState(true);
  const array = [1, 2, 3, 4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUpOne(prevValue => !prevValue);
      setUpTwo(prevValue => !prevValue);
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.thead}>
          <View style={styles.tr}>
            <View style={styles.hd}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  setHeadingOneTriangleRotater(prevValue => !prevValue);
                }}>
                <Text style={styles.headingText}>Heading</Text>
                <Icon
                  style={[
                    styles.headingIcon,
                    {
                      transform: [
                        {rotate: headingOneTriangleRotater ? '180deg' : '0deg'},
                      ],
                    },
                  ]}
                  name="triangle"
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.hd}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  setHeadingTwoTriangleRotater(prevValue => !prevValue);
                }}>
                <Text style={styles.headingText}>Heading</Text>
                <Icon
                  style={[
                    styles.headingIcon,
                    {
                      transform: [
                        {rotate: headingTwoTriangleRotater ? '180deg' : '0deg'},
                      ],
                    },
                  ]}
                  name="triangle"
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.hd}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  setHeadingThreeTriangleRotater(prevValue => !prevValue);
                }}>
                <Text style={styles.headingText}>Heading</Text>
                <Icon
                  style={[
                    styles.headingIcon,
                    {
                      transform: [
                        {
                          rotate: headingThreeTriangleRotater
                            ? '180deg'
                            : '0deg',
                        },
                      ],
                    },
                  ]}
                  name="triangle"
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.hd}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  setHeadingFourTriangleRotater(prevValue => !prevValue);
                }}>
                <Text style={styles.headingText}>Heading</Text>
                <Icon
                  style={[
                    styles.headingIcon,
                    {
                      transform: [
                        {
                          rotate: headingFourTriangleRotater
                            ? '180deg'
                            : '0deg',
                        },
                      ],
                    },
                  ]}
                  name="triangle"
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.tbody}>
          {array.map((item, index) => {
            const randomNumber1 = Math.floor(Math.random() * (11 - 1));
            const randomNumber2 = Math.floor(Math.random() * (11 - 1));
            return (
              <View style={styles.tr} key={index}>
                <View style={styles.td}>
                  <View style={styles.wrapper}>
                    <Text style={styles.tdText}>cell</Text>
                  </View>
                </View>
                <View style={styles.td}>
                  <View style={styles.wrapper}>
                    <Icon
                      style={styles.tdIcon}
                      name={randomNumber1 % 2 == 0 ? 'arrow-down' : 'arrow-up'}
                      size={20}
                      color={randomNumber1 % 2 == 0 ? 'red' : 'green'}
                    />
                    <Text style={styles.tdText}>cell</Text>
                  </View>
                </View>
                <View style={styles.td}>
                  <View style={styles.wrapper}>
                    <Icon
                      style={styles.tdIcon}
                      name={randomNumber2 % 2 == 0 ? 'arrow-down' : 'arrow-up'}
                      size={20}
                      color={randomNumber2 % 2 == 0 ? 'red' : 'green'}
                    />
                    <Text style={styles.tdText}>cell</Text>
                  </View>
                </View>
                <View style={styles.tdLast}>
                  <View style={styles.wrapper}>
                    <Text style={styles.tdText}>cell</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  table: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryBgColor,
    elevation: 5,
  },
  thead: {
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 0,
    backgroundColor: Colors.secondaryBgColor,
    borderColor: Colors.secondaryBgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tr: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hd: {
    borderRightWidth: 1,
    borderColor: Colors.secondaryBgColor,
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hdLast: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headingText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  headingIcon: {
    marginLeft: 4,
  },
  tbody: {
    borderWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 0,
    backgroundColor: Colors.primaryBgColor,
    borderColor: Colors.secondaryBgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  td: {
    borderRightWidth: 1,
    borderColor: Colors.secondaryBgColor,
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tdLast: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  tdText: {
    fontSize: 16,
    color: Colors.primaryFontColor,
  },
  tdIcon: {
    marginRight: 4,
  },
});
