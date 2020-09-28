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
import {landingPage} from './pages/landingPage'
import {customPage} from './pages/customPage'

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
  scene.fog = new THREE.Fog('#02000e', 10, 57);

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

function loadModels(obj3d=buildings3d,objPos = [2,-3,2]) {
  const loader = new GLTFLoader();
  // so that they can be individually placed around the scene
  const onLoad = ( gltf, position ) => {
    scene.remove(activeObj)
    activeObj = gltf.scene.children[0];
    activeObj.position.copy( position );
    scene.add( activeObj );
  };
  // the loader will report the loading progress to this function
  const onProgress = () => {
  };
  // the loader will send any error messages to this function, and we'll log
  // them to to console
  const onError = ( errorMessage ) => {  };
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


function sendEmail(){
  var form = document.getElementById("contactForm");
  var button = document.getElementById("contactButton");
  var status = document.getElementById("contactStatus");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });


// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
}
const addModelOnClick = (selector,model,content,pos,contact=false) =>{
  selector.addEventListener('click', (e) => {
    e.preventDefault()
    scene.remove(activeObj)
    loadModels(model,[pos[0],pos[1],pos[2]])
    mainContent.innerHTML = content
    if (contact) {
      sendEmail()
    }
  })
}

addModelOnClick(webshopLink,cart3d,webshopPage,[1,-4,1])
addModelOnClick(landingLink,landing3d,landingPage,[1,-4.5,-1])
addModelOnClick(customLink,camera3d,customPage,[1,-1,-1])
addModelOnClick(contactLink,email3d,contactPage,[3,-4,0],true)
addModelOnClick(logo,buildings3d,mainPage,[2,-3,2])


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



