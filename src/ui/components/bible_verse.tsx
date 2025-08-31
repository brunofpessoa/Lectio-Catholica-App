import { StyleSheet, Text, View, Button } from 'react-native';
import { useTheme } from '../../presentation/theme_state';
import { useBible } from '../../presentation/bible_state';
import { Verse } from 'src/domain/entities/bible/verse';
import { CicReference } from 'src/domain/entities/bible/cic_reference';

type Props = {
    verse: Verse;
};

export function BibleVerse({ verse }: Props) {
    const theme = useTheme(t => t.currentTheme);
    const bookId = useBible(t => t.selectedBookId);

    const colorScheme = StyleSheet.create({
        text: {
            color: theme.textPrimary,
        },
    });

    const getCicReferenceMultipleVerses = (cicReferences: CicReference[] | undefined) => {
        if (!cicReferences) {
            return [];
        }
        return cicReferences.filter(cr => {
            if (cr.verseStar && cr.verseEnd) {
                if (cr.verseStar !== cr.verseEnd) {
                    return cr;
                }
            }
        });
    };

    const formatCicReferenceMultipleVerses = (cr: CicReference) => {
        let chapters =
            cr.chapterStart !== cr.chapterEnd ? `${cr.chapterStart}-${cr.chapterEnd}` : String(cr.chapterStart);
        let verses = cr.verseStar !== cr.verseEnd ? `${cr.verseStar}-${cr.verseEnd}` : String(cr.verseStar);
        return `${chapters},${verses}`;
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={[colorScheme.text, styles.verseNumber]}>{verse.number}</Text>
                <Text style={[colorScheme.text, styles.verseText]}>{verse.text}</Text>
                <View style={styles.buttons}>{verse.cicReferences && <Button onPress={() => {}} title="CIC" />}</View>
            </View>
            {getCicReferenceMultipleVerses(verse.cicReferences).map(cr => (
                <Button title={formatCicReferenceMultipleVerses(cr)} />
            ))}
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    verseNumber: {
        flex: 1,
    },
    verseText: {
        marginRight: 'auto',
        flex: 8,
    },
    buttons: {
        flex: 1,
    },
});
