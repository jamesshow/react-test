import {logRoles, render, screen} from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
    const skills = ["HTML", "CSS", "Javascript"];

    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect (listElement).toBeInTheDocument();
    })

    test('renders a list of skills', () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    })

    test('renders login button', () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument();
    })

    //getByRole failed:  TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Start Learning"
    //change to queryByRole at line 31
    test('Start Learning button is not rendered', () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);
        const startLearningButton = screen.queryByRole("button", {
            name: "Start Learning"
        })
        expect(startLearningButton).not.toBeInTheDocument();
    })

    test('Start Learning button is eventually displayed', async () => {
        render(<Skills skills={skills} />);
        // screen.debug();
        const startLearningButton = await screen.findByRole (
           "button",
         {
            name: "Start Learning",
         },
         {
            timeout: 2000,
         }
        )
        // screen.debug();
        expect(startLearningButton).toBeInTheDocument();
    })
});
