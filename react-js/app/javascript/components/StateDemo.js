import React from "react";
class StateDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai:0
        }
    }

    renderButton = () => {
        return (
            <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
        )
    }

    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input defaultValue={this.props.name} type="text" name="ten" className="form-control"/>
                <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}>Save</div>
            </div>
        </div>
    )

    displayCheck = () => {
        if(this.state.trangthai === 0){
            return this.renderButton();
        }else {
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({trangthai:1});
    }

    saveClick = () => {
        this.setState({trangthai:0});
    }

    render(){
        return (
            <div className="row">
                <span>{this.props.name}</span>
                {this.displayCheck()}
            </div>
        );
    }
}

export default StateDemo