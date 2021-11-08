import React, { Component } from 'react'
import './AniCard.css'
import 'material-icons/iconfont/material-icons.css';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            maximize: this.props.maximize?this.props.maximize:false,
            expand: this.props.expand?this.props.expand:false,
            close: false
        }
        this.maximizeHandler = this.maximizeHandler.bind(this);
        this.expandHandler = this.expandHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
    }
    maximizeHandler(){
        this.setState(prevState => ({ maximize: !prevState.maximize }))
        if (document.body.style.overflow !== "hidden" && !this.state.maximize) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflowY = "scroll";
        }
    }
    expandHandler(){
        this.setState(prevState => ({ expand: !prevState.expand }))
    }
    closeHandler(){
        this.setState(prevState => ({ close: !prevState.close }))
    }
    render() {
        return (
            <div className={`${this.state.close?"close":"card ani-card"} border-${this.props.headerColor} p-0 ${this.state.maximize?"maximize":"minimize"}`} style={{'--ani-card-height':this.props.height}}>
                <div className={`card-header pb-0 ani-bg-${this.props.headerColor}`}>
                    <h5 className='card-title fw-bold'>{this.props.title?this.props.title:'Card Title'}</h5>
                    <div className='card-tools'>
                        {this.state.expand?
                            <span class="material-icons" onClick={this.expandHandler}>
                                horizontal_rule
                            </span>
                            :<span class="material-icons" onClick={this.expandHandler}>
                                add
                            </span>
                        }
                        {
                            this.state.maximize?
                            <span class="material-icons" onClick={this.maximizeHandler}>fullscreen_exit</span>:
                            <span class="material-icons" onClick={this.maximizeHandler}>fullscreen</span>
                        }
                        {
                            this.state.close?
                            "":
                            <span class="material-icons" onClick={this.closeHandler}>clear</span>
                        }
                    </div>
                </div>
                <div className={`card-body p-0 ${this.state.expand?"expand":"collapse"}`}>
                    <div className={`card-content`}>
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
