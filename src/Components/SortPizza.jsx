import React from 'react';
import '../css/SortPizza.css';
import '../App.css';


class SortPizza extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        
    }


    render() {

        return (
            <form >
                <select  className="sort" value={this.state.value} onChange={this.handleChange}>
                        {
                            this.props.sort.map(item => (
                                <option className="sort_opt"  key={item.id} value={item.value}>
                                    {item.description}
                                </option>
                            ))}
                    </select>
            </form>
        );
    }
}

export default SortPizza;
