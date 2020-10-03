import React, {useState} from 'react'
import '../css/Categories.css';
import '../App.css';

function Categories(props) {

    const [PozitionPizza, setPozitionPizza] = useState(0);
    

    return (
        <div className="Categories">
            <div className="Container">
                <ul className="Categories__menu">
                    {
                        props.categories.map(item => (
                            <li 
                            onClick={() => setPozitionPizza(item.id) }
                            key={item.id} value={item.value} 
                            className={(PozitionPizza === item.id ) ? 'Categories_link active' : 'Categories_link' }
                            >{item.value}
                            </li>   
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Categories
