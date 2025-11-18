import { View, Text, StyleSheet, Image, ScrollView, Linking, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {

    const handleLinkPress = (url) => {
        Linking.openURL(url).catch(err => console.error("Não foi possível carregar a página", err));
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>

            <Image
                source={require('../../assets/images/foto-perfil.jpg')}
                style={styles.profileImage}
            />

            <Text style={styles.heading1}>Guilherme Serretti</Text>
            <Text style={styles.developerTitle}>Desenvolvedor Full-Stack</Text>

            <View style={styles.bioContainer}>
                <Text style={styles.paragraph}>
                    Estudante motivado em aprimorar habilidades e conhecer novas ferramentas e tecnologias.
                    Este aplicativo é o meu portfólio mobile desenvolvido com React Native.
                </Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.contactText}>Conecte-se Comigo</Text>

            <View style={styles.contactGrid}>
                <Pressable style={styles.contactLink} onPress={() => handleLinkPress('mailto:serrettiguilherme@gmail.com')}>
                    <Ionicons name="mail" size={24} color="#00ff55ff" />
                    <Text style={styles.contactLabel}>Email</Text>
                </Pressable>
                <Pressable style={styles.contactLink} onPress={() => handleLinkPress('https://www.linkedin.com/in/guilherme-serretti-3a164726a/')}>
                    <Ionicons name="logo-linkedin" size={24} color="#00ff55ff" />
                    <Text style={styles.contactLabel}>LinkedIn</Text>
                </Pressable>
                <Pressable style={styles.contactLink} onPress={() => handleLinkPress('https://github.com/guisrrtt')}>
                    <Ionicons name="logo-github" size={24} color="#00ff55ff" />
                    <Text style={styles.contactLabel}>GitHub</Text>
                </Pressable>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    scrollContainer: {
        alignItems: 'center',
        padding: 30,
        paddingTop: 50,
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#000000ff',
    },
    heading1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    developerTitle: {
        fontSize: 18,
        color: '#00ff55ff',
        marginBottom: 25,
    },
    bioContainer: {
        width: '100%',
        maxWidth: 400,
    },
    paragraph: {
        fontSize: 16,
        color: '#e4e4e4ff',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 20,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#333',
        marginVertical: 20,
    },
    contactText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 15,
    },
    contactGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        maxWidth: 350,
    },
    contactLink: {
        alignItems: 'center',
        padding: 10,
    },
    contactLabel: {
        fontSize: 14,
        color: '#00ff55ff',
        marginTop: 5,
    },
});