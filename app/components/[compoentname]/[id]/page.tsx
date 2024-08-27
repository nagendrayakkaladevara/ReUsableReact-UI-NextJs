'use client';
import GistEmbed from "@/components/customUI/gist";

const CodeShowCase = () => {
    return (
        <>
            <div className="overflow-y-auto p-2">
                <GistEmbed gistId="93d9eda765f366b7f5a9286819f8461a" showTools={false} />
            </div>
        </>
    )
}

export default CodeShowCase;