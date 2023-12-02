import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("topping effects to total price", async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  // call total price heading
  const total = screen.getByRole("heading", { name: /Topping Price: 0/i });

  // call a toppings
  const mochiCheck = await screen.findByRole("checkbox", { name: /mochi/i });

  // add topping to basket
  await user.click(mochiCheck);

  // check total price

  expect(total).toHaveTextContent("1");

  // call a toppings
  const cherryCheck = await screen.findByRole("checkbox", {
    name: /Cherries/i,
  });

  // add topping to basket
  await user.click(cherryCheck);

  // check total price

  expect(total).toHaveTextContent("2");

  // remove toppings
  await user.click(mochiCheck);
  expect(total).toHaveTextContent("1");

  await user.click(cherryCheck);
  expect(total).toHaveTextContent("0");
});
