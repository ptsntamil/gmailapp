import {Action} from '@ngrx/store';

export enum CircleActionsTypes {
  GetCircles = '[Circle] Get Folders'
}
export class GetCircles implements Action {
  public readonly type = CircleActionsTypes.GetCircles;
}
export type CircleActions = GetCircles;
