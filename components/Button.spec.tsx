import { render, screen } from '@testing-library/react';
import { Button } from "./Button"

describe("Button component", () => {
  it("表示されているか", () => {
    render(<Button />)
    const CopyrightElement = screen.getByText(/Button/i)
    expect(CopyrightElement).toBeInTheDocument()
  })
})