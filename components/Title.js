export default function Title(props){
    return (
        <div className="text-center w-fit mx-auto inline-block">
            <h1 className="text-gray-900 font-extrabold text-4xl">{props.mainTitle}</h1>
            <h1 className="text-zinc-700 font-bold">{props.secondaryTitle}</h1>
            <h1 className="text-5xl mb-6 mt-0 h-1 font-extrabold text-gray-900">.</h1>
            <h1 className="text-3xl mb-5 mt-1 h-1 font-medium text-yellow-500">.</h1>
            <h1 className="text-3xl mb-5 mt-1 h-1 font-medium text-yellow-500">.</h1>
            <h1 className="text-3xl mb-1 mt-1 h-1 font-medium text-yellow-500">.</h1>
            <h1 className="text-5xl mb-10 mt-0 h-1 font-extrabold text-gray-900">.</h1>
        </div>
    )
}