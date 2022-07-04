import { screen, render } from "@testing-library/react";
import Logo from ".";

describe("<Logo Component />", () => {
  it('Renderiza uma imagem corretamente', () => {
    render(<Logo />);
    const img = screen.getByAltText("Logotipo BURGER Queen");
    expect(img).toBeInTheDocument();
  });
});