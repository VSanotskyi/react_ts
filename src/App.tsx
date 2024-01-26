import React, {useState} from 'react';

type BaseProps = {
    primTitle: string;
    secTitle: string;

}

type InjectedProps = {
    toggleStatus: boolean;
    toggle: () => void
}

const Button = ({primTitle, secTitle, toggle, toggleStatus}: any) => {
    return (
        <button onClick={toggle}>{
            toggleStatus ? primTitle : secTitle
        }</button>
    );
};


const withToggle = <BaseProps extends InjectedProps>(PassedComponent: React.ComponentType<BaseProps>) => {
    return (props: BaseProps) => {
        const [toggleStatus, setToggleStatus] = useState(false);

        return (
            <PassedComponent
                {...props as BaseProps}
                toggle={() => setToggleStatus(!toggleStatus)}
                toggleStatus={toggleStatus}
            />
        );
    };
};

const ToggleBtn = withToggle(Button);

const App = () => {
    return (
        <div>
            <ToggleBtn primTitle="Main Title"
                       secTitle="additional Title"
            />
        </div>
    );
};

export {App};