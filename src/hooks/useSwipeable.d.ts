interface SwipeableHandlers {
    onSwipedLeft?: () => void;
    onSwipedRight?: () => void;
}
export declare function useSwipeable({ onSwipedLeft, onSwipedRight }: SwipeableHandlers): {
    onTouchStart: (e: TouchEvent) => void;
    onTouchEnd: (e: TouchEvent) => void;
};
export {};
