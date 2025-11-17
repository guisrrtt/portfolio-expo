import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const palavras = [
    'REACT', 'JAVASCRIPT', 'PYTHON', 'HTML', 'CSS',
    'SWIFT', 'GO', 'PHP', 'KOTLIN',
    'COMPONENTE', 'RUST', 'DART ', 'PYTHON',
    'SQL', 'DJANGO', 'JAVA',
    'RUBY', 'PASCAL', 'GIT', 'GITHUB',
    'DELPHI', 'PERL', 'ASSEMBLY',
    'COBOL', 'NEXTJS', 'NODEJS', 'VERCEL', 'LISP',
    'TYPESCRIPT', 'ANGULAR', 'VUEJS', 'DOCKER', 'KUBERNETES'
];

const HangmanDrawing = ({ errors }) => {
    return (
        <View style={styles.hangmanContainer}>
            <View style={[styles.line, { height: 180, width: 4, left: 0 }]} />
            <View style={[styles.line, { height: 4, width: 100, top: 0, left: 0 }]} />
            <View style={[styles.line, { height: 25, width: 4, top: 0, left: 100 }]} />
            <View style={[styles.line, { height: 4, width: 150, bottom: 0, left: -50 }]} />

            {errors >= 1 && <View style={[styles.bodyPart, styles.head]} />}
            {errors >= 2 && <View style={[styles.bodyPart, styles.body]} />}
            {errors >= 3 && <View style={[styles.bodyPart, styles.leftArm]} />}
            {errors >= 4 && <View style={[styles.bodyPart, styles.rightArm]} />}
            {errors >= 5 && <View style={[styles.bodyPart, styles.leftLeg]} />}
            {errors >= 6 && <View style={[styles.bodyPart, styles.rightLeg]} />}
        </View>
    );
};

export default function JogoScreen() {
    const [palavraSecreta, setPalavraSecreta] = useState('');
    const [letrasCorretas, setLetrasCorretas] = useState([]);
    const [letrasErradas, setLetrasErradas] = useState([]);
    const [tentativasRestantes, setTentativasRestantes] = useState(6);
    const [statusJogo, setStatusJogo] = useState('jogando');
    const [letraDigitada, setLetraDigitada] = useState('');

    const iniciarNovoJogo = () => {
        const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
        setPalavraSecreta(novaPalavra);
        setLetrasCorretas([]);
        setLetrasErradas([]);
        setTentativasRestantes(6);
        setStatusJogo('jogando');
        setLetraDigitada('');
    };

    const lidarComTentativa = () => {
        if (statusJogo !== 'jogando') return;

        const letra = letraDigitada.trim().toUpperCase();
        setLetraDigitada('');

        if (!letra || letra.length !== 1) {
            Alert.alert('Erro', 'Por favor, digite apenas uma letra.');
            return;
        }

        if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
            Alert.alert('Aviso', `A letra '${letra}' já foi tentada!`);
            return;
        }

        if (palavraSecreta.includes(letra)) {
            setLetrasCorretas([...letrasCorretas, letra]);
        } else {
            setLetrasErradas([...letrasErradas, letra]);
            setTentativasRestantes(tentativasRestantes - 1);
        }
    };

    useEffect(() => {
        iniciarNovoJogo();
    }, []);

    useEffect(() => {
        if (!palavraSecreta) return;

        if (tentativasRestantes <= 0) {
            setStatusJogo('derrota');
        }

        const palavraCompleta = palavraSecreta.split('').map(l => l.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        const letrasCorretasNormalizadas = letrasCorretas.map(l => l.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

        const ganhou = palavraCompleta.every(letra => letrasCorretasNormalizadas.includes(letra));
        if (ganhou) {
            setStatusJogo('vitoria');
        }
    }, [letrasCorretas, tentativasRestantes, palavraSecreta]);

    const palavraOculta = palavraSecreta.split('').map((letra, index) => (
        <Text key={index} style={styles.hiddenLetter}>
            {letrasCorretas.includes(letra) ? letra : '_'}
        </Text>
    ));

    const MensagemFinal = () => {
        const isVictory = statusJogo === 'vitoria';
        const messageStyle = isVictory ? styles.victoryText : styles.defeatText;
        const message = isVictory ? 'Parabéns, você venceu!' : 'Você perdeu!';

        return (
            <View style={styles.messageContainer}>
                <Text style={messageStyle}>{message}</Text>
                <Text style={styles.solutionText}>
                    A palavra era: <Text style={styles.solutionWord}>{palavraSecreta}</Text>
                </Text>
                <Pressable
                    onPress={iniciarNovoJogo}
                    style={({ pressed }) => [
                        styles.restartButton,
                        { opacity: pressed ? 0.8 : 1 }
                    ]}
                >
                    <Text style={styles.restartButtonText}>Reiniciar Jogo</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <View style={styles.container}>

            <Text style={styles.subtitle}>Tecnologias, Linguagens e Frameworks</Text>

            <HangmanDrawing errors={6 - tentativasRestantes} />

            <View style={styles.wordContainer}>
                {palavraOculta}
            </View>

            <Text style={styles.guessesText}>Letras erradas: {letrasErradas.join(', ')}</Text>
            <Text style={styles.guessesText}>Tentativas restantes: {tentativasRestantes}</Text>

            {statusJogo === 'jogando' ? (
                <View style={styles.inputForm}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setLetraDigitada}
                        value={letraDigitada}
                        maxLength={1}
                        autoCapitalize="characters"
                        placeholder="A-Z"
                        placeholderTextColor="#888"
                        editable={statusJogo === 'jogando'}
                        onSubmitEditing={lidarComTentativa}
                    />
                    <Pressable
                        onPress={lidarComTentativa}
                        style={({ pressed }) => [
                            styles.button,
                            { opacity: pressed ? 0.8 : 1 }
                        ]}
                        disabled={statusJogo !== 'jogando'}
                    >
                        <Text style={styles.buttonText}>Tentar</Text>
                    </Pressable>
                </View>
            ) : (
                <MensagemFinal />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1E1E1E',
    },
    subtitle: {
        fontSize: 18,
        color: '#FFD700',
        marginBottom: 20,
    },

    hangmanContainer: {
        width: 150,
        height: 200,
        marginTop: 10,
        marginBottom: 40,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#333',
    },
    line: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
    },
    bodyPart: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderRadius: 999,
    },
    head: {
        width: 40,
        height: 40,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        backgroundColor: 'transparent',
        top: 25,
        left: 80,
    },
    body: {
        width: 4,
        height: 60,
        top: 65,
        left: 98,
    },
    leftArm: {
        width: 40,
        height: 4,
        top: 75,
        left: 58,
        transform: [{ rotate: '45deg' }],
    },
    rightArm: {
        width: 40,
        height: 4,
        top: 75,
        left: 90,
        transform: [{ rotate: '-45deg' }],
    },
    leftLeg: {
        width: 40,
        height: 4,
        top: 135,
        left: 70,
        transform: [{ rotate: '45deg' }],
    },
    rightLeg: {
        width: 40,
        height: 4,
        top: 135,
        left: 90,
        transform: [{ rotate: '-45deg' }],
    },

    wordContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    hiddenLetter: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginHorizontal: 5,
        borderBottomWidth: 4,
        borderColor: '#FFFFFF',
        minWidth: 25,
        textAlign: 'center',
    },

    inputForm: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'center',
    },
    textInput: {
        width: 60,
        height: 50,
        borderWidth: 2,
        borderColor: '#333',
        backgroundColor: '#333',
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'center',
        borderRadius: 8,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    guessesText: {
        color: '#CCCCCC',
        fontSize: 16,
        marginBottom: 5,
    },
    messageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    victoryText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 10,
    },
    defeatText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF4D4D',
        marginBottom: 10,
    },
    solutionText: {
        fontSize: 18,
        color: '#CCCCCC',
    },
    solutionWord: {
        fontWeight: 'bold',
        color: '#FFD700',
    },
    restartButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    restartButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});