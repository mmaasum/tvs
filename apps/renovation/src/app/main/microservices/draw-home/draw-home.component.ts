import { Component, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SplitterComponent} from '@syncfusion/ej2-angular-layouts';
import { Splitter } from '@syncfusion/ej2-layouts';

// import {} from '../../../../assets/tradesman/'

@Component({
  selector: 'tvs-draw-home',
  templateUrl: './draw-home.component.html',
  styleUrls: ['./draw-home.component.css']
})
export class DrawHomeComponent implements OnInit {

  constructor() { 
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );

    // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // // const cube = new THREE.Mesh( geometry, material );
    // // scene.add( cube );

    // camera.position.z = 200;
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // // controls.campingFactor = 0.25;
    // controls.enableZoom = true;

    // const keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    // keyLight.position.set(100, 0, 100);

    // const fillLignt = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    // fillLignt.position.set(-100, 0, 100);

    // const backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    // backLight.position.set(100, 0, -100).normalize();

    // scene.add(keyLight);
    // scene.add(fillLignt);
    // scene.add(backLight);

    // // Mycode
    // const objLoader = new THREE.ObjectLoader();
    // objLoader.setPath('../../../../assets/tradesman/');
    // objLoader.load('house_design_template_Main.igs', function(objt){
    //   objt.position.y -= 60;
    //   scene.add(objt);
    // });




    // // const manager = new THREE.LoadingManager();
    // // const loader = new THREE.ObjectLoader(manager);

    // // loader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', function(object) {
    // //   object.position.y -= 60;
    // //   scene.add(object);
    // // });


    // // const objLoader = new THREE.ObjectLoader();
    // // objLoader.setPath('../../../../assets/tradesman/');
    // // objLoader.load('house_design_template.obj', function(object){
    // //   object.position.y -= 60;
    // //   scene.add(object);
    // // })
    // // end my code
    // const animate = function () {
    //   requestAnimationFrame( animate );
    //   controls.update();
    //   // cube.rotation.x += 0.01;
    //   // cube.rotation.y += 0.01;

    //   renderer.render( scene, camera );
    // };

    // animate();

      }


      @ViewChild('splitterInstance') splitterObj: SplitterComponent;
      public onCreated () {
          const splitterObj1 = new Splitter({
              height: '310px',
              paneSettings: [
                  { size: '150px', min: '20%'},
                  { size: '100px', min: '20%'}
              ],
              orientation: 'Vertical'
          });
          splitterObj1.appendTo('#vertical_splitter');
      }
      
  ngOnInit(): void {
  }

}
