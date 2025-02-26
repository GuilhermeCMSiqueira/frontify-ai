import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./index";
import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";

describe("Navbar", () => {
  it("should render the navbar", () => {
    render(<Navbar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Frontify AI")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });
});