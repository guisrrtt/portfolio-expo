import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const projects = [
    {
        id: 1,
        title: 'Inventário de Filmes',
        description: 'Projeto sobre tratamento de colisões na tabela hash, da disciplina de Estrutura de Dados.',
        tech: ['C'],
        github: '',
    },
    {
        id: 2,
        title: 'Gerenciador de Arquivos',
        description: 'Desenvolvido para gerenciar e organizar arquivos em uma plataforma que suporta upload, atualização, remoção e compartilhamento.',
        tech: ['Python', 'SQL'],
        github: 'https://github.com/guisrrtt/projeto-banco-de-dados',
    },
    {
        id: 3,
        title: 'Escalação FC',
        description: 'Projeto sobre escalação de times de futebol com interface dinâmica e responsiva.',
        tech: ['React', 'JavaScript', 'CSS'],
        github: 'https://github.com/Rodibre8708/siteGrupo',
    },

    {
        id: 4,
        title: 'Portfólio Mobile (Expo)',
        description: 'Este próprio aplicativo móvel, construído com React Native.',
        tech: ['React Native', 'Expo Router'],
        github: 'https://github.com/guisrrtt/portfolio-expo',
    },
];

const getTechIcon = (techName) => {
    switch (techName) {
        case 'Python': return 'logo-python';
        case 'React Native': return 'logo-react';
        case 'JavaScript': return 'logo-javascript';
        case 'CSS': return 'logo-css3';
        case 'Expo Router': return 'navigate';
        case 'React': return 'logo-react';
        case 'C': return 'terminal';
        case 'SQL': return 'server';
        default: return 'code-slash';
    }
};

const ProjectCard = ({ project }) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{project.title}</Text>
        <Text style={styles.cardDescription}>{project.description}</Text>

        <View style={styles.techContainer}>
            {project.tech.map((tech, index) => (
                <View key={index} style={styles.techBadge}>
                    <Ionicons name={getTechIcon(tech)} size={18} color="#4CAF50" />
                    <Text style={styles.techText}>{tech}</Text>
                </View>
            ))}
        </View>

        <Pressable
            onPress={() => Linking.openURL(project.github)}
            style={({ pressed }) => [
                styles.githubButton,
                { opacity: pressed ? 0.8 : 1 }
            ]}
        >
            <Ionicons name="logo-github" size={20} color="#FFFFFF" />
            <Text style={styles.githubButtonText}>Ver no GitHub</Text>
        </Pressable>
    </View>
);

export default function ProjetosScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Meus Projetos</Text>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
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
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        color: '#e4e4e4ff',
        marginBottom: 15,
    },
    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    techBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 8,
        marginBottom: 5,
    },
    techText: {
        color: '#FFFFFF',
        fontSize: 12,
        marginLeft: 5,
    },
    githubButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        marginTop: 10,
    },
    githubButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});