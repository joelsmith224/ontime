var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLInt = require('graphql').GraphQLInt;
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
            airlineID: {
                type: GraphQLInt,
            },
            originAirportID: {
                type: GraphQLInt,
            },
            destAirportID: {
                type: GraphQLInt,
            },
            depDelay: {
                type: GraphQLInt,
            },
            cancelled: {
                type: GraphQLInt,
            },
            airTime: {
                type: GraphQLInt,
            },
          },
          resolve: function (root, params) {
  
            var limit = params.first;
            var offset = params.offset;
            if (limit == null) {
              limit = 100;
            }

            var query = {};
            if (params.year != null)
                query.YEAR = params.year;
            if (params.airlineID != null)
                query.AIRLINE_ID = params.airlineID;
            if (params.originAirportID != null)
                query.ORIGIN_AIRPORT_ID = params.originAirportID;
            if (params.destAirportID != null)
                query.DEST_AIRPORT_ID = params.destAirportID;
            if (params.depDelay != null)
                query.DEP_DELAY = params.depDelay;
            if (params.cancelled != null)
                query.CANCELLED = params.cancelled;
            if (params.airTime != null)
                query.AIR_TIME = params.airTime;

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