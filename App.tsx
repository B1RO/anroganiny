import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Heading = styled.Text`
  font-size: 24px;
  color: #000;
`;

const RootComponent = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <RootComponent>
      <Heading>Kyseliny</Heading>
      <StatusBar style="auto" />
    </RootComponent>
  );
}
