import { useState, useRef, useEffect } from 'react'

export default function ProjectImage({ image, name, glyph }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const imgRef = useRef(null)

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setIsLoaded(true)
        }
    }, [image])

    if (!image) {
        return (
            <div className="flex h-full items-center justify-center font-mono text-5xl font-bold text-[var(--line)]">
                {glyph}
            </div>
        )
    }

    return (
        <>
            {!isLoaded && (
                <div className="absolute left-0 top-[30px] flex h-[calc(100%-30px)] w-full animate-pulse flex-col justify-between bg-[var(--bg-raised)] p-5">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-1/3 rounded bg-[var(--line)] opacity-60" />
                        <div className="h-6 w-1/4 rounded bg-[var(--line)] opacity-40" />
                    </div>
                    <div className="h-24 w-full rounded-md bg-[var(--line)] opacity-30" />
                    <div className="flex gap-3">
                        <div className="h-8 flex-1 rounded-md bg-[var(--line)] opacity-30" />
                        <div className="h-8 flex-1 rounded-md bg-[var(--line)] opacity-20" />
                    </div>
                </div>
            )}
            <img
                ref={imgRef}
                src={image}
                alt={name}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                className="absolute left-0 top-[30px] w-full object-cover object-top transition-all duration-[15s] ease-in-out group-hover:top-full group-hover:-translate-y-full"
            />
        </>
    )
}