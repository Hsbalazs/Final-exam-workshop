import {describe, expect, it} from 'vitest'
import { render } from "@testing-library/react";
import App from "./App.tsx";

describe("App", () => {
    it("should render successfully", () => {
        render(

                <App/>

        );
        expect("Welcome to the best selling site of the World!").toBeInTheDocument();
    })
});