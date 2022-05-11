import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
	return (
		<div>
			<Header />
			<About
				image=<img
					src="https://mario.wiki.gallery/images/thumb/2/21/Charizard_SSBU.png/1200px-Charizard_SSBU.png"
					alt="Blog Logo Charizard"
				/>
			/>
			<ArticleList />
		</div>
	);
}

export default App;
