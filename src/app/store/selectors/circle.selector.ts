import { createSelector} from '@ngrx/store';
import { AppState } from '../state/app.state';
import { CircleState } from '../state/circle.state';

const selectCircles = (state: AppState) => state.circles;

export const selectCircleList = createSelector(selectCircles, (state: CircleState) => state.circles);
