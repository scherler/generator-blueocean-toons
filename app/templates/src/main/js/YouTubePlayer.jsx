import React, { Component, PropTypes } from 'react';

export default class YouTubePlayer extends Component {
    render() {
        const { id, autoplay, loop, controls } = this.props;

        let url = `https://www.youtube.com/embed/${id}?playlist=${id}`;
        if (autoplay) {
            url += '&autoplay=1';
        }
        if (loop) {
            url += '&loop=1';
        }
        if (!controls) {
            url += '&controls=0';
        }
        return (<iframe
          width="560"
          height="315"
          src={url}
        />);
    }
}

const { string, bool } = PropTypes;

YouTubePlayer.propTypes = {
    id: string,
    autoplay: bool,
    loop: bool,
    controls: bool,
};
