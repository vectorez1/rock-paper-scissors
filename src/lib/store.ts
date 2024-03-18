import { create, SetState } from 'zustand';

interface StoreState {
  score: number;
  incrementScore: () => void;
  resetScore: () => void;
}

export const useStore = create<StoreState>((setState: SetState<StoreState>) => ({
  score: 0,
  incrementScore: () => setState((state: StoreState) => ({ score: state.score + 1 })),
  resetScore: () => setState({ score: 0 }),
}))
