import {
    ChangeEvent,
    Component,
    FC,
    createRef,
    CSSProperties,
    MouseEvent,
} from 'react';

type Position = {
    id: string,
    value: string,
    title: string,
}

type FormState = {
    inputText: string,
    textareaText: string,
    selectText: string,
    showData: {
        name: string,
        text: string,
        position: string,
    }
}

const POSITIONS: Array<Position> = [
    {
        id: 'fd',
        value: 'Front-end Developer',
        title: 'Front-end Developer',
    },
    {
        id: 'bd',
        value: 'Back-end Developer',
        title: 'Back-end Developer',
    }];
const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value;
const styles: CSSProperties = {display: 'block', marginBottom: '10px'};

class Form extends Component<{}, FormState> {
    state = {
        inputText: '',
        textareaText: '',
        selectText: DEFAULT_SELECT_VALUE,
        showData: {
            name: '',
            text: '',
            position: '',
        },
    };

    private rootRef = createRef<HTMLSelectElement>();

    handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {target: {value: inputText}} = e;
        this.setState({inputText});
    };

    handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const {target: {value: textareaText}} = e;
        this.setState({textareaText});
    };

    handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const {target: {value: selectText}} = e;
        this.setState({selectText});
    };

    handleShow = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const {inputText, textareaText, selectText} = this.state;

        this.setState({
            inputText: '',
            textareaText: '',
            selectText: DEFAULT_SELECT_VALUE,
            showData: {
                name: inputText,
                text: textareaText,
                position: selectText,
            },
        });
    };

    render() {
        const {inputText, textareaText, selectText, showData} = this.state;
        const {name, text, position} = showData;

        return (
            <>
                <form>
                    <label style={styles}>
                        Name:
                        <input type="text"
                               name="name"
                               value={inputText}
                               onChange={this.handleInputChange}
                        />
                    </label>
                    <br/>
                    <label style={styles}>
                        Text:
                        <textarea
                            value={textareaText}
                            onChange={this.handleTextAreaChange}
                        ></textarea>
                    </label>
                    <br/>
                    <select style={styles}
                            value={selectText}
                            onChange={this.handleSelectChange}
                            ref={this.rootRef}
                    >{POSITIONS.map(({id, value, title}) => (
                        <option key={id}
                                value={value}
                        >{title}</option>
                    ))}</select>
                    <button onClick={this.handleShow}>Show data</button>
                </form>
                <h2>{name}</h2>
                <h2>{text}</h2>
                <h2>{position}</h2>
            </>
        );
    }
}

const App: FC = () => <Form/>;

export {App};