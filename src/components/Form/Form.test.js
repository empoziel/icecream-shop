import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("is the button activated according to condition ", async () => {
  render(<Form />);

  //setup user
  const user = userEvent.setup();

  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  expect(orderBtn).toBeDisabled();

  // tick the checkbox
  await user.click(checkBox);

  //check if the button is active
  expect(orderBtn).toBeEnabled();

  //remove tick from checkbox
  await user.click(checkBox);

  expect(orderBtn).toBeDisabled();
});

test("when confirm button being hover", async () => {
  render(<Form />);
  const user = userEvent.setup();

  // required elements
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  // active buton
  await user.click(checkbox);

  // hover
  fireEvent.mouseEnter(button);

  //get popup

  const popup = screen.getByText("We won't deliver", { exact: false });

  //is popup visible
  expect(popup).toBeVisible();

  //out of focus
  fireEvent.mouseLeave(button);

  // popup invisible
  expect(popup).not.toBeVisible();
});
