import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()} style={{ padding: 1 }}>
      <Ionicons name="arrow-back-circle" size={38} color="white" />
    </TouchableOpacity>
  );
}
