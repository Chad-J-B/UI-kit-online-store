import {createRoot} from "react-dom/client";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";

function App() {
    return (<>
        <Container>
            <Link href="https://react-tutorial.app" class="ui-link">Shop online</Link>
            <Button disabled={true}>Login</Button>
            <Input placeholder="Full name" name="full_name"/>
        </Container>

    </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);
