import { View, Modal, StyleSheet, Text, Pressable } from 'react-native';
import { Verse } from 'src/domain/entities/bible/verse';

type Props = {
    visible?: boolean;
    setVisible: (visible: boolean) => void;
    bibleVerse: Verse;
};

export function CicModal({ visible, setVisible, bibleVerse }: Props) {
    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}></View>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setVisible(false)}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
