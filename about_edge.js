/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['allan, sans-serif']='<script src=\"http://use.edgefonts.net/allan:n7:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['575px', '296px','auto','auto','auto', 'auto'],
                text: "About Me",
                font: ['allan, sans-serif', 40, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['242px', '400','auto','auto','auto', 'auto'],
                text: "I make apps, games, websites and pretty much anything else that involves technology<br>or anyting electronic. This website is not complete yet and more content will get posted up <br>as we go along. If you have any questions about the website or what I do, please send me an<br>email at kirshapps@gmail.com, and I will try to reply as quickly as possible",
                align: "center",
                font: ['allan, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'airplane',
                type: 'image',
                rect: ['1199px', '137px','65px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airplane.png",'0px','0px'],
                transform: [[],['-194']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(60,140,152,0.79)'],
                ["style", "width", '1280px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${_airplane}": [
                ["style", "height", '68px'],
                ["motion", "location", '1231.41px 171.3px'],
                ["transform", "rotateZ", '-247deg'],
                ["style", "width", '65px']
            ],
            "${_Text}": [
                ["style", "top", '296px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '575px'],
                ["style", "font-size", '40px']
            ],
            "${_Text2}": [
                ["style", "left", '242px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '25px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2558,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "motion", "${_airplane}", [[1231.41, 171.3, 0, 0],[1096.11, 322.73, -104.16, 61.3, -256.44, 150.92],[958.78, 338.21, -3.75, 0.99, -74.83, 19.81],[943.29, 337.14, -79.88, -9.07, -26.49, -3.01],[790.04, 314.97, -514.33, -79.36, -206.59, -31.87],[378.33, 249.05, 0, 0]]], position: 0, duration: 2250 },
                { id: "eid2", tween: [ "motion", "${_airplane}", [[378.33, 249.05, 0, 0],[-52.18, 199.88, 0, 0]]], position: 2250, duration: 308 },
                { id: "eid3", tween: [ "transform", "${_airplane}", "rotateZ", '-219deg', { fromValue: '-247deg'}], position: 0, duration: 702 },
                { id: "eid4", tween: [ "transform", "${_airplane}", "rotateZ", '-190deg', { fromValue: '-219deg'}], position: 702, duration: 153 },
                { id: "eid5", tween: [ "transform", "${_airplane}", "rotateZ", '-200deg', { fromValue: '-190deg'}], position: 855, duration: 138 },
                { id: "eid6", tween: [ "transform", "${_airplane}", "rotateZ", '-177deg', { fromValue: '-200deg'}], position: 993, duration: 257 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2106699");
