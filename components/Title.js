export default function Title(props){
    return (
        <div className="text-center w-fit mx-auto inline-block">
            <p className="text-main font-extrabold text-4xl">{props.mainTitle}</p>
            <p className="text-zinc-700 font-bold">{props.secondaryTitle}</p>
            <p className="text-5xl mb-6 mt-0 h-1 font-extrabold text-main">.</p>
            <p className="text-3xl mb-5 mt-1 h-1 font-medium text-secondary">.</p>
            <p className="text-3xl mb-5 mt-1 h-1 font-medium text-secondary">.</p>
            <p className="text-3xl mb-1 mt-1 h-1 font-medium text-secondary">.</p>
            <p className="text-5xl mb-10 mt-0 h-1 font-extrabold text-main">.</p>
        </div>
    )
}