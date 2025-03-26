import { View, StyleSheet, Platform } from 'react-native';
import React from 'react';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapWrapper}>
        <MapView
          provider={PROVIDER_DEFAULT}
          userInterfaceStyle="light"
          mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
          style={styles.map}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mapWrapper: {
    flex: 1,
    borderRadius: 10, // Apply borderRadius here
    overflow: 'hidden', // Ensure the corners are clipped
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;