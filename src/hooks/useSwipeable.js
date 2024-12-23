import { useCallback } from 'react';
export function useSwipeable({ onSwipedLeft, onSwipedRight }) {
    const threshold = 50;
    let startX;
    const onTouchStart = useCallback((e) => {
        startX = e.touches[0].clientX;
    }, []);
    const onTouchEnd = useCallback((e) => {
        const diffX = startX - e.changedTouches[0].clientX;
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0 && onSwipedLeft) {
                onSwipedLeft();
            }
            else if (diffX < 0 && onSwipedRight) {
                onSwipedRight();
            }
        }
    }, [onSwipedLeft, onSwipedRight]);
    return {
        onTouchStart,
        onTouchEnd,
    };
}
