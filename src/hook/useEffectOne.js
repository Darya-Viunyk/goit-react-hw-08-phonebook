import { useEffect } from 'react';

function useEffectOne(effect) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
}

export default useEffectOne;
