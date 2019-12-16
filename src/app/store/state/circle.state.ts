import { Circle } from 'src/app/models/circle';
import { CircleActionsTypes } from '../actions/circle.action';

export interface CircleState {
  circles: Circle[];
}
export const initialCircle: CircleState = {
  circles: [{
    name: 'friends',
    icon: 'assets/icons/dot_rounded_yellow.svg'
  }, {
    name: 'Family',
    icon: 'assets/icons/dot_rounded_green.svg'
  }, {
    name: 'Working',
    icon: 'assets/icons/dot_rounded_blue.svg'
  }, {
    name: 'Clients',
    icon: 'assets/icons/circle_violet.svg'
  }, {
    name: 'Urgent',
    icon: 'assets/icons/circle_red.svg'
  }]
};

export function getInitialCircle(): CircleState {
  return initialCircle;
}
