import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Home()
{
    const [books,setBooks]=useState([]);
    const [ifSearch,setIfSearch]=useState(false);
    const [search,setSearch]=useState("");
    const [elements,setElements]=useState([]);

    useEffect(()=>{
        setElements(()=>{
            books.map((val)=>(
                <Books key={val.key} title={val.title} author={val.author} description={val.description} image={val.image} publisher={val.publisher}/>
            ))
        })
    },[elements,books])

    const handleClick=(event)=>{
        // event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyD9tZWE5fab2uJCgcDfgiwkzQxXCvtl8p0&maxResults=5")
        .then(value=>{
            setBooks(()=>{
                const data=value.data.items;
                return(data.map((pres)=>{
                    const val={
                        key:pres.id,
                        title:pres.volumeInfo.title,
                        author:pres.volumeInfo.authors,
                        description:pres.volumeInfo.description,
                        image:`${pres.volumeInfo.imageLinks!=null ?  pres.volumeInfo.imageLinks.thumbnail:undefined}`,
                        publisher:pres.volumeInfo.publisher
                    }
                    return val;
                 })
            )
        }
        )
    });
        //Whether searched or not
        setIfSearch(true);
        //To set the compnents
        setElements(()=>(
            books.map((val)=>(
                <Books key={val.key} title={val.title} author={val.author} description={val.description} image={val.image} publisher={val.publisher}/>
            ))
        ))
    }


    const handleChange=(event)=>{
        const book=event.target.value;
        setSearch((prev)=>(book));
    }


    return(
        <>
            <div className="picture-search-box">
                <Intro/>
                <SearchPanel 
                handleClick={handleClick}
                handleChange={handleChange}/>
                <div className="books-shelf">
                        {elements}
                </div>
            </div>
        </>
    );
}



function SearchPanel(props)
{
    return(
    <div className="search-panel">
        <div className="search-panel-child"></div>
        <div className="search-box">
            <input 
            className="searchbox" 
            type="text"
            placeholder="Search using a keyword"
            onChange={(event)=>props.handleChange(event)}
            />
            <button 
            onClick={(event)=>props.handleClick(event)}>
                <img className="bg-image" src="./images/search.jpg" alt="img" width="80px"/>
            </button>
        </div>
    </div>
    );
}




function Intro()
{
    return(
        <div className="intro">
            <h1>Find the Book of Your Choice</h1>
                <p>
                    Enrich Your Reading Journey: Welcome to Book Wave, the Ultimate Library Management System and Digital Oasis for Bibliophiles!
                </p>
        </div>
    );
}


function Books(props)
{
    return(
            <div className="books-display-container">
                <div className="display-container-pic">
                    <img src={props.image} alt={props.title} width="20px"/>
                </div>
                <div className="description-box">
                    <h1>{props.title}</h1>
                    <h2>Author:{props.author}</h2>
                    <h2>Publisher:{props.publisher}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
    );
}
