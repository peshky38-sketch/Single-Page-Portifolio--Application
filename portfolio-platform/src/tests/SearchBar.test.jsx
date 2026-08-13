import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { expect, jest } from "@jest/globals";

import { describe, test } from "@jest/globals";

import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("allows users to enter a search term", async () => {
    const user = userEvent.setup();

    const handleSearchChange = jest.fn();

    render(
      <SearchBar
        searchTerm=""
        onSearchChange={handleSearchChange}
      />
    );

    const input =
      screen.getByLabelText("Search projects");

    await user.type(input, "React");

    expect(handleSearchChange).toHaveBeenCalled();
  });
});