import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { folderReducer } from './folder.reducer';
import { circleReducer } from './Circle.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
  folders: folderReducer,
  circles: circleReducer
};
