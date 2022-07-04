import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { portfolioData } from "../data/portfolio";

const Portfolio = () => {

	let filteredData = portfolioData;

	const filter = (type) => {
		if(type === "All"){
			filteredData = portfolioData;
		}else{
			filteredData = portfolioData.filter(elem => elem.type === type);
		}
	}
	
  return (
    <div id="portfolio" class="portfolio">
			<div class="container">

				<div class="section-title">
					<h2>Portfolio</h2>
					<p>My Works</p>
				</div>

				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul id="portfolio-flters">
							<li data-filter="*" className="filter-active" onClick={() => filter("All")}>All</li>
							<li data-filter=".filter-app" onClick={() => filter("App")}>App</li>
							<li data-filter=".filter-card" onClick={() => filter("Card")}>Card</li>
							<li data-filter=".filter-web" onClick={() => filter("Web")}>Web</li>
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
										<a href={item.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
										<a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
									</div>
								</div>
							</div>
						</div>)
					)}
				</div>
			</div>
  </div>
  )
}

export default Portfolio;