import React, { createContext, useContext, useState } from 'react';

export type ThreadSummary = {
  id: string;
  title: string;
};

interface ThreadHistoryContextType {
  threads: ThreadSummary[];
  addThread: (thread: ThreadSummary) => void;
  updateThread: (id: string, updates: Partial<ThreadSummary>) => void;
  deleteThread: (id: string) => void;
  getThread: (id: string) => ThreadSummary | undefined;
  clearThreads: () => void;
}

const ThreadHistoryContext = createContext<
  ThreadHistoryContextType | undefined
>(undefined);

export const useThreadHistory = () => {
  const context = useContext(ThreadHistoryContext);
  if (context === undefined) {
    throw new Error(
      'useThreadHistory must be used within a ThreadHistoryProvider'
    );
  }
  return context;
};

export const ThreadHistoryProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [threads, setThreads] = useState<ThreadSummary[]>([]);

  const addThread = (thread: ThreadSummary) => {
    setThreads((prevThreads) => [thread, ...prevThreads]);
  };

  const updateThread = (id: string, updates: Partial<ThreadSummary>) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === id ? { ...thread, ...updates } : thread
      )
    );
  };

  const deleteThread = (id: string) => {
    setThreads((prevThreads) =>
      prevThreads.filter((thread) => thread.id !== id)
    );
  };

  const getThread = (id: string) => {
    return threads.find((thread) => thread.id === id);
  };

  const clearThreads = () => {
    setThreads([]);
  };

  return (
    <ThreadHistoryContext.Provider
      value={{
        threads,
        addThread,
        updateThread,
        deleteThread,
        getThread,
        clearThreads,
      }}
    >
      {children}
    </ThreadHistoryContext.Provider>
  );
};
