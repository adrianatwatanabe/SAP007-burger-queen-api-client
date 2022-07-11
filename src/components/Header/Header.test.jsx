import { screen, render } from "@testing-library/react";
import Header from ".";

describe("<Header Component />", () => {
  it("Renderiza um título corretamente", () => {
    render(<Header text='Pedidos'/>);
    const title = screen.getByText("Pedidos");
    expect(title).toBeInTheDocument();
  });
  
  it('Renderiza uma imagem corretamente', () => {
    render(<Header/>);
    const img = screen.getByAltText("Logotipo BURGER Queen");
    expect(img).toBeInTheDocument();
  });
});