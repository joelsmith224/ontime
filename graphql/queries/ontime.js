var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLString = require('graphql').GraphQLString;
var AirlineModel = require('../../models/ontime');
var onTimePerformaceType = require('../types/ontime').onTimePerformaceType;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
      return {
        onTimePerformace: {
          type: new GraphQLList(onTimePerformaceType),
          args: {
            first: {
              type: GraphQLInt,
            },
            offset: {
              type: GraphQLInt,
            },
            year: {
                type: GraphQLInt,
            },
            quarter: {
                type: GraphQLInt
            },
            month: {
                type: GraphQLInt
            },
            dayOfMonth: {
                type: GraphQLInt
            },
            dayOfWeek: {
                type: GraphQLInt
            },
            flDate: {
                type: GraphQLString
            },
            uniqueCarrier: {
                type: GraphQLString
            },
            airlineID: {
                type: GraphQLInt,
            },
            carrier: {
                type: GraphQLString
            },
            tailNum: {
                type: GraphQLString
            },
            flNum: {
                type: GraphQLInt
            },
            originAirportID: {
                type: GraphQLInt,
            },
            originAirportSeqID: {
                type: GraphQLInt
            },
            originCityMarketID: {
                type: GraphQLInt
            },
            origin: {
                type: GraphQLString
            },
            originCityName: {
                type: GraphQLString
            },
            originStateAbr: {
                type: GraphQLString
            },
            originStateFips: {
                type: GraphQLString
            },
            originStateNM: {
                type: GraphQLString
            },
            originWac: {
                type: GraphQLInt
            },
            destAirportID: {
                type: GraphQLInt,
            },
            destAirportSeqID: {
                type: GraphQLInt
            },
            destCityMarketI: {
                type: GraphQLInt
            },
            dest: {
                type: GraphQLString
            },
            destCityName: {
                type: GraphQLString
            },
            destStateAbr: {
                type: GraphQLString
            },
            destStateFipes: {
                type: GraphQLString
            },
            destStateNM: {
                type: GraphQLString
            },
            destWac: {
                type: GraphQLInt
            },
            crsDepTime: {
                type: GraphQLInt
            },
            depDelay: {
                type: GraphQLInt,
            },
            depDelayNew: {
                type: GraphQLInt
            },
            depDelay15: {
                type: GraphQLInt
            },
            depDelayGroup: {
                type: GraphQLInt
            },
            depTimeBlk: {
                type: GraphQLString
            },
            taxiOut: {
                type: GraphQLString
            },
            wheelsOff: {
                type: GraphQLString
            },
            wheelsOn: {
                type: GraphQLString
            },
            taxiIn: {
                type: GraphQLString
            },
            crsArrTime: {
                type: GraphQLInt
            },
            arrTime: {
                type: GraphQLInt
            },
            arrDelay: {
                type: GraphQLInt
            },
            arrDelayNew: {
                type: GraphQLString
            },
            arrDel15: {
                type: GraphQLInt
            },
            arrDelayGroup: {
                type: GraphQLInt
            },
            arrTimeBlk: {
                type: GraphQLString
            },
            cancelled: {
                type: GraphQLInt,
            },
            cancellationCode: {
                type: GraphQLString
            },
            diverted: {
                type: GraphQLInt
            },
            crsElapsedTime: {
                type: GraphQLInt
            },
            actualElapsedTime: {
                type: GraphQLInt
            },
            airTime: {
                type: GraphQLInt,
            },
            flights: {
                type: GraphQLInt
            },
            distance: {
                type: GraphQLInt
            },
            distanceGroup: {
                type: GraphQLInt
            },
            carrierDelay: {
                type: GraphQLString
            },
            weatherDelay: {
                type: GraphQLString
            },
            nasDelay: {
                type: GraphQLString
            },
            securityDelay: {
                type: GraphQLString
            },
            lateAircraftDelay: {
                type: GraphQLString
            },
            firstDepTime: {
                type: GraphQLString
            },
            totalAddGTime: {
                type: GraphQLString
            },
            longestAddGTime: {
                type: GraphQLString
            },
            divAirportLandings: {
                type: GraphQLString
            },
            divReachedDest: {
                type: GraphQLString
            },
            divActualElapsedTime: {
                type: GraphQLString
            },
            divAirDelay: {
                type: GraphQLString
            },
            divDistance: {
                type: GraphQLString
            },
          },
          resolve: function (root, params) {
  
            var limit = params.first;
            var offset = params.offset;
            if (limit == null) { 
              limit = 100;
            }
            if (limit > 10000 {
                limit = 10000; // so we don't run out of memory during the query
                }
            var query = buildQuery(params)

            var performaces = AirlineModel.find(query).limit(limit).skip(offset).exec();
            if (!performaces) {
              throw new Error('Error');
            }
  
            return performaces;
          }
        },
    }
}
});

function buildQuery(params) {

    var query = {};
    if (params.year != null)
        query.YEAR = params.year;
    if (params.quarter != null)
        query.QUARTER = params.quarter;
    if (params.month != null)
        query.MONTH = params.month;
    if (params.dayOfMonth != null)
        query.DAY_OF_MONTH = params.dayOfMonth;
    if (params.dayOfWeek != null)
        query.DAY_OF_WEEK = params.dayOfWeek;
    if (params.flDate != null)
        query.FL_DATE = params.flDate;
    if (params.uniqueCarrier != null)
        query.UNIQUE_CARRIER = params.uniqueCarrier;
    if (params.airlineID != null)
        query.AIRLINE_ID = params.airlineID;
    if (params.carrier != null)
        query.CARRIER = params.carrier;
    if (params.tailNum != null)
        query.TAIL_NUM = params.tailNum;
    if (params.flNum != null)
        query.FL_NUM = params.flNum;
    if (params.originAirportID != null)
        query.ORIGIN_AIRPORT_ID = params.originAirportID;
    if (params.originAirportSeqID != null)
        query.ORIGIN_AIRPORT_SEQ_ID = params.originAirportSeqID;
    if (params.originCityMarketID != null)
        query.ORIGIN_CITY_MARKET_ID = params.originCityMarketID;
    if (params.origin != null)
        query.ORIGIN = params.origin;
    if (params.originCityName != null)
        query.ORIGIN_CITY_NAME = params.originCityName;
    if (params.originStateAbr != null)
        query.ORIGIN_STATE_ABR = params.originStateAbr;
    if (params.originStateFips != null)
        query.ORIGIN_STATE_FIPS = params.originStateFips;
    if (params.originStateNM != null)
        query.ORIGIN_STATE_NM = params.originStateNM;
    if (params.originWac != null)
        query.ORIGIN_WAC = params.originWac;
    if (params.destAirportID != null)
        query.DEST_AIRPORT_ID = params.destAirportID;
    if (params.destAirportSeqID != null)
        query.DEST_AIRPORT_SEQ_ID = params.destAirportSeqID;
    if (params.destCityMarketI != null)
        query.DEST_CITY_MARKET_I = params.destCityMarketI;
    if (params.dest != null)
        query.DEST = params.dest;
    if (params.destCityName != null)
        query.DEST_CITY_NAME = params.destCityName;
    if (params.destStateAbr != null)
        query.DEST_STATE_ABR = params.destStateAbr;
    if (params.destStateFipes != null)
        query.DEST_STATE_FIPS = params.destStateFipes;
    if (params.destStateNM != null)
        query.DEST_STATE_NM = params.destStateNM;
    if (params.destWac != null)
        query.DEST_WAC = params.destWac;
    if (params.crsDepTime != null)
        query.CRS_DEP_TIME = params.crsDepTime;
    if (params.depDelay != null)
        query.DEP_DELAY = params.depDelay;
    if (params.depDelayNew != null)
        query.DEP_DELAY_NEW = params.depDelayNew;
    if (params.depDelay15 != null)
        query.DEP_DEL15 = params.depDelay15;
    if (params.depDelayGroup != null)
        query.DEP_DELAY_GROUP = params.depDelayGroup;
    if (params.depTimeBlk != null)
        query.DEP_TIME_BLK = params.depTimeBlk;
    if (params.taxiOut != null)
        query.TAXI_OUT = params.taxiOut;
    if (params.wheelsOff != null)
        query.WHEELS_OFF = params.wheelsOff;
    if (params.wheelsOn != null)
        query.WHEELS_ON = params.wheelsOn;
    if (params.taxiIn != null)
        query.TAXI_IN = params.taxiIn;
    if (params.crsArrTime != null)
        query.TAXI_IN = params.crsArrTime;
    if (params.arrTime != null)
        query.ARR_TIME = params.arrTime;
    if (params.arrDelay != null)
        query.ARR_DELAY = params.arrDelay;
    if (params.arrDelayNew != null)
        query.ARR_DELAY_NEW = params.arrDelayNew;
    if (params.arrDel15 != null)
        query.ARR_DEL15 = params.arrDel15;
    if (params.arrDelayGroup != null)
        query.ARR_DELAY_GROUP = params.arrDelayGroup;
    if (params.arrTimeBlk != null)
        query.ARR_TIME_BLK = params.arrTimeBlk;
    if (params.cancelled != null)
        query.CANCELLED = params.cancelled;
    if (params.cancellationCode != null)
        query.CANCELLATION_CODE = params.cancellationCode;
    if (params.diverted != null)
        query.DIVERTED = params.diverted;
    if (params.crsElapsedTime != null)
        query.CRS_ELAPSED_TIME = params.crsElapsedTime;
    if (params.actualElapsedTime != null)
        query.ACTUAL_ELAPSED_TIME = params.actualElapsedTime;
    if (params.airTime != null)
        query.AIR_TIME = params.airTime;
    if (params.flights != null)
        query.FLIGHTS = params.flights;
    if (params.distance != null)
        query.DISTANCE = params.distance;
    if (params.distanceGroup != null)
        query.DISTANCE_GROUP = params.distanceGroup;
    if (params.carrierDelay != null)
        query.CARRIER_DELAY = params.carrierDelay;
    if (params.weatherDelay != null)
        query.WEATHER_DELAY = params.weatherDelay;
    if (params.nasDelay != null)
        query.NAS_DELAY = params.nasDelay;
    if (params.securityDelay != null)
        query.SECURITY_DELAY = params.securityDelay;
    if (params.lateAircraftDelay != null)
        query.LATE_AIRCRAFT_DELAY = params.lateAircraftDelay;
    if (params.firstDepTime != null)
        query.FIRST_DEP_TIME = params.firstDepTime;
    if (params.totalAddGTime != null)
        query.TOTAL_ADD_GTIME = params.totalAddGTime;
    if (params.longestAddGTime != null)
        query.LONGEST_ADD_GTIME = params.longestAddGTime;
    if (params.divAirportLandings != null)
        query.DIV_AIRPORT_LANDINGS = params.divAirportLandings;
    if (params.divReachedDest != null)
        query.DIV_REACHED_DEST = params.divReachedDest;
    if (params.divActualElapsedTime != null)
        query.DIV_ACTUAL_ELAPSED_TIME = params.divActualElapsedTime;
    if (params.divAirDelay != null)
        query.DIV_ARR_DELAY = params.divAirDelay;
    if (params.divDistance != null)
        query.DIV_DISTANCE = params.divDistance;

    return query;
}
