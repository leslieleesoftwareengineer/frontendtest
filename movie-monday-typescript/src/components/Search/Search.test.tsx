import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

const onSearchFn = jest.fn();
test("onSearch function should be run", () => {
  render(<Search onSearch={onSearchFn}/>);
  const button = screen.getByRole('button');
  button.click();
  expect(onSearchFn).toHaveBeenCalled();
});
