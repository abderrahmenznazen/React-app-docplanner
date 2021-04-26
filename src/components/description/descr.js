import '../description/descr.css'

const description=[
    {par: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."},
    {par: "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."},
]

function Paragr(props){
    return(
        <div className='pr-ch'>
            <p>{props.para}</p>
        </div>
    )
}

function Description(){
    return(<div className='paragr'>
        {description.map( el=>
            <div>
                <Paragr para={el.par}/>
            </div>
            )}
    </div>
    )
}

export default Description