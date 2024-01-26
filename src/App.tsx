import {
    createContext,
    useCallback,
    useContext, useMemo,
    useReducer,
    useRef,
    useState,
} from 'react';

// useState
// interred as number
// const [value, setValue] = useState(0);

// Explicitly setting the types
// const [value, setValue] = useState<number | undefined>(undefined);
// const [value, setValue] = useState<Array<number>>([]);
// interface IUSer {
//     name: string;
//     id: number;
// }
// const [value, setValue] = useState<Array<IUSer>>([]);

// ---
// useRef
// const ref1 = useRef<HTMLElement>(null!);
// const ref2 = useRef<HTMLElement | null>(null);

// ---
// useContext
// interface IThem {
//     backgroundColor: string;
//     color: string;
// }
// // Context creation
// const Theme = createContext<IThem>({
//     backgroundColor: 'black',
//     color: 'white',
// });
// const themeContext = useContext<IThem>(Theme);

// ---
// useReducer
// interface State {
//     count: number;
// }
// type Action = { type: 'increment' | 'decrement' }
// const reducer = ({count}: State, {type}: Action) => {
//     switch (type) {
//         case 'increment':
//             return {count: count + 1};
//         case 'decrement':
//             return {count: count - 1};
//         default:
//             return {};
//     }
// };
// const initState: State = {
//     count: 0,
// };
// const [state, dispatch] = useReducer<any>(reducer, initState);

// ---
// useCallback & useMemo
// callback
// Inferred as number
// const memoizedCallback = useCallback(() => {
//         sum(a, b);
//     }, [a, b],
// );

// Memo
// Inferred as (value1: number, value2: number) => number
// const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b]);


const App = () => {
    return (
        <div>App</div>
    );
};

export {App};