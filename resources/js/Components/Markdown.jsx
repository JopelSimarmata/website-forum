import React, { useEffect } from "react"
import hljs from "highlight.js"
import { marked } from "marked"

export default function Markdown({children}) {

    //define useEffect
    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return <article
        className="prose max-w-full prose-sky prose-img:rounded-lg prose-blockquote:bg-gray-100 prose-blockquote:border prose-blockquote:border-l-4 prose-blockquote:border-sky-400 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-lg prose-blockquote:shadow-sm prose-blockquote:italic prose-h3:text-gray-700" dangerouslySetInnerHTML={{ __html: marked.parse(children) }}
    />
}