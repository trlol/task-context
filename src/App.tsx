import { useState } from 'react';
import { data, IItem } from './data';
import './styles.css';
import { ThemeProvider, useTheme, Theme } from './Context';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme((t) => (t === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <ThemedAppRoot onToggle={changeTheme} data={data} />
        </ThemeProvider>
    );
}

function ThemedAppRoot(props: { onToggle: () => void; data: IItem[] }) {
    const theme = useTheme();
    const className = `app app_${theme}`;

    return (
        <div className={className}>
            <button onClick={props.onToggle}>Toggle theme</button>
            <List data={props.data} />
        </div>
    );
}

function List(props: { data: IItem[] }) {
    const theme = useTheme();
    return (
        <div>
            {props.data.map((item) => (
                <ListItem key={item.id} caption={item.name} />
            ))}
        </div>
    );
}

function ListItem(props: { caption: string }) {
    const theme = useTheme();
    const className = `listItem listItem_${theme}`;
    return <div className={className}>{props.caption}</div>;
}
