import { View, Text } from 'react-native';
import TestFirestore from '../../TestFirestore';

export default function FirestoreScreen() {
  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Firestore Demo</Text>
      <TestFirestore />
    </View>
  );
}
