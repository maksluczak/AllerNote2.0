import "@testing-library/jest-dom";
import { render, fireEvent, screen } from '@testing-library/react';
import CustomRadio from '../CustomRadio';

describe('CustomRadio component', () => {
  const mockStateSetter = jest.fn();
  const defaultProps = {
    stateSetter: mockStateSetter,
    currentValue: null,
    symptom: 'Test Symptom'
  };

  beforeEach(() => {
    mockStateSetter.mockClear();
  });

  it('renders symptom label correctly', () => {
    render(<CustomRadio {...defaultProps} />);
    expect(screen.getByText('Test Symptom:')).toBeInTheDocument();
  });

  it('renders 5 radio buttons', () => {
    render(<CustomRadio {...defaultProps} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  it('calls stateSetter with correct value when button is clicked', () => {
    render(<CustomRadio {...defaultProps} />);
    const buttons = screen.getAllByRole('button');
    
    fireEvent.click(buttons[2]); 
    expect(mockStateSetter).toHaveBeenCalledWith(3);
  });

  it('deselects value when clicking same button twice', () => {
    render(<CustomRadio {...defaultProps} currentValue={3} />);
    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[2]);
    expect(mockStateSetter).toHaveBeenCalledWith(null);
  });

  it('updates button styles on hover', () => {
    render(<CustomRadio {...defaultProps} />);
    const buttons = screen.getAllByRole('button');
    
    fireEvent.mouseEnter(buttons[2]);
    expect(buttons[0]).toHaveClass('bg-eden-700');
    expect(buttons[1]).toHaveClass('bg-eden-700');
    expect(buttons[2]).toHaveClass('bg-eden-700');
    expect(buttons[3]).toHaveClass('bg-white');
    expect(buttons[4]).toHaveClass('bg-white');
    
    fireEvent.mouseLeave(buttons[2]);
    buttons.forEach(button => {
      expect(button).toHaveClass('bg-white');
    });
  });

  it('maintains selected value styling', () => {
    render(<CustomRadio {...defaultProps} currentValue={3} />);
    const buttons = screen.getAllByRole('button');
    
    expect(buttons[0]).toHaveClass('bg-eden-700');
    expect(buttons[1]).toHaveClass('bg-eden-700');
    expect(buttons[2]).toHaveClass('bg-eden-700');
    expect(buttons[3]).toHaveClass('bg-white');
    expect(buttons[4]).toHaveClass('bg-white');
  });
});
