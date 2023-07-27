import Output from "./Output";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import EqualButton from "./EqualButton";
import { useEffect, useState } from "react";

const Main = () => {

    const [problem, setProblem] = useState<string>("");
    // const [newProblem, setNewProblem] = useState<string[]>([""]);

    const displayClick = (event: React.MouseEvent<HTMLButtonElement>, symbol: string) => {
        const newProblem: string = problem + symbol;
        setProblem(newProblem);
    }

    const calculate = (event: React.MouseEvent<HTMLButtonElement>, problem: string) => {

        const solution = eval(problem);

        setProblem(solution);

        //custom parsing, maybe it won't work, maybe it is just a waste of time or it is ineffective, but it is a fun puzzle (not working tho :D )

        // const expression: string = problem;
        // const numbersAndOperators: string[] = expression.split(/([+\-*/])/);

        // // The resulting array will contain numbers and operators as separate elements
        // // console.log(numbersAndOperators); // Output: ["129", "+", "3293", "*", "2"]

        // // const numbersAndOperators = expression.split(/([+\-*/])/).filter((item) => item !== '');
        // console.log(numbersAndOperators); // Output: ["129", "+", "3293", "*", "2"]
        // // const theFirstItem = numbersAndOperators[1] ?? "";
        // // setProblem(theFirstItem)

        // const justNumbers = numbersAndOperators.map((sign, index) => (numbersAndOperators[2*index]));


        // const justSigns = numbersAndOperators.map((sign, index) => (numbersAndOperators[2*index + 1]))

        // const mulitiplicationDivisionIndex: number[] = [];
        
        // for (let i = 0; i < justSigns.length; i++) {
        //     if (justSigns[i] === "*" || justSigns[i] === "/") {
        //         mulitiplicationDivisionIndex.push(i);
        //     }
        // };

        // const newProblemArrayTemp: string[] = [];

        // for (let i = 0; i < numbersAndOperators.length; i++) {
        //     if (numbersAndOperators[i] === "/") {
        //         newProblemArrayTemp.push("*");

        //         if (i + 1 < numbersAndOperators.length) {
        //             newProblemArrayTemp.push((1 / parseFloat(numbersAndOperators[i + 1] ?? "")).toString());
        //             i++;
        //           }

        //     } else {
        //         newProblemArrayTemp.push(numbersAndOperators[i] ?? "")
        //     }
        // };

        // const newProblemEmptyArray: string[] = [];

        // for (let i = 0; i < newProblemArrayTemp.length; i++) {

        //     if (newProblemArrayTemp[i] === "-") {
        //         newProblemEmptyArray.push("+");

        //         if (i + 1 < newProblemArrayTemp.length) {
        //             newProblemEmptyArray.push("-" + newProblemArrayTemp[i + 1]);
        //             i++;
        //           }

        //     } else {
        //         newProblemEmptyArray.push(newProblemArrayTemp[i] ?? "")
        //     }
        // }

        // setNewProblem(newProblemEmptyArray)

        // const partialResult = [];

        // for (let i = 0; i < newProblemEmptyArray.length; i++) {
        //     if (i + 1 <= newProblemEmptyArray.length && newProblemEmptyArray[i] === "*") {
        //         partialResult.push((parseFloat(newProblemEmptyArray[i - 1] ?? "") * parseFloat(newProblemEmptyArray[i + 1] ?? "")).toString())
        //     } else if (newProblemEmptyArray[i] != "+" && (newProblemEmptyArray[i + 2] != "*" || newProblemEmptyArray[i + 1] != "*") && newProblemEmptyArray[i + 1] === "+") {
        //         partialResult.push(newProblemEmptyArray[i])
        //     }
        // }
        
        // console.log("partial result: " + partialResult);

        // let result = parseFloat(partialResult[0] ?? "");
        
        // for (let i = 1; i < partialResult.length; i++) {

        //     result += parseFloat(partialResult[i] ?? "");

        //     console.log(result);
        // }

        // setProblem(result.toString())

        setProblem(solution);
    }

    // useEffect (() => {
    //     console.log(newProblem);
    // }, [newProblem])

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
                    <FunctionButton text="*" displayClick={displayClick}/>
                </div>
                <div className="grid grid-cols-4">
                    <FunctionButton text="." displayClick={displayClick}/>
                    <NumberButton text="0" displayClick={displayClick}/>
                    <EqualButton text="=" problem={problem} calculate={calculate}/>
                    <FunctionButton text="/" displayClick={displayClick}/>
                </div>
            </div>
        </section>
    )
}

export default Main;