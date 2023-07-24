interface NullButtonProps {
    text: string,
}

const NullButton = (props: NullButtonProps) => {
    return(
        <section className="w-[100px] h-[50px] px-2 bg-[#8888FF] ml-[50px] grid place-items-center rounded-full">
            <div className="text-white">{props.text}</div>
        </section>
    );
}

export default NullButton;