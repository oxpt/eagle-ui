import { useState, useEffect } from 'react';

// atom function returns a config object which contains initial value
export const atomString = (initialValue: string) => ({ init: initialValue });
export const atomNumber = (initialValue: number) => ({ init: initialValue });
export const atomBoolean = (initialValue: boolean) => ({ init: initialValue });

export const alartCountAtom = atomNumber(0);
export const alartOpenAtom = atomBoolean(true);
export const experimentEnableAtom = atomBoolean(false);
export const openCookieAtom = atomBoolean(false);

// we need to keep track of the state of the atom.
// we are using weakmap to avoid memory leaks
const atomStateMap = new WeakMap();
const getAtomState = (atom: any) => {
  let atomState = atomStateMap.get(atom);
  if (!atomState) {
    atomState = { value: atom.init, listeners: new Set() };
    atomStateMap.set(atom, atomState);
  }
  return atomState;
};

// useAtom hook returns a tuple of the current value
// and a function to update the atom's value
export const useAtom = (atom: any) => {
  const atomState = getAtomState(atom);
  const [value, setValue] = useState(atomState.value);
  useEffect(() => {
    const callback = () => setValue(atomState.value);

    // same atom can be used at multiple components, so we need to
    // keep listening for atom's state change till component is unmounted.
    atomState.listeners.add(callback);
    callback();
    return () => atomState.listeners.delete(callback);
  }, [atomState]);

  const setAtom = (nextValue: any) => {
    atomState.value = nextValue;

    // let all the subscribed components know that the atom's state has changed
    atomState.listeners.forEach((l: any) => l());
  };

  return [value, setAtom];
};
