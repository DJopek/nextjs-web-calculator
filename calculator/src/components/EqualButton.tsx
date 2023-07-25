interface EqualButtonProps {
    text: string,
    problem: string;
    calculate: (event: any, problem: string) => void;
}

const EqualButton = (props: EqualButtonProps) => {
    return(
        <button className="w-[50px] h-[50px] px-2 bg-[#262A33] grid place-items-center rounded-full" onClick={(event) => props.calculate(event, props.problem)}>
            <div className="text-white">{props.text}</div>
        </button>
    );
}

export default EqualButton;