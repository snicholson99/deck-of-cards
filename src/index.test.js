import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const exampleCards = [
  { index: 1,  value: '2', suit: 'C' },
  { index: 14, value: '2', suit: 'S' },
  { index: 2,  value: '3', suit: 'C' },
  { index: 3,  value: '4', suit: 'C' },
  { index: 4,  value: '5', suit: 'C' },
  { index: 46, value: '8', suit: 'D' },
  { index: 37, value: 'Q', suit: 'H' },
  { index: 5,  value: '6', suit: 'C' }
]

it('should return a sorted array', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.instance().sortLowToHigh(exampleCards)).toEqual([
    { index: 1,  value: '2', suit: 'C' },
    { index: 2,  value: '3', suit: 'C' },
    { index: 3,  value: '4', suit: 'C' },
    { index: 4,  value: '5', suit: 'C' },
    { index: 5,  value: '6', suit: 'C' },
    { index: 14, value: '2', suit: 'S' },
    { index: 37, value: 'Q', suit: 'H' },
    { index: 46, value: '8', suit: 'D' }
  ]);
});

it('should return a sorted array', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.instance().randomiseCards(exampleCards)).not.toEqual([
    { index: 1,  value: '2', suit: 'C' },
    { index: 2,  value: '3', suit: 'C' },
    { index: 3,  value: '4', suit: 'C' },
    { index: 4,  value: '5', suit: 'C' },
    { index: 5,  value: '6', suit: 'C' },
    { index: 14, value: '2', suit: 'S' },
    { index: 37, value: 'Q', suit: 'H' },
    { index: 46, value: '8', suit: 'D' }
  ]);
});



// shuffleCards = (row) => {
//   this.setState({ row: row.sort(() => Math.random() - 0.5) })
// }