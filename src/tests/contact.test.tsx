import Contact from "../feature/Contact";
import { renderWithProviders } from "../helper/testUtils";

describe("feature contact", () => {
    test("should render the contact page", () => {
        const { getByText } = renderWithProviders(<Contact />)

        const heading = getByText("Contact App");

        expect(heading).toBeInTheDocument();
    }
    );
});