import { bind } from '@react-rxjs/core';
import { useEffect, useMemo } from 'react';
import { IAlgorithm } from "../../interfaces";
import { createObservable } from "../../utils";

export interface IVisualizerState {
  play: boolean,
  array: number [],
  delayTime: number,
  selectedAlgorithms: IAlgorithm [],
  menuIsOpen: boolean,
}

const [ visualizerObs, dispatch ] = createObservable<IVisualizerState>({
  play: false,
  array: [],
  delayTime: 0.2,
  selectedAlgorithms: [],
  menuIsOpen: false,
})

const [ useVisualizerConfigsHook, useVisualizerConfigsHookObs$ ] = bind(visualizerObs);

export const useVisualizerConfigs = () : [ IVisualizerState, typeof dispatch ]  => {
  const subscription = useMemo(() => useVisualizerConfigsHookObs$.subscribe(), []);
  const state = useVisualizerConfigsHook();

  useEffect(() => {
    return () => {
      subscription.unsubscribe()
    }
  }, [subscription])
  
  return [ state, dispatch ];
};
