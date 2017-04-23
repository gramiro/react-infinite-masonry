import React from 'react';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller';

class MasonryScroller extends React.Component {
    render() {
    	const infiniteProps = {
    		element: this.props.element,
    		hasMore: this.props.hasMore,
    		initialLoad: this.props.initialLoad,
    		isReverse: this.props.isReverse,
    		loadMore: this.props.loadMore,
    		pageStart: this.props.pageStart,
    		threshold: this.props.threshold,
    		useCapture: this.props.useCapture,
    		useWindow: this.props.useWindow,
    	};

    	const masonryProps = {
    		options: this.props.options,
    		disableImagesLoaded: this.props.disableImagesLoaded,
    		updateOnEachImageLoad: this.props.updateOnEachImageLoad
    	};
        return (
			<InfiniteScroll {...infiniteProps}>
				<Masonry {...masonryProps}>
					{this.props.children}
				</Masonry>
			</InfiniteScroll>
        );
    }
};

export default MasonryScroller;
