import '../card/card.css';
import clinics from'../card/doctors.svg'
import doctors from'../card/doctors.svg'
import patients from'../card/patients.svg'

const cardva=[
    {img: {clinics} , titr:"For patients" ,desc:"Find a doctor, book a visit and solve any health-related doubt"},
    {img:{doctors}, titr:"For doctors" ,desc:"Save time managing visits and cut no-shows by half"},
    {img:{patients}, titr:"For clinics" ,desc:"Deliver an exceptional patient experience in your clinic"},
]

function Itemcard(props){
    return( 
    <div className='card-item'>
        <img src={props.imgc} /> 
        <h3>{props.titrc}</h3>
        <p> {props.descc} </p>
        <div class="dropdown">
            <button class="dropbtn">choose country &#10003; </button>
                <div class="dropdown-content">
                <a href="#">Canada </a>
                <a href="#">France</a>
                <a href="#">Tunis</a>
                </div>
        </div>
    </div>
    )
}

function card(){
    return (<div className='card'>
        {cardva.map(el=>
        <div> 
            <Itemcard titrc={el.titr} descc={el.desc} imgc={el.img} />
        </div>
        )
        }
    </div>
    )
}
export default card