import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoutes} from './stack.routes';
import { AppProvider } from '../context/darkModeContext';

export function Routes() {
    return (
        <NavigationContainer> 
            <AppProvider>
                <StackRoutes />
            </AppProvider>
        </NavigationContainer>
    );
}