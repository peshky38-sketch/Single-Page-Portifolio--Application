import {
  render,
  screen,
} from "@testing-library/react";

import { describe, expect, jest, test } from "@jest/globals";
import userEvent from "@testing-library/user-event";

import ProjectForm from "../components/ProjectForm";

describe("ProjectForm", () => {
  test("shows validation message when required fields are empty", async () => {
    const user = userEvent.setup();

    const handleAddProject = jest.fn();

    render(
      <ProjectForm
        onAddProject={handleAddProject}
        onClose={jest.fn()}
      />
    );

    const submitButton =
      screen.getByRole("button", {
        name: "Add Project",
      });

    await user.click(submitButton);

    expect(
      screen.getByRole("alert")
    ).toBeInTheDocument();

    expect(
      handleAddProject
    ).not.toHaveBeenCalled();
  });

  test("adds a project when the form is valid", async () => {
    const user = userEvent.setup();

    const handleAddProject = jest.fn();

    render(
      <ProjectForm
        onAddProject={handleAddProject}
        onClose={jest.fn()}
      />
    );

    await user.type(
      screen.getByLabelText("Project Title *"),
      "My Website"
    );

    await user.type(
      screen.getByLabelText("Description *"),
      "My portfolio website"
    );

    await user.type(
      screen.getByLabelText("Category *"),
      "Web Development"
    );

    await user.type(
      screen.getByLabelText("Technologies *"),
      "React, CSS"
    );

    await user.click(
      screen.getByRole("button", {
        name: "Add Project",
      })
    );

    expect(
      handleAddProject
    ).toHaveBeenCalledTimes(1);
  });
});