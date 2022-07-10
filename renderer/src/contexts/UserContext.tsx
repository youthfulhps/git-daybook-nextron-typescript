import React, { useMemo, createContext, ReactNode } from 'react';
import Store from 'electron-store';
import { isString } from '../guards';

type UserContextProviderProps = {
  children: ReactNode;
};

type UserContextType = {
  userId: string;
  setUserId: (userId: string) => void;
};

const userContextInitialState = {
  userId: '',
  setUserId: () => {},
};

export const UserContext = createContext<UserContextType>(userContextInitialState);

function UserContextProvider({ children }: UserContextProviderProps) {
  const store = new Store();

  const getUserId = () => {
    const userId = store.get('gitbook:userId');
    return isString(userId) ? String(userId) : '';
  };

  const setUserId = (userId: string) => {
    store.set('gitbook:userId', userId);
  };

  const userContextState = useMemo<UserContextType>(
    () => ({
      userId: getUserId(),
      setUserId,
    }),
    [getUserId, setUserId],
  );

  return <UserContext.Provider value={userContextState}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
