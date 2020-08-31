import './scss/main.scss';
import { OrbitControls } from './examples/jsm/controls/OrbitControls'
import { GLTFLoader} from './examples/jsm/loaders/GLTFLoader'

import * as THREE from 'three';

//3d models
import buildings3d from './assets/buildings.glb';
import cart3d from './assets/cart.glb';
import camera3d from './assets/camera.glb';
import email3d from './assets/email.glb';
import landing3d from './assets/landing.glb';

//pages
import {mainPage} from './pages/mainPage'
import {webshopPage} from './pages/webshopPage'
import {contactPage} from './pages/contactPage'

// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let renderer;
let controls;
let scene;
let activeObj;

function init() {
  container = document.querySelector( '#scene-container' );
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#02000e', 10, 53);

  //scene.background = new THREE.Color( 0x8FBCD4 );
 
  createCamera();
  createLights();
  createControls();
  loadModels();
  createRenderer();

  renderer.setAnimationLoop( () => {
    update();
    render();
  } );
}

function createCamera() {
  camera = new THREE.PerspectiveCamera(
    12, // FOV
    container.clientWidth / container.clientHeight, // aspect
    0.1, // near clipping plane
    300, // far clipping plane
  );
  camera.position.set( 0,8,39 );
  camera.position.x = Math.sin(0.05) * 500;  
}

function createControls() {
   controls = new OrbitControls( camera, container );
}

function createLights() {
  const ambientLight = new THREE.HemisphereLight(0xddeeff,0x202020, 5);
  const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
  mainLight.position.set( 2, 10, 10 );
  scene.add( ambientLight, mainLight );
}

function loadModels(obj3d=buildings3d,objPos = [0,-2,0]) {
  const loader = new GLTFLoader();
  // so that they can be individually placed around the scene
  const onLoad = ( gltf, position ) => {
    console.log(gltf)
    activeObj = gltf.scene.children[0];
    activeObj.position.copy( position );
    scene.add( activeObj );
  };
  // the loader will report the loading progress to this function
  const onProgress = () => {
    console.log('loaded')
  };
  // the loader will send any error messages to this function, and we'll log
  // them to to console
  const onError = ( errorMessage ) => { console.log( errorMessage ); };
  // so don't make any assumption about which one will finish loading first
  const objPosition = new THREE.Vector3( objPos[0],objPos[1],objPos[2] );
  loader.load(obj3d, gltf => onLoad( gltf, objPosition ), onProgress, onError );  
}

function createRenderer() {
  renderer = new THREE.WebGLRenderer( { antialias: true,alpha:true } );
  renderer.setSize( container.clientWidth, container.clientHeight );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;
  renderer.physicallyCorrectLights = true;
  container.appendChild( renderer.domElement );
}

function update() {
  if (typeof(activeObj) != 'undefined'){
     activeObj.rotation.y += (Math.sin(Date.now() * 0.001) * Math.PI * 0.001)/5;
  }
}
// render, or 'draw a still image', of the scene
function render() {
  renderer.render( scene, camera );
}
// call the init function to set everything up
init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( container.clientWidth, container.clientHeight );
}

window.addEventListener( 'resize', onWindowResize );

document.body.onmousemove = function(e) {
  onMouseMove(e)
  document.documentElement.style.setProperty('--x', (e.clientX+window.scrollX) + 'px');
  document.documentElement.style.setProperty('--y', (e.clientY+window.scrollY) + 'px');
}

function onMouseMove(event) {
  event.preventDefault();
  activeObj.rotation.y += event.movementX/5000
  activeObj.rotation.x += event.movementY/5000
};

const webshopLink = document.getElementById('webshop')
const landingLink = document.getElementById('landing')
const customLink = document.getElementById('custom')
const contactLink = document.getElementById('contact')
const mainContent = document.getElementById('main-content')
const logo = document.getElementById('logo')



const landing = `
<h3><span class="bb-sec-6 ">LANDING PAGE</span> </h3>
<h3><span class="bb-sec-6 ">LANDING PAGE</span> </h3>

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio fugit quasi praesentium consectetur repudiandae! Quos fugiat aliquam, iusto reprehenderit distinctio itaque optio architecto molestiae blanditiis tempore ipsum voluptatum dicta, consequatur sint, labore facere nam possimus corporis magnam. Veritatis aliquid placeat minus fugit exercitationem cupiditate, in animi ea expedita magnam. Odit officiis nostrum sunt vitae quis.
</p>
<h1><span class="bb-sec-6">VALAMI</span> </h1>
<h1><span class="bb-sec-6">VALAMI</span> </h1>
`

const addModelOnClick = (selector,model,content,pos) =>{
  selector.addEventListener('click', (e) => {
    e.preventDefault()
    scene.remove(activeObj)
    loadModels(model,[pos[0],pos[1],pos[2]])
    mainContent.innerHTML = content
  })
}

addModelOnClick(webshopLink,cart3d,webshopPage,[1,-4,1])
addModelOnClick(landingLink,landing3d,landing,[1,-4.5,-1])
addModelOnClick(customLink,camera3d,landing,[1,-1,-1])
addModelOnClick(contactLink,email3d,contactPage,[3,-4,0])
addModelOnClick(logo,buildings3d,mainPage,[0,-2,0])


const burger = document.getElementById('burger')
const menuList = document.getElementById('menu-list')
const menuButtons = document.getElementsByClassName('buttonLi')

burger.addEventListener('click',() => {
  burger.classList.toggle('open')
  menuList.classList.toggle('side-menu_ul_phone')
})

Array.from(menuButtons).forEach(function(element) {
  element.addEventListener('click', () => {
    burger.classList.remove('open')
    menuList.classList.remove('side-menu_ul_phone')
  });
});