// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );

}