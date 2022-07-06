import React, { useState } from "react";
import Navbar from "./Navbar";
import { portfolioData } from "../data/portfolio";

const Portfolio = () => {
	const [filteredData, setFilteredData] = useState(portfolioData);

	const filter = (type) => {
		if(type === "All"){
			setFilteredData(portfolioData);
		}else{
			const newValues = portfolioData.filter(elem => elem.type === type);
			setFilteredData(newValues);
		}
	}
	
  return (
		<div>
			<Navbar />
			<div id="portfolio" className="portfolio">
				<div className="container">
					<div className="section-title">
						<h2>Portfolio</h2>
						<p>My Works</p>
					</div>

					<div className="row">
						<div className="col-lg-12 d-flex justify-content-center">
							<ul id="portfolio-flters">
								<li className="filter-active" onClick={() => filter("All")}>All</li>
								<li onClick={() => filter("App")}>App</li>
								<li onClick={() => filter("Card")}>Card</li>
								<li onClick={() => filter("Web")}>Web</li>
							</ul>
						</div>
					</div>

					<div className="row portfolio-container">
						{ filteredData.map((item, index) =>
							(
							<div key={index} className="col-lg-4 col-md-6 portfolio-item filter-app">
								<div className="portfolio-wrap">
									<img src={item.image} className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>{item.title}</h4>
										<p>{item.type}</p>
										<div className="portfolio-links">
											<a href={item.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
											<a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
										</div>
									</div>
								</div>
							</div>)
						)}
					</div>
				</div>
			</div>
		</div>
  )
}

export default Portfolio;