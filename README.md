# ontime
## On Time Performance of Aircraft in the US graphQL API

This is a graphQL API used to analyse the on-time arrival data for non-stop dosmestic flights in the USA. 
The graphQL server is built using nodeJS and express, hosted on a GCP compute virtual machine. The data is stored on a mongoDB 
and accessed through mongoose.  

### Using the API

The server hosted at the following address: http://104.197.80.50:8080/graphql

An example request would be as follows:

``` graphql
{  
  onTimePerformace(  
    first: 1,  
    airlineID: 19393,  
    year: 1990,  
    originAirportID: 12191  
    destAirportID: 11259,  
    cancelled: 0)  
    {  
      YEAR  
      AIRLINE_ID  
      ORIGIN  
      DEST  
      DEP_DELAY  
      CANCELLED  
      AIR_TIME  
  }  
}  
```

Which will result in the following response:

``` graphql
{  
  "data": {  
    "onTimePerformace": [  
      {  
        "YEAR": 1990,  
        "AIRLINE_ID": 19393,  
        "ORIGIN": "HOU",  
        "DEST": "DAL",  
        "DEP_DELAY": 0,  
        "CANCELLED": 0,  
        "AIR_TIME": ""  
      }  
    ]  
  }  
}  
```

The API supports all of the headers from the on-time performace table as optional arguments except 
for Diverted Airport Information headers (Div1 to Div4 headers). In addition it also takes an optional 
first and/or offset integer argument. First returns the first 'x' rows found with the arguments provided. 
First will not return more than 10,000 sets of data and the default is 100 if not set.
Offset will skip the 'offset amount' of rows before fetching data.

### Design Decisions and Review

As GraphQL, NodeJS and GCP are key technoligies for this role I chose to use them. I also chose to use MongoDB 
as I have a little bit of prior experience using it. The MongoDB could be set up in a cluster to increase performace 
as the API can be quite slow when fetching data later in the colleciton. Also I wasn't able to download and upload the complete
database to my server as my Internet is quite slow where I live; The database includes all of the data from every year in the month 
of January only.  
The layout of the project here could probably be improved and refactored for easier readability and maintenance.
I would also like to improve the structure of the grpahQL queries and schema's so that data that is related is stored in seperate types.
One more thing I would improve on is that if the server cannot find the number of entries set in 'first' throws an error rather than the number of entries it did find.


