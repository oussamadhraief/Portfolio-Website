export default function Title(props){
    return (
        <div className="text-center w-fit mx-auto inline-block">
            <h2 className="text-main font-extrabold text-4xl">{props.mainTitle}</h2>
            <h2 className="text-zinc-700 font-bold">{props.secondaryTitle}</h2>
            <h2 className="text-5xl mb-6 mt-0 h-1 font-extrabold text-main">.</h2>
            <h2 className="text-3xl mb-5 mt-1 h-1 font-medium text-secondary">.</h2>
            <h2 className="text-3xl mb-5 mt-1 h-1 font-medium text-secondary">.</h2>
            <h2 className="text-3xl mb-1 mt-1 h-1 font-medium text-secondary">.</h2>
            <h2 className="text-5xl mb-10 mt-0 h-1 font-extrabold text-main">.</h2>
        </div>
    )
}