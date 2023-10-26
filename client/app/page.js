'use client'
import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three'
import axios from "axios";
import {AlertProvider, useAlert} from './components/utils/AlertContext';
import Modal from "@/app/components/utils/Modal";
import SearchBar from "@/app/components/utils/SearchBar";
function Stat({stat, value}) {
    return (<span className="border-2 border-amber-800 rounded-b-md m-2">{stat ?? "no stat"}: {value ?? "none"}</span>)
}
import { createWorld } from './world';

function Stats(props) {
    return (<div className={props.className + " bg-indigo-500 flex flex-col"}>
        <Stat stat="hp" value={props.stats.hp}/>
        <Stat stat="type" value={props.stats.type}/>
        <Stat stat="attacks" value={props.stats.attacks}/>
        <Stat stat="rarity" value={props.stats.rarity}/>
    </div>);
}

function Camera(props) {
    return (<button className={props.className + " bg-red-500"}>
        {/*<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->*/}
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>)
}

function Header(props) {
    const [apiData, setApiData] = useState("");

    useEffect(() => {
        if(props.startupData)
            handleDataEmitted(props.startupData)
    }, [props.startupData]);

    const handleDataEmitted = (data) => {
        // Handle the data emitted by the child component here
        let attacks = data.data[0].attacks.map((attack) => {
            return (<ul className="flex flex-col items-center">
                <li>{attack.name}</li>
            </ul>)
        });
        setApiData({
            // TODO: use the data object to call the attributes
            // hint: the fields are the same value as the the frontend fields under the data json
            hp: '140', type: 'water', attacks: 'growl', rarity: 'Holo GX',
        });
    };
    return (<div className={props.className}>
        <div
            className="rounded-md border shadow-sm flex flex-row gap-10 justify-between items-start bg-yellow-700 py-4">
            <Camera className="mx-4"></Camera>
            <SearchBar className="max-w-[50%]" onEventEmitted={handleDataEmitted}/>
            <Stats className="w-[33%] mx-4" stats={apiData}></Stats>

        </div>
    </div>)
}


//
function Alert() {
    const {alert} = useAlert();

    return alert.show ? (<div role="alert" className="absolute bottom-0 border-s-4 border-red-500 bg-red-50 p-4">
        <strong className="block font-medium text-red-800">{alert.title || 'Something went wrong'}</strong>
        <p className="mt-2 text-sm text-red-700">{alert.text || 'Error, please try again.'}</p>
    </div>) : null;
}

async function StartScene(image_link, container) {

    // TODO: add the creatWorld Function here
    await createWorld(image_link, container);
}

export default function Home(props) {
    const threeContainer = useRef();
    const [apiData, setApiData] = useState("");
    // const {showAlert, hideAlert} = useAlert();

    function startAction() {
        axios.get(`/api/cards/`)
            .then((response) => {
                // On success, emit the data to the parent
                setApiData(response.data);
            })
            .catch((error) => {
                // showAlert('Start Error', 'There was an issue starting the app!');
                console.error('API request failed:', error);
            });
    }

    useEffect(() => {
        startAction()
    }, []);

    useEffect(() => {
// Create a Three.js scene
        if (threeContainer.current.children.length === 0) {
            if (apiData){
                // TODO: add the scene if the api data has loaded
                // hint: data needed will be the images attribute from the first entry of the data and threeContainer.current
            
            }

            

            // TODO: Comment the entire scene out once implemented

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();

            renderer.setSize(window.innerWidth, window.innerHeight);
            threeContainer.current.appendChild(renderer.domElement);

            scene.background = new THREE.Color('skyblue')
            const axesHelper = new AxesHelper(25);
            const gridHelper = new GridHelper(50, 10);
            scene.add(axesHelper, gridHelper);
            
            // TODO: add a new BoxGeometry
            // TODO: ada a new MeshBasicMaterial
            // TODO: make the cube using a new Mesh and passing in the geometry and material

            // TODO: add the cube to the scene

            camera.position.z = 5;

            // Render the scene
            const animate = () => {
                requestAnimationFrame(animate);

                // TODO: animate the cube by adjusting the rotation on the x and y axis     

                renderer.render(scene, camera);
            };

            animate();
            
           
        }
    }, [threeContainer.current]);

    return (<AlertProvider>
        <Alert title="Search" text="Unable to find that pokemon"/>
        <Header className="absolute w-full" startupData={apiData}/>
        <Modal />
        <div className="bg-yellow-700" ref={threeContainer}/>
    </AlertProvider>)
}
