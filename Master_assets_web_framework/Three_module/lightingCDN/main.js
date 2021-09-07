import * as THREE from 'https://unpkg.com/browse/three@0.124.0/build/three.module.js';


import {OrbitControls} from "https://unpkg.com/browse/three@0.124.0/examples/jsm/controls/OrbitControls.js";

var renderer = new THREE.WebGLRender({antialias : true});
renderer.shadowMap.enabled = true; 
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize