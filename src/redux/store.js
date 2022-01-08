import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  contactsReducer,
  account,
  showContacts,
} from "../redux/contacts/contacts-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistContactsConfig = {
  key: "account",
  storage,
  whitelist: ["token"],
};

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    // contacts: persistReducer(persistContactsConfig, contactsReducer),
    contacts: contactsReducer,
    account: persistReducer(persistContactsConfig, account),
    showContacts,
    // account,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  //   devTools: process.env.NODE_ENV !== "production",
  // });
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

// export { store };
export { store, persistor };
