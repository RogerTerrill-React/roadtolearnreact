import React, { Component } from 'react'
import Button from './Button';

const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Table extends Component {
    render() {
        const { list_c, pattern, onDismiss } = this.props;

        return (
            <div>
                {list_c.filter(isSearched(pattern)).map(item =>
                <div key={item.objectID}>
                    <span>
                        <a href={item.url} > {item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                    <span>
                        <Button onClick={()=>onDismiss(item.objectID)}>
                            Dismiss
                        </Button>
                    </span>
                </div>
                )}
            </div>

        );
    }
}

export default Table;