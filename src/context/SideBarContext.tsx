import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import useLocalStorage from '../services/utils/localStorage/localStorage';
import StorageKeys from '../services/utils/localStorage/StorageKeys';

type State = {
  expandedSideBar?: boolean | undefined;
};
type Action = {
  type: ActionType;
};

enum ActionType {
  TOGGLE_SIDEBAR_ACTION = 'TOGGLE_SIDEBAR_ACTION',
}

const initialState = { expandedSideBar: false } as State;
const sideBarContext = createContext({
  state: initialState,
  dispatch: () => {},
} as { state: State; dispatch: Dispatch<Action> });
const { Provider } = sideBarContext;

const SideBarProvider = ({ children }: PropsWithChildren<{}>) => {
  const [expanded, setExpanded] = useLocalStorage(
    StorageKeys.EXPANDED_SIDEBAR,
    false,
  );
  const [state, dispatch] = useReducer((stateReduce: State, action: Action) => {
    switch (action.type) {
      case ActionType.TOGGLE_SIDEBAR_ACTION: {
        const newValue = !stateReduce.expandedSideBar;
        setExpanded(newValue);
        return { ...stateReduce, expandedSideBar: newValue };
      }
      default:
        return stateReduce;
    }
  }, initialState);

  useEffect(() => {
    expanded !== state.expandedSideBar &&
      dispatch({ type: ActionType.TOGGLE_SIDEBAR_ACTION });
  }, [expanded, state.expandedSideBar]);

  // eslint-disable-next-line react/jsx-one-expression-per-line
  return <Provider value={{ state, dispatch }}> {children} </Provider>;
};

const useSideBarContext = () => {
  const { state, dispatch } = useContext(sideBarContext);
  const toggleSideBar = useCallback(() => {
    dispatch({ type: ActionType.TOGGLE_SIDEBAR_ACTION });
  }, [dispatch]);
  return { state, toggleSideBar };
};

export { useSideBarContext, SideBarProvider };
