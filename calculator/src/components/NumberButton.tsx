interface NumberButtonProps {
    text: string;
    displayClick: (event: any, symbol: string) => void;
}

const NumberButton = (props: NumberButtonProps) => {
    return(
        <button className="w-[50px] h-[50px] px-2 bg-[#8888FF] grid place-items-center rounded-full"  onClick={(event) => props.displayClick(event, props.text)}>
            <div className="text-white">{props.text}</div>
        </button>
    );
}

export default NumberButton;