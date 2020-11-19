import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as Loading from './loader.reducer';

import { environment } from '../../environments/environment';


export interface AppState {
  loading: Loading.State;
}

export const reducers: ActionReducerMap<AppState> = {
  loading: Loading.reducer
};

export const selectLoader = (state: AppState) => state.loading.isLoading;


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
