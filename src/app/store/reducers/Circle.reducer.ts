import { initialCircle, CircleState } from '../state/circle.state';
import { CircleActions } from '../actions/circle.action';

export const circleReducer = (state = initialCircle, action: CircleActions): CircleState => {
  switch (action.type) {
    default:
      return state;
  }
};
