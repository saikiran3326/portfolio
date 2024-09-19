import './Project.css'
export default function Project(props){
    const imgfile=`url(../public/${props.imgs}.png)`
    console.log(imgfile)
    const dt={
    backgroundImage:imgfile}
        return ( 
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front"style={dt}>
                    <p class="title">{props.name}</p>
                </div>
                <div class="flip-card-back">
                    <p class="title">{props.desc}</p>
                    <p>technologies used:</p>
                    {props.tools.map(tool=>(<p key={tool}>{tool}</p>))}
                    {/* {props.tools.map(tool=>(<p key={tool}>{tool}</p>))} */}
                    <button id='but'>view demo</button>
                </div>
            </div>
        </div>)}