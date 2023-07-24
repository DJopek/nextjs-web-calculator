interface OutputProps {
    text: string;
}

const Output = (props: OutputProps) => {
    return (
        <section className="bg-[#262A33] w-[200px] h-[50px] rounded-lg text-2xl text-white grid place-items-center">
            {props.text}
        </section>
    );
}

export default Output;