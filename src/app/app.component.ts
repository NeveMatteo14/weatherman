import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// import {ClarityIcons} from '@clr/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLogin = false;

  ngOnInit(): void {
    // @ts-ignore
    ClarityIcons.add({cloudy: '<svg height="20.315mm" viewBox="0 0 57.587 57.587" width="20.315mm" xmlns="http://www.w3.org/2000/svg"><title/><path d="M35.272,41.085A12.292,12.292,0,1,0,23.46,25.426a8.582,8.582,0,1,0-4.854,15.659Z" fill="#b9d8e8"/></svg>'});
    // @ts-ignore
    ClarityIcons.add({drip: '<svg height="20.315mm" viewBox="0 0 57.587 57.587" width="20.315mm" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M35.272,38.536A12.291,12.291,0,1,0,23.46,22.877a8.582,8.582,0,1,0-4.854,15.659Z" fill="#b9d8e8"/><path d="M31.419,38.028A24.388,24.388,0,0,0,29.1,35.036a24.344,24.344,0,0,0-2.317,2.992,5.112,5.112,0,0,0-.946,2.342,3.263,3.263,0,0,0,6.526,0A5.1,5.1,0,0,0,31.419,38.028Z" fill="#83b3cb"/></g></svg>'});
    // @ts-ignore
    ClarityIcons.add({rain: '<svg height="20.315mm" \
     viewBox="0 0 57.587 57.587" width="20.315mm" \
     xmlns="http://www.w3.org/2000/svg"><title/> \
     <path d="M35.25,36.834A12.292,12.292,0,1,0,23.438,21.175a8.582,8.582,0,1,0-4.853,15.659Z" \
     fill="#b9d8e8"/><g><path d="M37.208,41.516V34.454" \
     fill="none" stroke="#83b3cb" stroke-linecap="round" \
     stroke-linejoin="round" stroke-width="4"/><path \
     d="M26.045,47.145V43.123" fill="none" stroke="#9fa6b7" \
     stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/> \
     <path d="M21.591,38.3V34.454" fill="none" stroke="#615c9a" \
     stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/> \
     <line fill="none" stroke="#9fa6b7" stroke-linecap="round" stroke-linejoin="round" \
     stroke-width="4" x1="30.245" x2="30.245" y1="36.76" y2="34.454"/></g></svg>'});
    // @ts-ignore
    ClarityIcons.add({drip: '<?xml version="1.0" ?><svg height="20.315mm" viewBox="0 0 57.587 57.587" width="20.315mm" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M35.272,38.536A12.291,12.291,0,1,0,23.46,22.877a8.582,8.582,0,1,0-4.854,15.659Z" fill="#b9d8e8"/><path d="M31.419,38.028A24.388,24.388,0,0,0,29.1,35.036a24.344,24.344,0,0,0-2.317,2.992,5.112,5.112,0,0,0-.946,2.342,3.263,3.263,0,0,0,6.526,0A5.1,5.1,0,0,0,31.419,38.028Z" fill="#83b3cb"/></g></svg>'});
    // @ts-ignore
    ClarityIcons.add({windy: '<?xml version="1.0" ?><svg height="20.315mm" viewBox="0 0 57.587 57.587" width="20.315mm" xmlns="http://www.w3.org/2000/svg"><title/><path d="M33.128,15.619a3.293,3.293,0,1,1,0,6.585H12.875" fill="none" stroke="#83b3cb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path d="M41.923,19.381a4.895,4.895,0,0,1,0,9.79H30.389" fill="none" stroke="#9fa6b7" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path d="M33.128,42.406a3.293,3.293,0,1,0,0-6.585H12.875" fill="none" stroke="#615c9a" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><line fill="none" stroke="#9fa6b7" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" x1="23.02" x2="16.406" y1="29.167" y2="29.167"/></svg>'});
  }
}
