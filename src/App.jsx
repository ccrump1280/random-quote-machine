import './App.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNewQuote } from './quoteSlice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter)
export default function App() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);

  const [randomColor, setRandomColor] = useState("#808080");
  const updateRandomColor = () => {
    var color = PLEASING_COLORS[Math.floor(Math.random() * PLEASING_COLORS.length)];
    if (color == randomColor) {
      return updateRandomColor();
    }
    setRandomColor(color);
  }
  const handleClick = () => {
    dispatch(getNewQuote());
    updateRandomColor();
  }
  useEffect(() => {
    handleClick();
  }, []);
  
  return (
    <div 
      id="content" 
      style= {{
        backgroundColor: randomColor,
        transition: "background-color 1000ms linear",
      }}
    >
      <div id="quote-box">
        <p id="text" style={{color: randomColor, transition: "color 1000ms linear",}}><FontAwesomeIcon icon={faQuoteLeft} size="lg" /> {quote.message}</p>
        <p id="author" style={{color: randomColor, transition: "color 1000ms linear",}}>-{quote.author}</p>
        <div className="button-box">
          <a 
            href={`https://twitter.com/intent/tweet?text=${quote.message} -${quote.author}`}
            id="tweet-quote"
            style= {{
              backgroundColor: randomColor,
              transition: "background-color 1000ms linear",
            }}
          >
           <FontAwesomeIcon icon={faTwitter} size="lg"/> 
          </a>
          <button 
            id="new-quote"
            className="glow-on-hover"
            onClick={() => handleClick()}
            style={{
              backgroundColor: randomColor,
              transition: "background-color 1000ms linear",
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}

const PLEASING_COLORS = [
  '#4169E1',
  '#4682B4',
  '#008080',
  '#006400',
  '#000080',
  '#2F4F4F',
  '#483D8B',
  '#8B0000',
  '#800000',
  '#4B0082',
  '#708090',
  '#8B008B',
  '#808000',
  '#191970',
  '#FF8C00',
  '#9932CC',
  '#00CED1',
  '#9400D3',
  '#0000CD',
  '#3CB371'
];