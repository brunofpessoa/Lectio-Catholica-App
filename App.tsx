import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { BibleScreen } from './src/ui/screens/bible_screen';

function App() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <BibleScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
