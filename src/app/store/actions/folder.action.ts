import {Action} from '@ngrx/store';

export enum FolderActionsTypes {
  GetFolders = '[Folder] Get Folders'
}
export class GetFolders implements Action {
  public readonly type = FolderActionsTypes.GetFolders;
}
export type FolderActions = GetFolders;
