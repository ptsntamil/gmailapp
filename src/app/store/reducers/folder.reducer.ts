import {FolderState, initialFolderState} from '../state/folder.state';
import {FolderActions, FolderActionsTypes} from '../actions/folder.action';

export const folderReducer = (state = initialFolderState, action: FolderActions): FolderState => {
  switch (action.type) {
    default:
      return state;
  }
};
