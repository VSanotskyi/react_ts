import React, {
    Component,
    createContext,
    ContextType,
} from 'react';
import {createPortal} from 'react-dom';

type PortalProps = {
    children: React.ReactNode
}

class Portal extends Component<PortalProps> {
    private el: HTMLDivElement = document.createElement('div');

    public componentDidMount(): void {
        document.body.appendChild(this.el);
    }

    public render(): React.ReactElement<PortalProps> {
        return createPortal(this.props.children, this.el);
    }
}

class MyComponent extends Component<any, { counter: number }> {
    state = {
        counter: 0,
    };

    handleClick = () => {
        this.setState(({counter}) => ({counter: counter + 1}));
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>Clicks: {this.state.counter}</h1>
                <Portal>
                    <h2>Test Portal</h2>
                    <button>Click</button>
                </Portal>
            </div>
        );
    }
}

// ----

// interface IContext {
//     isAuth: boolean;
//     toggleAuth: () => void;
// }
//
// const AuthContext = createContext<IContext>({
//     isAuth: false,
//     toggleAuth: () => {
//     },
// });
//
// class LogIn extends Component<any, any> {
//     static contextType = AuthContext;
//     context!: ContextType<typeof AuthContext>;
//
//     render() {
//         const {toggleAuth, isAuth} = this.context;
//         return <button onClick={toggleAuth}>
//             {!isAuth ? 'Login' : 'Logout'}
//         </button>;
//     }
// }
//
// const Profile: React.FC = (): React.ReactElement => (
//     <AuthContext.Consumer>
//         {({isAuth}) => (
//             <h1>{!isAuth ? 'Please login' : 'You are logged in'}</h1>
//         )}
//     </AuthContext.Consumer>
// );
//
// class Context extends Component<any, { isAuth: boolean }> {
//     readonly state = {
//         isAuth: false,
//     };
//
//     toggleAuth = () => {
//         this.setState(({isAuth}) => ({isAuth: !isAuth}));
//     };
//
//     render() {
//         const {isAuth} = this.state;
//         const context: IContext = {isAuth, toggleAuth: this.toggleAuth};
//         return (
//             <AuthContext.Provider value={context}>
//                 <LogIn/>
//                 <Profile/>
//             </AuthContext.Provider>
//         );
//     }
// }

const App = () => {
    return (
        <>
            <div><MyComponent/></div>
            {/*<div><Context/></div>*/}
        </>
    );
};

export {App};