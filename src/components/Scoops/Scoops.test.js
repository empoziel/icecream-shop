import { findAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Scoops from ".";

test("when data pulled from API, render the cards on screen", async () => {
  render(<Scoops />);

  const images = await screen.findAllByRole("img", { name: "variety-img" });

  expect(images.length).toBeGreaterThanOrEqual(2);
});

// test driven development -- red to green
test("Effect of adding or resetting ice cream type on price", async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  //Ice cream Price
  const total = screen.getByRole("heading", {
    name: /Ice cream Price/i, //insensitive
  });

  //Ice cream Price start from "0"
  expect(total).toHaveTextContent("0");

  // get all "add" buttons
  const addButtons = await screen.findAllByRole("button", { name: /add/i });

  const resetButtons = await screen.findAllByRole("button", { name: /reset/i });

  // add one variety and check Ice cream Price
  await user.click(addButtons[0]);
  expect(total).toHaveTextContent("3");

  // add to more and check price
  await user.dblClick(addButtons[2]);
  expect(total).toHaveTextContent("9");

  // reset 1 times added
  await user.click(resetButtons[0]);
  expect(total).toHaveTextContent("6");

  // reset 2 times added
  await user.click(resetButtons[2]);
  expect(total).toHaveTextContent("0");
});
