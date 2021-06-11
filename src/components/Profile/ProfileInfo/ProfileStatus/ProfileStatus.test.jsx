import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status={'it-dra-ty-ti'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-dra-ty-ti');
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={'it-dra-ty-ti'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'it-dra-ty-ti'}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test("after creation <span> should contain status 'it-dra-ty-ti'", () => {
        const component = create(<ProfileStatus status={'it-dra-ty-ti'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('it-dra-ty-ti')
    });

    test("<input> should be displayed in editMode", () => {
        const component = create(<ProfileStatus status={'it-dra-ty-ti'}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input).not.toBeNull();
    });

    test("<input> should be displayed in editMode and contain status 'it-dra-ty-ti'", () => {
        const component = create(<ProfileStatus status={'it-dra-ty-ti'}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('it-dra-ty-ti');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'it-dra-ty-ti'} updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});