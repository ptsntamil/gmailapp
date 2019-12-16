import { FolderState, initialFolderState } from './folder.state';
import { CircleState, initialCircle } from './circle.state';

export interface AppState {
  folders: FolderState;
  circles: CircleState;
}

export const initalAppState: AppState = {
  folders: initialFolderState,
  circles: initialCircle
};

export function getInitialAppState(): AppState {
  return initalAppState;
}
