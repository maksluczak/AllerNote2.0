import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import CustomRadioToEdit from '../CustomRadioToEdit';

describe("CustomRadioToEdit component", () => {
  const defaultProps = {
    currentValue: 3,
    symptom: 'Test Symptom'
  };

  it("renders symptom label correctly", () => {
    render(<CustomRadioToEdit {...defaultProps} />);
    expect(screen.getByText("Test Symptom:")).toBeInTheDocument();
  });

  it("renders 5 radio buttons", () => {
    render(<CustomRadioToEdit {...defaultProps} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(5);
  });

  it("displays correct number of filled buttons based on currentValue", () => {
    render(<CustomRadioToEdit {...defaultProps} />);
    const buttons = screen.getAllByRole("button");
    
    expect(buttons[0]).toHaveClass("bg-eden-700");
    expect(buttons[1]).toHaveClass("bg-eden-700"); 
    expect(buttons[2]).toHaveClass("bg-eden-700");
    
    expect(buttons[3]).toHaveClass("bg-white");
    expect(buttons[4]).toHaveClass("bg-white");
  });

  it("buttons should be disabled", () => {
    render(<CustomRadioToEdit {...defaultProps} />);
    const buttons = screen.getAllByRole("button");
    
    buttons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });

  it("renders with null currentValue", () => {
    render(<CustomRadioToEdit {...defaultProps} currentValue={null} />);
    const buttons = screen.getAllByRole("button");
    
    buttons.forEach(button => {
      expect(button).toHaveClass("bg-white");
    });
  });
});
