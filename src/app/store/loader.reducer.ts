import { Action, createReducer, on } from '@ngrx/store';
import {hideLoader, showLoader} from './actions/loader.actions';


export const loaderFeatureKey = 'loader';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false
};

const loaderReducer = createReducer(
  initialState,
  on(showLoader, state => ({...state, isLoading: true})),
  on(hideLoader, state => ({...state, isLoading: false})),
);

// tslint:disable-next-line:typedef
export function reducer(state: State | undefined, action: Action) {
  return loaderReducer(state, action);
}

