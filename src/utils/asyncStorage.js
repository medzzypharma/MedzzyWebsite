import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // error
  }
};

export const getItem = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {
    // error
  }
};
