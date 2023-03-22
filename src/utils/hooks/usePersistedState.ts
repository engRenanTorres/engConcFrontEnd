import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

//Solution for normal react. Do not work on Nextjs because localStorage in not mountad in server side
export function usePersistedState<T>(
  key: string,
  initialState: unknown,
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) return JSON.parse(storageValue);
    else return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
