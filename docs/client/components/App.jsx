import React from 'react';
var MasonryScroller = require('../../dist/index.js').default;

export default class App extends React.Component {
	constructor(props){
        super();
        this.state = {
            count: 10,
            isLoading: true,
            items: Array(10).fill()
        }
    }

	getItems() {
	    var i = this.state.count + 3;
	    this.setState({ 
	        items: Array(i).fill(),
	        count: i
	    });
  	}

	render() {
		return (
		 <div style={{textAlign: 'center'}}>
		    <h1>React Infinite Masonry Demo</h1>
	                <MasonryScroller 
	                pageStart={0}
                    loadMore={this.getItems.bind(this)}
                    hasMore={this.state.isLoading}
                    threshold={250}
	                options={{transitionDuration: 0, gutter: 20, percentPosition: true}}
								disableImagesLoaded={false}
                                updateOnEachImageLoad={false} >
			    	{this.state.items.map((v, i) => 
	             		<div
	             		className="grid-item"
				        key={i}
				        style={{
				        	margin: '1em',
				          	width: '236px',
				          	height: `${i % 2 === 0 ? 4 * 50 : 50 }px`,
				          	background: 'rgba(0,0,0,0.7)'
				        }}
				        />
					)}

					</MasonryScroller>
		  </div>);
	}
}