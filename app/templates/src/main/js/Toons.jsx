import React, { Component, PropTypes } from 'react';
import YouTubePlayer from './YouTubePlayer';

const results = {
    futurama: {
        ABORTED: 'mb_6UOAj_D0',
        SUCCESS: 'G-C1dRZ_hps',
        UNKNOWN: 'l-XIVujtkXc',
        FAILURE: '1Isjgc0oX0s',
    },
    southPark: {
        ABORTED: 'c3FUNp07nVc',
        SUCCESS: 'SgKGtMglJyk',
        UNKNOWN: 'YpufzJNrZ2Y',
        FAILURE: '1chFxv0JllA',
    },
};

export default class Toons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: 'futurama',
            options: {
                autoplay: true,
                loop: true,
                controls: false,
            },
        };
    }

    render() {
        const { run } = this.props;
        const { theme, options: { autoplay, loop, controls } } = this.state;
        const optionChange = (event) => this.setState({ theme: event.target.value });
        const checkboxChange = (event) => {
            const { options } = this.state;
            options[event.target.name] = !options[event.target.name];
            this.setState({ options });
        };
        const className = run.state === 'RUNNING' ?
          'btn-primary' : 'btn-secondary';
        return (<div className="usainbolt">

            <div className="action-btns">
                <button className={className}>Result: {run.result}
                </button>
                <div className="control-label">
                    {
                        Object.keys(this.state.options).map((key) => (<label htmlFor={key}>
                            {key}
                            <input
                              type="checkbox"
                              name={key}
                              checked={this.state.options[key]}
                              onChange={checkboxChange}
                            /></label>))
                    }

                    <select onChange={optionChange} value={theme}>
                        { Object.keys(results).map((key) => <option value={key}>{key}</option>) }
                    </select>
                    <YouTubePlayer {...{
                        id: results[theme][run.result],
                        autoplay,
                        loop,
                        controls,
                    }}
                    />
                </div>
            </div>
        </div>);
    }
}

Toons.propTypes = {
    run: PropTypes.object,
};