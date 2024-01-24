import {FC, ReactNode} from 'react';
// FC - function component
// ReactNode - div, h1, p, string...

// const Title: FC = () => null; // ok
// ---

// const Title: FC = () => <h1>Hello world!</h1>;
// const App = () => <Title/>;
// ---

// const Title: FC<{ title: string, children: ReactNode }> = ({
//                                                                title,
//                                                                children,
//                                                            }) => {
//     return <div><h1>{title}</h1><p>{children}</p></div>;
// };
// const App = () => <Title title="Hello World!"
//                          children="Hello, I am children"
// />;
// ---

type TitleProps = {
    title: string,
    text?: string
}

// const Title: FC<Props> = ({title}) => <h1>{title}</h1>;
const Title = ({title}: TitleProps) => <h1>{title}</h1>;

const App = () => <Title title="Hello world!"/>;

export {App};