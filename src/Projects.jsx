import Project from './Project';
export default function Projects() {
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px,2fr))',
        gap: '100px',
        position:"relative",
        left:"40px",
        alignItems:"center",
        justifyContent:"center"
    };
    return (
        <div >
        <h1 style={{padding:"30px"}}>projects</h1>
        <div className='grid-container' style={gridContainerStyle}>
            <Project name="farmer market place" desc="where the farmer can sell the products directly to buyers without the brokers" tools={["Mern stack","ML"]} imgs="Designer"/>
            <Project name="student platform" desc="i have developed the website for the college to maintain the actions" tools={["Mern stack","ML"]} imgs="Designer1"/>
            <Project name="personality prediction" desc="we can predict the personality of the person using his interests " tools={["ML","data analysis","streamlit"]} imgs="Designer2"/>
            <Project name="Covid 19 data analysis*" desc="analyise the data of the covid 19" tools={["data analysis","tabluea","Streamlit"]} imgs="Designer4"/>
            <Project name="face reconginsition" desc="to recognise the face the person using deeplearning algorthims like hugging face etc" tools={["ML","tabluea","iamge processing"]} imgs="Designer3"/>
        </div>
        </div>
    )}