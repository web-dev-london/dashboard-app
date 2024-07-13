import ModeConsumer from "./components/ModeConsumer";
import ModeProvider from "./context/ModeProvider";



function App() {
    return (
        <>
            <ModeProvider>
                <ModeConsumer />
            </ModeProvider>
        </>
    )
}

export default App
