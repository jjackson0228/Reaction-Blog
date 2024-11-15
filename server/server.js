const express = require('express');
const { ApolloServer } = require('@apollo/server');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
