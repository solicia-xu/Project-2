# Project-2 International Travel Data Visualization Dashboard

## Group Members and Responsibilites

1. Solicia Xu - D3 visualizations, interactive YoY dashboard, Flask, HTML
2. Ben Bastedo - SQL Database set up, Flask, Bootstrap, HTML, MapBox, Documentation, AOS
3. Luis Casas - Flask, Bootstrap, HTML, MapBox, Documentation

## Required Components to Run Dashboard

1. [Python](https://www.python.org/downloads/)
2. [JavaScript](https://www.javascript.com/)
3. [Plotly](https://plot.ly/)
4. [PostGres SQL](https://www.postgresql.org/)
5. [SQLAchemy](https://docs.sqlalchemy.org/en/13/)
6. [Flask](https://www.fullstackpython.com/flask.html)
7. [MapBox](https://www.mapbox.com/)
8. [NPM](https://www.npmjs.com/)
9. [AnimateOnScroll](https://github.com/michalsnik/aos#animations)

## Instructions to Run Dashboard

1. Clone repo to local machine and save file path. You will need this for step 2.
2. Open the terminal and change directory to where you saved the files above in step 1.
3. Run 'python app.py' from the root directory you cloned. This will start your Flask application, which allows us to run different web pages and routes.
4. Open your web browser and type in [Localhost:5000](Localhost:5000) in the URL. Hit Enter. From here on out, we will now refer to this page as the 'homepage'.
5. The homepage displays international arrival information by country. Select a country from the drop down menu. This will display location on the world map, as well as # of arrivals and total GDP by year.
6. To look through data by year, direct your browser to [Localhost:5000/latlngs](Localhost:5000/latlngs). This will show each countries arrival and GDP informataion by year.

## Initial Questions to Ask

1. Based on the travel information, we want to visualize where people are traveling most frequently on both a micro (yearly) and macro level (overall)?
2. How do arrivals in countries with higher GDPs affect number of passsengers incoming?
3. Are all countries travel data accurately displayed from our datasets? What could cause some discrepcansies?

## Data Set Chosen For Visualization

[International Arrival Data](https://data.worldbank.org/indicator/ST.INT.ARVL?view=map)

### Cleaned Datasets Used for API Creation

[Cleaned Arrival Data](static/cleaned_data/ArrivalCleaned.csv)

[Cleaned GDP Data](static/cleaned_data/Clean_InterGDP.csv)

## Dashboards We Drew Inspiration From

![Dashboard page](static/readme_png/Picture1.png)

![Dashboard page](static/readme_png/Picture3.png)