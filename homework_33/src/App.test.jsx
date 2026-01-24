import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { test } from "vitest";

test("сторінка має заголовок TODO", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /todo/i })).toBeInTheDocument();
});

test("після додавання завдання воно відображається в списку", async () => {
  render(<App />);

  const input = screen.getByRole("textbox", { name: /todo/i });
  const addButton = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "New Task" } });

  fireEvent.click(addButton);

  const newTask = await screen.findByText("New Task");
  expect(newTask).toBeInTheDocument();
});

test("після додавання завдання поле вводу очищується", async () => {
  render(<App />);

  const input = screen.getByRole("textbox", { name: /todo/i });
  const addButton = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "Another Task" } });

  fireEvent.click(addButton);

  await waitFor(() => {
    expect(input.value).toBe("");
  });
});
