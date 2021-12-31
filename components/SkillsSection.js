import WebSkill from './WebSkill'


export default function SkillsSection(){

    const html = "html_pxk3rn.svg"
    const css = "css_gyaf7z.svg"
    const js = "js_imr3bo.svg"
    const react = "react_ak0sla.svg"
    const next = "next_csitru.svg"
    const node = "node_nj2kde.svg"
    const express = "express_n1saii.png"
    const mongo = "mongo_uqpcud.svg"
    const ts = "ts_t6ipoc.svg"
    const firebase = "firebase_ztz5rt.png"
    const git = "git_b23wnr.svg"
    const tailwind = "tailwind_k1zaze.png"

    return ( 
        <div id="SkillsPart" className='h-72 overflow-y-scroll flex flex-wrap space-x-3 sm:space-x-5 pt-3 md:py-3 justify-center'>
            <WebSkill srcPath={html} altText="HTML Icon" hoverText="HTML" />
            <WebSkill srcPath={css} altText="CSS Icon" hoverText="CSS" />
            <WebSkill srcPath={js} altText="Javascript Icon" hoverText="JavaScript" />
            <WebSkill srcPath={react} altText="ReactJS Icon" hoverText="ReactJS" />
            <WebSkill srcPath={next} altText="Next.js Icon" hoverText="Next.js" />
            <WebSkill srcPath={node} altText="Node.js Icon" hoverText="Node.js" />
            <br></br>
            <WebSkill srcPath={express} altText="Express.js Framework Icon" hoverText="Express.js" />
            <WebSkill srcPath={mongo} altText="MongoDB Mongoose Icon" hoverText="MongoDB" />
            <WebSkill srcPath={ts} altText="TypeScript Icon" hoverText="TypeScript" />
            <WebSkill srcPath={firebase} altText="Firebase Icon" hoverText="Firebase" />
            <WebSkill srcPath={tailwind} altText="Tailwind Icon" hoverText="Tailwind" />
            <WebSkill srcPath={git} altText="Git Icon" hoverText="Git" />
        </div>
    )
}