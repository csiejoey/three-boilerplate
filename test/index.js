let THREE = require('three');
let assert = require('assert');
// let JSDOM = require('jsdom');
// let html = JSON.stringify(require('../index.html'));
// let MY3 = require('../src/index');
// global.document = new JSDOM(html).window.document;

describe('THREE renderer', function () {
  // it('camera position z default 100', function () {
  //   assert.equal(100, MY3.camera.z);
  // });
  it('should have a defined BasicShadowMap constant', function () {
    assert.notEqual(undefined, THREE.BasicShadowMap);
  },
  it('should be able to construct a Vector3 with default of x=0', function () {
    let vec3 = new THREE.Vector3();
    assert.equal(0, vec3.x);
  })
  );
});

describe('camera pos', function () {
  it('camera position z default 100', function () {
    assert.equal(100, MY3.camera.z);
  });
});
