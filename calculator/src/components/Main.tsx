import Output from "./Output";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import EqualButton from "./EqualButton";
import { useEffect, useState } from "react";

const Main = () => {

    const [problem, setProblem] = useState<string>("");
    const [newProblem, setNewProblem] = useState<string[]>([""]);

    let multiplication = "1";

    const displayClick = (event: React.MouseEvent<HTMLButtonElement>, symbol: string) => {
        const newProblem: string = problem + symbol;
        setProblem(newProblem);
    }

    const calculate = (event: React.MouseEvent<HTMLButtonElement>, problem: string) => {

        const solution = eval(problem);

        setProblem(solution);

        //custom parsing, maybe it won't work, maybe it is just a waste of time or it is ineffective, but it is a fun puzzle

        const expression: string = problem;
        const numbersAndOperators: string[] = expression.split(/([+\-*/])/);

        console.log(numbersAndOperators);

        const newProblemArrayTemp: string[] = [];

        for (let i = 0; i < numbersAndOperators.length; i++) {
            if (numbersAndOperators[i] === "/") {
                newProblemArrayTemp.push("*");

                if (i + 1 < numbersAndOperators.length) {
                    newProblemArrayTemp.push((1 / parseFloat(numbersAndOperators[i + 1] ?? "")).toString());
                    i++;
                  }

            } else {
                newProblemArrayTemp.push(numbersAndOperators[i] ?? "")
            }
        };

        const newProblemEmptyArray: string[] = [];

        for (let i = 0; i < newProblemArrayTemp.length; i++) {

            if (newProblemArrayTemp[i] === "-") {
                newProblemEmptyArray.push("+");

                if (i + 1 < newProblemArrayTemp.length) {
                    newProblemEmptyArray.push("-" + newProblemArrayTemp[i + 1]);
                    i++;
                  }

            } else {
                newProblemEmptyArray.push(newProblemArrayTemp[i] ?? "")
            }
        }

        setNewProblem(newProblemEmptyArray)

        const partialResult = [];

        for (let i = 1; i < newProblemEmptyArray.length; i += 2) {

            if (newProblemEmptyArray[i] === "+") {

                if (newProblemEmptyArray[i] === "+" && newProblemEmptyArray[i + 2] == undefined){
                    partialResult.push(newProblemEmptyArray[i + 1])
                    console.log("pushing: " + newProblemEmptyArray[i + 1])
                } else if (newProblemEmptyArray[i] === "+" && (newProblemEmptyArray[i - 2] === "+" || newProblemEmptyArray[i - 2] == undefined || newProblemEmptyArray[i + 2] == undefined) && newProblemEmptyArray[i - 2] != "*") {
                    partialResult.push(newProblemEmptyArray[i - 1])
                    console.log("pushing: " + newProblemEmptyArray[i-1])
                }
            
            }

            if (newProblemEmptyArray [i] === "*") {

                if ((newProblemEmptyArray[i - 2] === "+" && newProblemEmptyArray[i] === "*") || (newProblemEmptyArray[i - 2] == undefined && newProblemEmptyArray[i] === "*")) {
                    multiplication = newProblemEmptyArray[i - 1] ?? ""
                    console.log("start of multiplication:" + multiplication)
                    if (newProblemEmptyArray[i] === "*" && (newProblemEmptyArray[i + 2] === "+" || newProblemEmptyArray[i + 2] == undefined)) {
                        multiplication = (parseFloat(multiplication) * parseFloat(newProblemEmptyArray[i + 1] ?? "")).toString();
                        partialResult.push(multiplication)
                        console.log("pushing end of multiplication:" + multiplication)
                    }
                } else if (newProblemEmptyArray[i - 2] === "*" && newProblemEmptyArray[i + 2] === "*") {
                    multiplication = (parseFloat(multiplication) * parseFloat(newProblemEmptyArray[i - 1] ?? "")).toString()
                    console.log(newProblemEmptyArray[i - 1])
                } else if (newProblemEmptyArray[i] === "*" && (newProblemEmptyArray[i + 2] === "+" || newProblemEmptyArray[i + 2] == undefined)) {
                    multiplication = (parseFloat(multiplication) * parseFloat(newProblemEmptyArray[i-1] ?? "") * parseFloat(newProblemEmptyArray[i+1] ?? "")).toString()
                    partialResult.push(multiplication)
                    console.log("pushed multiplication is" + multiplication)
                    multiplication = "1"

                }
                
            }

            console.log("multiplication:" + multiplication)
            
        }

        console.log("partial result: " + partialResult);

        let result = parseFloat(partialResult[0] ?? "");
        
        for (let i = 1; i < partialResult.length; i++) {

            result += parseFloat(partialResult[i] ?? "");

            console.log(result);
        }

        setProblem(result.toString())

        // setProblem(solution);
    }

    useEffect (() => {
        console.log(newProblem);
    }, [newProblem])

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