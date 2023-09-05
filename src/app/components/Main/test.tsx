import { render,screen } from "@testing-library/react";
import Main from "."
import exp from "constants";

describe('<Main/>', () => {
    it('should render heading', () => {

      const {container} = render (<Main/>)

      expect(screen.getByRole('heading',{name:/react avançado/i})).toBeInTheDocument()
      expect(container.firstChild).toMatchSnapshot()
    });

 })
