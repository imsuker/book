'use strict';

//add
exports.create = async () => {
    console.log('create.ctx', ctx);
    console.log('create.ctx.params', ctx.params);  
};
//delete
exports.destroy = async () => {
  console.log('destroy.ctx', ctx);
  console.log('destroy.ctx.params', ctx.params);  
};
//update
exports.update = async () => {
    console.log('update.ctx', ctx);
    console.log('update.ctx.params', ctx.params);  
};
//get
exports.show = async ctx => {
    console.log('show.ctx', ctx);
    console.log('show.ctx.params', ctx.params);
};


//
exports.index = async ctx => {
    console.log("index.ctx",ctx);
};

exports.new = async () => {
  console.log('new.ctx', ctx);
};

exports.edit = async () => {
    console.log('edit.ctx', ctx);
    console.log('edit.ctx.params', ctx.params);  
  };