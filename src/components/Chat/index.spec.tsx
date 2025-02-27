import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Chat from "./index";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, jest } from "@jest/globals";

// Mock the scrollIntoView function
window.HTMLElement.prototype.scrollIntoView = jest.fn();

// Mock global fetch
global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ output: "Mocked response" }),
})
) as unknown as jest.MockedFunction<typeof fetch>;

describe("Chat", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render Chat component", () => {
    render(<Chat proficiency={""} technology={""} />);
    expect(screen.getByText("Olá! Como posso te ajudar hoje?")).toBeInTheDocument();
  });

  it("should send a message", () => {
    render(<Chat proficiency={""} technology={""} />);
    const input = screen.getByPlaceholderText("Type a message...");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.click(button);
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("should make an API request to the correct URL when sending a message", async () => {
    render(<Chat proficiency={""} technology={""} />);
    
    const input = screen.getByPlaceholderText("Type a message...");
    const button = screen.getByRole("button");
    
    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: "Test message" }),
      });
    });
  });

});