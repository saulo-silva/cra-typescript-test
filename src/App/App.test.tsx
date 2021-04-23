import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const { container } = render(<App />)
  const linkElement = screen.getByText(/learn react/i);
  const logo = screen.getByRole('img');
  const selectItem = screen.getByLabelText('Items');
  const deleteButton = screen.getByText('Delete');

  expect(deleteButton).not.toHaveDescription();
  expect(deleteButton).toHaveDescription('');

  expect(logo).toHaveClass('App-logo');
  expect(linkElement).toHaveClass('App-link');
  expect(linkElement).toBeInTheDocument();

  fireEvent.change(selectItem, { target: { value: 1 } })
  expect(selectItem).toHaveDisplayValue('Value 1');
  expect(selectItem.value).toEqual('1');

});
