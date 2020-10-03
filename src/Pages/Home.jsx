import React from 'react';
import '../App.css';
import Categories from '../Components/Categories'
import SortPizza from '../Components/SortPizza'
import Card from '../Components/Card'



function Home(props) {


    const SortData = [
        { id: 0, value: 'popular', description: 'по популярности' },
        { id: 1, value: 'price', description: 'по цене' },
        { id: 2, value: 'alfavit', description: 'по алфавиту' }
    ]

    const CategoriesPizza = [
        { id: 0, value: 'Все' },
        { id: 1, value: 'Мясные' },
        { id: 2, value: 'Вегетарианская' },
        { id: 3, value: 'Гриль' },
        { id: 4, value: 'Острые' },
        { id: 5, value: 'Закрытые' }
    ]

    return (
        <div className="view">
            <div className="container">
                <div className="menu_pizza">
                    <Categories categories={CategoriesPizza} />
                    <SortPizza sort={SortData} />
                </div>
            
                <div className="card">
                    {props.items.map(obj => <Card key={obj.id} menu={obj} />)}
                </div>
            </div>
        </div >
    );
}

export default Home;
