import { MDContentBox } from '../index';

export default {
  title: 'MDContentBox',
  component: MDContentBox,
};

export const Default = () => <MDContentBox>Content goes here</MDContentBox>;

export const Colored = () => <MDContentBox backgroundColor='green.100' boxColor = "teal.100">Content goes here</MDContentBox>;
