import { Folder } from 'src/app/models/folder';

export interface FolderState {
  folders: Folder[];
}

export const initialFolderState: FolderState = {
  folders: [{
    name: 'Inbox',
    unread: 4,
    active: true
  }, {
    name: 'Starred',
    unread: 8
  }, {
    name: 'Important',
    unread: 43
  }, {
    name: 'Sent Mail',
    unread: 5
  }, {
    name: 'Spam',
    unread: 21
  }, {
    name: 'Bin',
    unread: 4
  }]
};

export function getInitialFolder(): FolderState {
  return initialFolderState;
}
