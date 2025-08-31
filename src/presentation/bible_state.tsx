import { useCases } from 'src/application/factories/usecases';
import { create } from 'zustand';

type BibleStateType = {
    selectedBookId: number;
    selectedChapterId: number;
    selectedVerseId: number | null;
    setSelectedBookId: (id: number) => void;
    setSelectedChapterId: (id: number) => void;
    setSelectedVerseId: (id: number) => void;
};

export const useBible = create<BibleStateType>(set => ({
    selectedBookId: 1,
    selectedChapterId: 1,
    selectedVerseId: null,
    setSelectedBookId: (id: number) =>
        set({
            selectedBookId: id,
            selectedChapterId: useCases.bible.getBibleChapterList(id)[0].value,
            selectedVerseId: null,
        }),
    setSelectedChapterId: (id: number) => set({ selectedChapterId: id, selectedVerseId: null }),
    setSelectedVerseId: (id: number) => set({ selectedVerseId: id }),
}));
