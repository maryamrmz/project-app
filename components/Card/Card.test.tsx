import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Card from "./index";

test(`should render a card with a chidren`, () => {
  const component = render(
    <Card>
      <span>I am a child!</span>
    </Card>
  );

  expect(component).toMatchSnapshot();
});
