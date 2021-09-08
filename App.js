import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DateTime} from 'luxon';

const App = () => {
  return (
    <SafeAreaView>
      <Text>{`DateTime.local weekday: ${
        DateTime.local({zone: 'America/New_York'}).isValid // false except if Debug is enabled
      }`}</Text>
    </SafeAreaView>
  );
};

export default App;
