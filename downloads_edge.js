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
                rect: ['537px', '267px','auto','auto','auto', 'auto'],
                text: "Downloads",
                font: ['allan, sans-serif', 40, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'screen',
                type: 'image',
                rect: ['644px', '391px','227px','142px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"screen.jpg",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['408px', '391px','197px','58px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['437px', '399px','auto','auto','auto', 'auto'],
                text: "Download",
                align: "left",
                font: ['allan, sans-serif', 40, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '267px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '537px'],
                ["style", "font-size", '40px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(60,140,152,0.79)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '1280px']
            ],
            "${_Rectangle}": [
                ["style", "left", '408px'],
                ["style", "top", '391px']
            ],
            "${_Text2}": [
                ["style", "top", '399px'],
                ["style", "left", '437px']
            ],
            "${_screen}": [
                ["style", "height", '142px'],
                ["style", "top", '391px'],
                ["style", "left", '644px'],
                ["style", "width", '227px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
})(jQuery, AdobeEdge, "EDGE-16384241");
