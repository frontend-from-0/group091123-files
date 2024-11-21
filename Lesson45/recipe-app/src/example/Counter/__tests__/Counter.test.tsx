import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Counter } from '..';

describe('<Counter /> component', () => {
  it('should render correctly', () => {
    render(<Counter />);

    const countLabel = screen.getByTestId('count-label');
    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
  
    expect(countLabel).toBeInTheDocument();
    expect(countValue).toBeInTheDocument();
    expect(countValue).toHaveTextContent('0');
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it('should render correctly with initial state specified', () => {
    render(<Counter initialState={{count: 5}}/>);

    const countLabel = screen.getByTestId('count-label');
    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
  
    expect(countLabel).toBeInTheDocument();
    expect(countValue).toBeInTheDocument();
    expect(countValue).toHaveTextContent('5');
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it('should increment count correctly when clicking on the + button', async () => {
    render(<Counter />);

    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByTestId('increment-button');
  
    expect(countValue).toHaveTextContent('0');
    await userEvent.click(incrementButton);
    expect(countValue).toHaveTextContent('1');

    await userEvent.dblClick(incrementButton);
    expect(countValue).toHaveTextContent('3');
  });

  it('should decrement count correctly when clicking on the - button', async () => {
  });
});

describe('counterReducer', () => {
  it('should increment the count by 1 when the action type is INCREMENT', () => {});

  it('should decrement the count by 1 when the action type is DECREMENT', () => {});

  it('should not increment or decrement the count when the action type does not match DECREMENT or INCREMENT', () => {});
});
