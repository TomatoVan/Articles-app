import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type {
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey,
};
export type { AppDispatch };
