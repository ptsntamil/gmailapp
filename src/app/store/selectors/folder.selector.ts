import { createSelector} from '@ngrx/store';
import { AppState } from '../state/app.state';
import { FolderState } from '../state/folder.state';

const selectFolders = (state: AppState) => state.folders;

export const selectFolderList = createSelector(selectFolders, (state: FolderState) => state.folders);
