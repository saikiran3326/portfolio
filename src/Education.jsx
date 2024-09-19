import './Education.css'
import Edu from './Edu'
export default function Education() {
    return(<div id="cont"><h1>Education Details</h1>
    <ul>
    <Edu title="btech" color="#41516C" year="2021-current" desc="currently pursing the Btech from anil neerukonda intitute of technology and sciences" score="8.21/10.0"/>
    <Edu title="inter" color="#FBCA3E" year="2019-2021" desc="did intermediate in the stream of MPC form NRI JR College" score="883/1000"/>
    <Edu title="tenth" color="#E24A68" year="2018-2019" desc="studied stream of general from Amar High school" score="9.8/10.0"/>
</ul>
        </div>)
}