
export default function Edu(props){
    return (
        <>
            
  <li style={{"--accent-color":props.color}}>
    <div class="date">{props.year}</div>
    <div class="title">{props.title}</div>
    <div class="desc">{props.desc}</div>
    <div class="score">Score:{props.score}</div>
  </li>
        </>
    )
}