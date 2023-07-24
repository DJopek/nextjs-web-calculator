import Output from "./Output";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import NullButton from "./NullButton";
import { useState } from "react";

const Main = () => {

    const [problem, setProblem] = useState<string>("")

    const displayClick = (event: React.MouseEvent<HTMLButtonElement>, symbol: string) => {
        const newProblem: string = problem + symbol;
        setProblem(newProblem);
        console.log(problem)
    }

    return(
        <section className="bg-[#2F343F] w-full h-full flex flex-col min-h-[90vh] items-center">
            <h1 className="text-3xl font-black text-white py-10">CALCULATOR</h1>
            <div className="py-[10%]">
                <Output text={problem}/>
                <div className="grid grid-rows-3 grid-cols-4">
                    <NumberButton text="9" displayClick={displayClick}/>
                    <NumberButton text="8" displayClick={displayClick}/>
                    <NumberButton text="7" displayClick={displayClick}/>
                    <FunctionButton text="+" displayClick={displayClick}/>
                    <NumberButton text="6" displayClick={displayClick}/>
                    <NumberButton text="5" displayClick={displayClick}/>
                    <NumberButton text="4" displayClick={displayClick}/>
                    <FunctionButton text="-" displayClick={displayClick}/>
                    <NumberButton text="3" displayClick={displayClick}/>
                    <NumberButton text="2" displayClick={displayClick}/>
                    <NumberButton text="1" displayClick={displayClick}/>
                    <FunctionButton text="x" displayClick={displayClick}/>
                </div>
                <div className="grid grid-cols-4">
                    <FunctionButton text="," displayClick={displayClick}/>
                    <NumberButton text="0" displayClick={displayClick}/>
                    {/* <NullButton text="0"/> */}
                    <FunctionButton text="=" displayClick={displayClick}/>
                    <FunctionButton text="/" displayClick={displayClick}/>
                </div>
            </div>
        </section>
    )
}

export default Main;