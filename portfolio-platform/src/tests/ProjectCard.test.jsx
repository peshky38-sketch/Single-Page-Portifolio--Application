import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

describe("ProjectCard", () => {
  const project = {
    id: 1,
    title: "Test Portfolio",
    description: "A test project",
    category: "React",
    technologies: ["React", "JavaScript"],
    image: "test-image.jpg",
  };

  test("displays project information", () => {
    render(<ProjectCard project={project} />);

    expect(screen.getByText("Test Portfolio")).toBeInTheDocument();
    expect(screen.getByText("A test project")).toBeInTheDocument();

    // Check that React appears at least once
    expect(screen.getAllByText("React")).toHaveLength(2);

    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });

  test("renders the project image", () => {
    render(<ProjectCard project={project} />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "test-image.jpg");
    expect(image).toHaveAttribute("alt", "Test Portfolio");
  });
});