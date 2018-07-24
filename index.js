'use strict';

const path = require('path');

module.exports = () => {
    return async (ctx, next) =>{
        await next();
        ctx.rootpath = __dirname + "/";
    }
}