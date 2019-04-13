import React from 'react';
import { StoryToolbar } from './components/StoryToolbar.js';
import { StoryArea } from './components/StoryArea.js';
import { StoryCount } from './components/StoryCount.js';

export function App() {
	return (
		<section className="App Component">
			<StoryToolbar />
			<StoryCount />
			<StoryArea />
		</section>
	);
}
