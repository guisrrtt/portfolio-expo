import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AcademicaScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Experiência Acadêmica</Text>

            <View style={styles.card}>
                <Text style={styles.subTitle}>Ciência da Computação</Text>
                <Text style={styles.institution}>[Universidade Católica de Pernambuco]</Text>
                <Text style={styles.period}>5º Período</Text>
                <Text style={styles.description}>
                    Foco em estruturas de dados, algoritmos e desenvolvimento de sistemas.
                    Adquiri forte base em Python, C e conceitos de Full-Stack.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subTitle}>Disciplinas de Destaque</Text>
                <Text style={styles.detail}>- Estruturas de Dados e Algoritmos</Text>
                <Text style={styles.detail}>- Desenvolvimento Web (React Native, React, Next.js)</Text>
                <Text style={styles.detail}>- Sistemas Operacionais e Redes</Text>
                <Text style={styles.detail}>- Projeto de Software (Gestão de Projeto Ágil)</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    scrollContent: {
        padding: 25,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 25,
        width: '100%',
        textAlign: 'center',
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
        color: '#00ff55ff',
        marginBottom: 5,
    },
    institution: {
        fontSize: 16,
        color: '#c7c2c2ff',
        marginBottom: 5,
    },
    period: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    description: {
        fontSize: 15,
        color: '#e4e4e4ff',
        lineHeight: 22,
    },
    detail: {
        fontSize: 15,
        color: '#e4e4e4ff',
        marginBottom: 5,
    },
});