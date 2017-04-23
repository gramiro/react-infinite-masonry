import React from 'react';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller';

class MasonryScroller extends React.Component {
    render() {
        return (
			<InfiniteScroll {...this.props}>
				<Masonry {...this.props}/>
			</InfiniteScroll>
        );
    }
};

export default MasonryScroller;
