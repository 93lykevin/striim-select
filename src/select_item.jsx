import React from "react";

class SelectItem extends React.Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleSelect(this.props.option);
    }

    render() {
        return (
            <div className={this.props.selected ? "select-item-selected" : "select-item"} onClick={this.handleClick}>
                {this.props.option}
            </div>
        );
    }
}

export default SelectItem;
