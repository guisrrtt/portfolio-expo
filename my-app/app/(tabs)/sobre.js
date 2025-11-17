import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Tecnologias do App</Text>

            <View style={styles.card}>
                <Text style={styles.subTitle}>Base do Desenvolvimento</Text>
                <Text style={styles.text}>- Linguagem: JavaScript (ES6+)</Text>
                <Text style={styles.text}>- Framework: React Native</Text>
                <Text style={styles.text}>- Runtime: Expo CLI</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subTitle}>Arquitetura e Componentes</Text>
                <Text style={styles.text}>- Roteamento: Expo Router (Abas)</Text>
                <Text style={styles.text}>- Estilização: React Native StyleSheet</Text>
                <Text style={styles.text}>- Ícones: @expo/vector-icons (Ionicons)</Text>
                <Text style={styles.text}>- Componentes: View, Text, ScrollView, Pressable</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subTitle}>Publicação</Text>
                <Text style={styles.text}>- Build e Publicação: EAS Build / Expo Application Services</Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E'
    },
    scrollContent: {
        padding: 25,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
        width: '100%',
        textAlign: 'left',
    },
    card: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        maxWidth: 600,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 10,
    },
    text: {
        color: '#CCCCCC',
        fontSize: 16,
        marginBottom: 5
    },
});