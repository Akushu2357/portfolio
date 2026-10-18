import { useEffect, useRef, useState } from 'react';
function focusAndScroll(element) {
  if (!element) return;
  element.focus({ preventScroll: true });
  element.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'nearest',
  });
}
export default function useDetailNavigation() {
  const panelRef = useRef(null);
  const returnTarget = useRef(null);
  const [request, setRequest] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    if (!request || !window.matchMedia('(max-width: 899px)').matches) return;
    focusAndScroll(
      showDetails
        ? panelRef.current
        : returnTarget.current?.isConnected
          ? returnTarget.current
          : panelRef.current?.closest('section')?.querySelector('input'),
    );
  }, [request, showDetails]);
  const revealDetails = (event) => {
    returnTarget.current = event.currentTarget;
    setShowDetails(true);
    setRequest((value) => value + 1);
  };
  const returnToSelection = () => {
    setShowDetails(false);
    setRequest((value) => value + 1);
  };
  return {
    panelRef,
    revealDetails,
    returnToSelection,
    hasSelection: request > 0,
  };
}
