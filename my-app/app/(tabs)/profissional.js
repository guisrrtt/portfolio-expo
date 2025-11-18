import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfissionalScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Jornada Profissional e Habilidades</Text>

            <View style={styles.card}>
                <Text style={styles.subTitle}>Foco Atual</Text>
                <Text style={styles.description}>
                    Atualmente, estou concentrado em finalizar minha formação e aplicar os conhecimentos teóricos em projetos práticos (como este app) para construir uma base sólida.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subTitle}>Habilidades Transferíveis</Text>
                <Text style={styles.detail}>
                    <Text style={styles.detailBold}>- Resolução de Problemas:</Text> Aplicação de lógica algorítmica para encontrar soluções eficientes em código.
                </Text>
                <Text style={styles.detail}>
                    <Text style={styles.detailBold}>- Gestão de Projeto Ágil:</Text> Experiência em projetos de grupo utilizando metodologias ágeis (Scrum, Kanban).
                </Text>
                <Text style={styles.detail}>
                    <Text style={styles.detailBold}>- Aprendizado Rápido:</Text> Alta capacidade de absorver novas tecnologias e frameworks.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subTitle}>Objetivo</Text>
                <Text style={styles.description}>
                    Busco uma oportunidade de estágio ou posição júnior onde possa aplicar minhas habilidades em React, JavaScript, e lógica de sistemas em um ambiente de produção real.
                </Text>
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
        lineHeight: 22,
        marginBottom: 8,
    },
    detailBold: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    }
});