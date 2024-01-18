import { resolve } from "styled-jsx/css";

async function TestRoute() {
     await delay(3000);
    return (
        <div>
            Test Route
        </div>
    );
   
}
async function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default TestRoute;

