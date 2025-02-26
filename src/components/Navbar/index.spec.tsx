import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./index";
import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";
import { useRouter } from "next/router";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Navbar", () => {
  it("should render the navbar", () => {
    render(<Navbar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Frontify AI")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("should redirect the user to the FAQ page", async () => {
    render(<Navbar />);
    const faq = screen.getByText("FAQ");
    expect(faq).toBeInTheDocument();
    fireEvent.click(faq);
    await mockRouter.push("/faqPage");
    expect(mockRouter.asPath).toBe("/faqPage");
  });
});