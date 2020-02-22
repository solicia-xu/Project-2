# Docs on session basics
# https://docs.sqlalchemy.org/en/13/orm/session_basics.html

import numpy as np
import os

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, render_template, redirect, request,jsonify

#/Users/solicia/Downloads/Project-2-master/app.py
#################################################
# Database Setup
#################################################
engine = create_engine("postgres://postgres:123abc@localhost:5432/project_2")

# reflect an existing database into a new model
Base = automap_base()
Base.prepare(engine, reflect=True)

# Save reference to the table
# Save reference to the table
arrivals = Base.classes.arrivals
gdp = Base.classes.gdp
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/tojavascript<br/>"
        f"----for plotly dashboard <br/>"
        f"/latlngs<br/>"
        f"/countries<br/>"
        f"/arrivals<br/>"
        f"/gdp<br/>"
    )


@app.route("/tojavascript")    
def tojavascript():
    return render_template ("index.html")

@app.route("/latlngs")
def latlngs():

    # Query all arrivals info
    session = Session(engine)
    arrive = session.query(arrivals).all()
    # close the session to end the communication with the database
    session.close()

    # Convert list of tuples into normal list
    country_latlngs = []
    for country in arrive:
        latlngs={}
        latlngs['country']=country.CountryName
        latlngs['location']=[]
        latlngs['location'].append(float(country.Lat))
        latlngs['location'].append(float(country.Long))
        country_latlngs.append(latlngs)
    return jsonify(country_latlngs)

@app.route("/countries")
def countries():

    # Query all arrivals info
    session = Session(engine)
    arrive = session.query(arrivals).all()
    # close the session to end the communication with the database
    session.close()

    # Convert list of tuples into normal list
    all_countries = []
    for country in arrive:
        all_countries.append(country.CountryName)
    return jsonify(all_countries)

@app.route("/arrivals")
def names():
    # Query all passengers
    session = Session(engine)
    arrival_results = session.query(arrivals).all()

    # close the session to end the communication with the database
    session.close()

    # Convert list of tuples into normal list
    all_country_arrivals = []
    for country in arrival_results:
        # random_arrival ={}
        arrivals1 = {}
        arrivals1[country.CountryName] = {}
        # arrivals1[country.CountryName]["latitude"] = float(country.Lat)
        # arrivals1[country.CountryName]["longitude"] = float(country.Long)
        arrivals1[country.CountryName]["countrycode"] = country.CountryCode

        arrivals1[country.CountryName]["Years"] = {}
        arrivals1[country.CountryName]['Years']["1995"] = country.y1995
        arrivals1[country.CountryName]['Years']["1996"] = country.y1996
        arrivals1[country.CountryName]['Years']["1997"] = country.y1997
        arrivals1[country.CountryName]['Years']["1998"] = country.y1998
        arrivals1[country.CountryName]['Years']["1999"] = country.y1999
        arrivals1[country.CountryName]['Years']["2000"] = country.y2000
        arrivals1[country.CountryName]['Years']["2001"] = country.y2001
        arrivals1[country.CountryName]['Years']["2002"] = country.y2002
        arrivals1[country.CountryName]['Years']["2003"] = country.y2003
        arrivals1[country.CountryName]['Years']["2004"] = country.y2004
        arrivals1[country.CountryName]['Years']["2005"] = country.y2005
        arrivals1[country.CountryName]['Years']["2006"] = country.y2006
        arrivals1[country.CountryName]['Years']["2007"] = country.y2007
        arrivals1[country.CountryName]['Years']["2008"] = country.y2008
        arrivals1[country.CountryName]['Years']["2009"] = country.y2009
        arrivals1[country.CountryName]['Years']["2010"] = country.y2010
        arrivals1[country.CountryName]['Years']["2011"] = country.y2011
        arrivals1[country.CountryName]['Years']["2012"] = country.y2012
        arrivals1[country.CountryName]['Years']["2013"] = country.y2013
        arrivals1[country.CountryName]['Years']["2014"] = country.y2014
        arrivals1[country.CountryName]['Years']["2015"] = country.y2015
        arrivals1[country.CountryName]['Years']["2016"] = country.y2016
        arrivals1[country.CountryName]['Years']["2017"] = country.y2017
        arrivals1[country.CountryName]["location"] = {}
        arrivals1[country.CountryName]['location']["lat"] = float(country.Lat)
        arrivals1[country.CountryName]['location']["long"] = float(country.Long)
        all_country_arrivals.append(arrivals1)
    return jsonify(all_country_arrivals)


@app.route("/gdp")
def passengers():
    """Return a list of passenger data including the name, age, and sex of each passenger"""

    # Open a communication session with the database
    session = Session(engine)

    # Query all passengers
    results = session.query(gdp).all()

    # close the session to end the communication with the database
    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_country_gdp = []
    for country in results:
        gdp1 = {}
        gdp1[country.CountryName] = {}
        gdp1[country.CountryName]["latitude"] = float(country.Lat)
        gdp1[country.CountryName]["longitude"] = float(country.Long)
        gdp1[country.CountryName]["countrycode"] = country.CountryCode
        
        gdp1[country.CountryName]["Years"] = {}
        gdp1[country.CountryName]['Years']["1995"] = country.y1995
        gdp1[country.CountryName]['Years']["1996"] = country.y1996
        gdp1[country.CountryName]['Years']["1997"] = country.y1997
        gdp1[country.CountryName]['Years']["1998"] = country.y1998
        gdp1[country.CountryName]['Years']["1999"] = country.y1999
        gdp1[country.CountryName]['Years']["2000"] = country.y2000
        gdp1[country.CountryName]['Years']["2001"] = country.y2001
        gdp1[country.CountryName]['Years']["2002"] = country.y2002
        gdp1[country.CountryName]['Years']["2003"] = country.y2003
        gdp1[country.CountryName]['Years']["2004"] = country.y2004
        gdp1[country.CountryName]['Years']["2005"] = country.y2005
        gdp1[country.CountryName]['Years']["2006"] = country.y2006
        gdp1[country.CountryName]['Years']["2007"] = country.y2007
        gdp1[country.CountryName]['Years']["2008"] = country.y2008
        gdp1[country.CountryName]['Years']["2009"] = country.y2009
        gdp1[country.CountryName]['Years']["2010"] = country.y2010
        gdp1[country.CountryName]['Years']["2011"] = country.y2011
        gdp1[country.CountryName]['Years']["2012"] = country.y2012
        gdp1[country.CountryName]['Years']["2013"] = country.y2013
        gdp1[country.CountryName]['Years']["2014"] = country.y2014
        gdp1[country.CountryName]['Years']["2015"] = country.y2015
        gdp1[country.CountryName]['Years']["2016"] = country.y2016
        gdp1[country.CountryName]['Years']["2017"] = country.y2017
        all_country_gdp.append(gdp1)



    return jsonify(all_country_gdp)

@app.route("/years")
def years():
# Query all passengers
    session = Session(engine)
    arrival_results = session.query(arrivals).all()

    # close the session to end the communication with the database
    session.close()


    all_country_stuff = []
    years = {}
    for year in range(1995,2018):
        years[str(year)] = {}

    for country in arrival_results:
        years["1995"][str(country.CountryName)] = country.y1995
        years["1996"][str(country.CountryName)] = country.y1996
        years["1997"][str(country.CountryName)] = country.y1997
        years["1998"][str(country.CountryName)] = country.y1998
        years["1999"][str(country.CountryName)] = country.y1999
        years["2000"][str(country.CountryName)] = country.y2000
        years["2001"][str(country.CountryName)] = country.y2001
        years["2002"][str(country.CountryName)] = country.y2002
        years["2003"][str(country.CountryName)] = country.y2003
        years["2004"][str(country.CountryName)] = country.y2004
        years["2005"][str(country.CountryName)] = country.y2005
        years["2006"][str(country.CountryName)] = country.y2006
        years["2007"][str(country.CountryName)] = country.y2007
        years["2008"][str(country.CountryName)] = country.y2008
        years["2009"][str(country.CountryName)] = country.y2009
        years["2010"][str(country.CountryName)] = country.y2010
        years["2011"][str(country.CountryName)] = country.y2011
        years["2012"][str(country.CountryName)] = country.y2012
        years["2013"][str(country.CountryName)] = country.y2013
        years["2014"][str(country.CountryName)] = country.y2014
        years["2015"][str(country.CountryName)] = country.y2015
        years["2016"][str(country.CountryName)] = country.y2016
        years["2017"][str(country.CountryName)] = country.y2017
        
    all_country_stuff.append(years)
    return jsonify(all_country_stuff)

if __name__ == '__main__':
    app.run(debug=True)