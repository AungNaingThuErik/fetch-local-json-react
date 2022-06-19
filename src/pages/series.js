import React,{useState} from 'react';
import movieList from "../local-json/sample.json"
import CardPopUp from '../components/CardPopUp';
import nullPoster from "../assets/null.jpg"
import './styles.css'
const Series = () => {
  const [data, setData]= useState(movieList);

  //popup
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    
     <div className='popular-list'>

      { 
      
      data.entries && data.entries.length > 0 && 
        data.entries.map((props) => (
          <div key={props.title} className='card-list'>
            { props.programType === 'series' ?  
              [
                props.images['Poster Art'].url
                  ? <img src={props.images['Poster Art'].url}/>
                  :  <img src={nullPoster}/>,
                <input
                    type="button"
                    value={props.title}
                    onClick={togglePopup}
                />,
                isOpen && 
                <div className='card-list-details'>
                <CardPopUp
                  content={
                  <>
                     <img src={props.images['Poster Art'].url}/> 
                     <h1>{props.title}</h1>
                     <p>{props.description}</p>
                  </>
                  }
                  handleClose={togglePopup}
                />
                </div>
              ]
              :
              '' }
            </div>
          
        ))
      }
    </div>

  );
};
  
export default Series;