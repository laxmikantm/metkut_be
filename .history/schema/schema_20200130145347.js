// import graphql, { GraphQLInt, GraphQLSchema } from 'graphql';
// import { getBlockStringIndentation } from 'graphql/language/blockString';
const _ = require('lodash')
const graphql = require('graphql');
const axios = require('axios');
const { 
        GraphQLObjectType, 
        GraphQLString, 
        GraphQLSchema, 
        GraphQLInt, 
        GraphQLList 
      } = graphql;


/* Hard Coded Values*/
var Contacts = [
  {
    name: 'OneMan',
    mobilenumber: 9999999,
    email: 'one@man.com',
    address: 'blablalalalalallalalalala'
  },
  {
    name: 'TwoMan',
    mobilenumber: 88888,
    email: '2@man.com',
    address: 'UUUblablalalalalallalalalala'
  },
];

//Contact Type
const ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: () => ({
    name: { type: GraphQLString },
    mobilenumber: { type: GraphQLInt },
    email: { type: GraphQLString },
    address: { type: GraphQLString }
  })
});

//RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    contact: {
      type: ContactType,
      args: {
        name: { type: GraphQLString }
      },
        resolve(parent, args) {
          //code to get data from db/ other source
          // return 'Success';
          // return (_.find(Contacts, { name: args.name }));   
          
          return axios.get('http://localhost:5000/api/contact' + args.name)
            .then(res => res.data);
      }
    },
    contacts: {
      type: new GraphQLList(ContactType),
      resolve(parent, args) {
        // return Contacts;
                 return axios.get('http://localhost:5000/api/contacts')
            .then(res => res.data);
      }
    }

  }
})

module.exports= new GraphQLSchema({
  query: RootQuery
})
