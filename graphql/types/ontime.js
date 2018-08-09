var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;


// onTimePerformace Type
exports.onTimePerformaceType = new GraphQLObjectType({
  name: 'onTimePerformace',
  fields: function () {
    return {
      YEAR: {
        type: GraphQLInt
      },
      QUARTER: {
        type: GraphQLInt
      },
      MONTH: {
        type: GraphQLInt
      },
      DAY_OF_MONTH: {
        type: GraphQLInt
      },
      DAY_OF_WEEK: {
        type: GraphQLInt
      },
      FL_DATE: {
        type: GraphQLString
      },
      UNIQUE_CARRIER: {
        type: GraphQLString
      },
      AIRLINE_ID: {
        type: GraphQLInt
      },
      CARRIER: {
        type: GraphQLString
      },
      TAIL_NUM: {
        type: GraphQLString
      },
      FL_NUM: {
        type: GraphQLInt
      },
      ORIGIN_AIRPORT_ID: {
        type: GraphQLInt
      },
      ORIGIN_AIRPORT_SEQ_ID: {
        type: GraphQLInt
      },
      ORIGIN_CITY_MARKET_ID: {
        type: GraphQLInt
      },
      ORIGIN: {
        type: GraphQLString
      },
      ORIGIN_CITY_NAME: {
        type: GraphQLString
      },
      ORIGIN_STATE_ABR: {
        type: GraphQLString
      },
      ORIGIN_STATE_FIPS: {
        type: GraphQLString
      },
      ORIGIN_STATE_NM: {
        type: GraphQLString
      },
      ORIGIN_WAC: {
        type: GraphQLInt
      },
      DEST_AIRPORT_ID: {
        type: GraphQLInt
      },
      DEST_AIRPORT_SEQ_ID: {
        type: GraphQLInt
      },
      DEST_CITY_MARKET_I: {
        type: GraphQLInt
      },
      DEST: {
        type: GraphQLString
      },
      DEST_CITY_NAME: {
        type: GraphQLString
      },
      DEST_STATE_ABR: {
        type: GraphQLString
      },
      DEST_STATE_FIPS: {
        type: GraphQLString
      },
      DEST_STATE_NM: {
        type: GraphQLString
      },
      DEST_WAC: {
        type: GraphQLInt
      },
      CRS_DEP_TIME: {
        type: GraphQLInt
      },
      DEP_TIME: {
        type: GraphQLInt
      },
      DEP_DELAY: {
        type: GraphQLInt
      },
      DEP_DELAY_NEW: {
        type: GraphQLInt
      },
      DEP_DEL15: {
        type: GraphQLInt
      },
      DEP_DELAY_GROUP: {
        type: GraphQLInt
      },
      DEP_TIME_BLK: {
        type: GraphQLString
      },
      TAXI_OUT: {
        type: GraphQLString
      },
      WHEELS_OFF: {
        type: GraphQLString
      },
      WHEELS_ON: {
        type: GraphQLString
      },
      TAXI_IN: {
        type: GraphQLString
      },
      CRS_ARR_TIME: {
        type: GraphQLInt
      },
      ARR_TIME: {
        type: GraphQLInt
      },
      ARR_DELAY: {
        type: GraphQLInt
      },
      ARR_DELAY_NEW: {
        type: GraphQLString
      },
      ARR_DEL15: {
        type: GraphQLInt
      },
      ARR_DELAY_GROUP: {
        type: GraphQLInt
      },
      ARR_TIME_BLK: {
        type: GraphQLString
      },
      CANCELLED: {
        type: GraphQLInt
      },
      CANCELLATION_CODE: {
        type: GraphQLString
      },
      DIVERTED: {
        type: GraphQLInt
      },
      CRS_ELAPSED_TIME: {
        type: GraphQLInt
      },
      ACTUAL_ELAPSED_TIME: {
        type: GraphQLInt
      },
      AIR_TIME: {
        type: GraphQLString
      },
      FLIGHTS: {
        type: GraphQLInt
      },
      DISTANCE: {
        type: GraphQLInt
      },
      DISTANCE_GROUP: {
        type: GraphQLInt
      },
      CARRIER_DELAY: {
        type: GraphQLString
      },
      WEATHER_DELAY: {
        type: GraphQLString
      },
      NAS_DELAY: {
        type: GraphQLString
      },
      SECURITY_DELAY: {
        type: GraphQLString
      },
      LATE_AIRCRAFT_DELAY: {
        type: GraphQLString
      },
      FIRST_DEP_TIME: {
        type: GraphQLString
      },
      TOTAL_ADD_GTIME: {
        type: GraphQLString
      },
      LONGEST_ADD_GTIME: {
        type: GraphQLString
      },
      DIV_AIRPORT_LANDINGS: {
        type: GraphQLString
      },
      DIV_REACHED_DEST: {
        type: GraphQLString
      },
      DIV_ACTUAL_ELAPSED_TIME: {
        type: GraphQLString
      },
      DIV_ARR_DELAY: {
        type: GraphQLString
      },
      DIV_DISTANCE: {
        type: GraphQLString
      },
      DIV1_AIRPORT: {
        type: GraphQLString
      },
      DIV1_AIRPORT_ID: {
        type: GraphQLString
      },
      DIV1_AIRPORT_SEQ_ID: {
        type: GraphQLString
      },
      DIV1_WHEELS_ON: {
        type: GraphQLString
      },
      DIV1_TOTAL_GTIME: {
        type: GraphQLString
      },
      DIV1_LONGEST_GTIME: {
        type: GraphQLString
      },
      DIV1_WHEELS_OFF: {
        type: GraphQLString
      },
      DIV1_TAIL_NUM: {
        type: GraphQLString
      },
      DIV2_AIRPORT: {
        type: GraphQLString
      },
      DIV2_AIRPORT_ID: {
        type: GraphQLString
      },
      DIV2_AIRPORT_SEQ_ID: {
        type: GraphQLString
      },
      DIV2_WHEELS_ON: {
        type: GraphQLString
      },
      DIV2_TOTAL_GTIME: {
        type: GraphQLString
      },
      DIV2_LONGEST_GTIME: {
        type: GraphQLString
      },
      DIV2_WHEELS_OFF: {
        type: GraphQLString
      },
      DIV2_TAIL_NUM: {
        type: GraphQLString
      },
      DIV3_AIRPORT: {
        type: GraphQLString
      },
      DIV3_AIRPORT_ID: {
        type: GraphQLString
      },
      DIV3_AIRPORT_SEQ_ID: {
        type: GraphQLString
      },
      DIV3_WHEELS_ON: {
        type: GraphQLString
      },
      DIV3_TOTAL_GTIME: {
        type: GraphQLString
      },
      DIV3_LONGEST_GTIME: {
        type: GraphQLString
      },
      DIV3_WHEELS_OFF: {
        type: GraphQLString
      },
      DIV3_TAIL_NUM: {
        type: GraphQLString
      },
      DIV4_AIRPORT: {
        type: GraphQLString
      },
      DIV4_AIRPORT_ID: {
        type: GraphQLString
      },
      DIV4_AIRPORT_SEQ_ID: {
        type: GraphQLString
      },
      DIV4_WHEELS_ON: {
        type: GraphQLString
      },
      DIV4_TOTAL_GTIME: {
        type: GraphQLString
      },
      DIV4_LONGEST_GTIME: {
        type: GraphQLString
      },
      DIV4_WHEELS_OFF: {
        type: GraphQLString
      },
      DIV4_TAIL_NUM: {
        type: GraphQLString
      },
      DIV5_AIRPORT: {
        type: GraphQLString
      },
      DIV5_AIRPORT_ID: {
        type: GraphQLString
      },
      DIV5_AIRPORT_SEQ_ID: {
        type: GraphQLString
      },
      DIV5_WHEELS_ON: {
        type: GraphQLString
      },
      DIV5_TOTAL_GTIME: {
        type: GraphQLString
      },
      DIV5_LONGEST_GTIME: {
        type: GraphQLString
      },
      DIV5_WHEELS_OFF: {
        type: GraphQLString
      },
      DIV5_TAIL_NUM: {
        type: GraphQLString
      },
    }
  }
});
