import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input type="search" placeholder="Search RoboFriends" className="pa3 bs b--green bg-lightest-blue" onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;