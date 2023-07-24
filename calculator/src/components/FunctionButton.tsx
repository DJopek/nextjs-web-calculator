interface FunctionButtonProps {
    text: string,
    displayClick: (event: any, symbol: string) => void;
}

const FunctionButton = (props: FunctionButtonProps) => {
    return(
        <button className="w-[50px] h-[50px] bg-[#262A33] grid place-items-center rounded-full" onClick={(event) => props.displayClick(event, props.text)}>
            <div className="text-white">{props.text}</div>
        </button>
    );
}

export default FunctionButton;