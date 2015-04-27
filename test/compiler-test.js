var syntax = require(".."),
    common = require("./common"),
    test = common.testCompile,
    testDir = common.testDir;

// TODO more granular tests that target specific grammar rules

describe('BEMHTMLToJS', function() {

  describe('Compile basic templates', function () {
    testDir('basic');
  });

  describe('Compile featured templates', function () {

    it('applyNext setting mode', function () {
      test(
        function () {/*
               block b1, content: applyNext({bla: 'bla', opa: 'opa'}, 'default', this._b = 42)
               */},
        {block: 'b1'});
    });

    it('local with args', function () {
      test(
        function () {/*
             block b1, content: local(
               this.ctx.cache = null,
               this._cachePos = this._buf.length,
               this._bla = 'bla') {this._buf.length = 42;}
               */},
        {block: 'b1'});
    });

  });
});