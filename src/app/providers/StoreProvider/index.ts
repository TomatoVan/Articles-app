import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import {
    AppDispatch,
    createReduxStore,
} from 'app/providers/StoreProvider/config/store';
import type { StateSchema, ThunkExtraArg, ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

export {
    StoreProvider, createReduxStore, StateSchema, AppDispatch, ThunkExtraArg, ThunkConfig,
};
