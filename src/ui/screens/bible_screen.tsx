import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useBible } from '../../presentation/bible_state';
import { BibleVerse } from '../components/bible_verse';
import { useCases } from '../../application/factories/usecases';

export function BibleScreen() {
    const [isBookDropDownOpen, setIsBookDropDownOpen] = useState(false);
    const [isChapterDropDownOpen, setIsChapterDropDownOpen] = useState(false);

    const bookId = useBible(s => s.selectedBookId);
    const chapterId = useBible(s => s.selectedChapterId);
    const setBook = useBible(s => s.setSelectedBookId);
    const setChapter = useBible(s => s.setSelectedChapterId);

    DropDownPicker.setLanguage('PT');

    function bindDropDown<T>(stateValue: T, zustandSetter: (v: T) => void) {
        return (val: T | ((curr: T) => T)) => {
            const newValue = typeof val === 'function' ? (val as (curr: T) => T)(stateValue) : val;
            zustandSetter(newValue);
        };
    }

    return (
        <View>
            <View>
                <DropDownPicker
                    closeAfterSelecting
                    searchable
                    open={isBookDropDownOpen}
                    value={bookId}
                    items={useCases.bible.getBibleBookList()}
                    setOpen={setIsBookDropDownOpen}
                    setValue={bindDropDown(bookId, setBook)}
                />

                <DropDownPicker
                    searchable
                    closeAfterSelecting
                    open={isChapterDropDownOpen}
                    value={chapterId}
                    items={useCases.bible.getBibleChapterList(bookId)}
                    setOpen={setIsChapterDropDownOpen}
                    setValue={bindDropDown(chapterId, setChapter)}
                />
            </View>
            <ScrollView>
                {useCases.bible.getBibleVerses(bookId, chapterId).map(v => (
                    <BibleVerse key={v.id} verse={v} />
                ))}
            </ScrollView>
        </View>
    );
}
