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
                id: 'airplane',
                type: 'image',
                rect: ['1199px', '137px','65px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"airplane.png",'0px','0px'],
                transform: [[],['-194']]
            },
            {
                id: 'DesignButton',
                type: 'rect',
                rect: ['457px', '427px','76px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [1,"rgba(0,0,0,1)","dotted"],
                userClass: "DesignButton",
                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0.65098)"],
                filter: [0, 0, 1, 1, 0, 0, 0, 14, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'DesignText',
                type: 'text',
                rect: ['468px', '448px','auto','auto','auto', 'auto'],
                text: "Designs",
                align: "center",
                font: ['allan, sans-serif', 20, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'AppButton',
                type: 'rect',
                rect: ['554px', '427px','76px','68px','auto', 'auto'],
                fill: ["rgba(14,13,13,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0.65098)"],
                filter: [0, 0, 1, 1, 0, 0, 0, 14, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'SocialButton',
                type: 'rect',
                rect: ['655px', '427px','76px','68px','auto', 'auto'],
                fill: ["rgba(6,6,6,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0.65098)"],
                filter: [0, 0, 1, 0, 0, 0, 0, 14, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'OtherButton',
                type: 'rect',
                rect: ['755px', '427px','76px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0.65098)"],
                filter: [0, 0, 1, 1, 0, 0, 0, 14, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['-494px', '375px','auto','auto','auto', 'auto'],
                text: "App Developer",
                align: "center",
                font: ['allan, sans-serif', 20, "rgba(3,3,3,1.00)", "400", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
            },
            {
                id: 'NameText',
                type: 'text',
                rect: ['541px', '316px','198px','42px','auto', 'auto'],
                text: "Ezra Kirsh",
                align: "center",
                font: ['allan, sans-serif', 50, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
            },
            {
                id: 'AppText',
                type: 'text',
                rect: ['570px', '448px','auto','auto','auto', 'auto'],
                text: "About",
                align: "center",
                font: ['allan, sans-serif', 20, "rgba(255,255,255,1.00)", "400", "none", "normal"],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'SocialText',
                type: 'text',
                rect: ['671px', '448px','auto','auto','auto', 'auto'],
                text: "Social",
                align: "center",
                font: ['allan, sans-serif', 20, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'OtherText',
                type: 'text',
                rect: ['774px', '448px','auto','auto','auto', 'auto'],
                text: "Other",
                align: "center",
                font: ['allan, sans-serif', 20, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['482px', '775px','auto','auto','auto', 'auto'],
                text: "© Ezra Kirsh. Designed with Adobe Products.",
                align: "center",
                font: ['allan, sans-serif', 20, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['622', '-130','65','378','auto', 'auto'],
                transform: [[],['42']],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['30px', '59px','5px','192px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    transform: [[],[],[],['1','1.61068']]
                },
                {
                    id: 'Ellipse',
                    type: 'ellipse',
                    rect: ['0px', '310px','65px','68px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(6,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_DesignText}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '448px'],
                ["style", "left", '468px'],
                ["style", "font-size", '20px']
            ],
            "${_Text3}": [
                ["subproperty", "textShadow.blur", '5px'],
                ["subproperty", "textShadow.offsetH", '5px'],
                ["transform", "rotateZ", '6deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "textShadow.offsetV", '5px'],
                ["style", "left", '73px'],
                ["style", "width", '1134px'],
                ["style", "top", '380px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["transform", "skewX", '0deg'],
                ["style", "font-style", 'normal'],
                ["subproperty", "textShadow.color", 'rgba(9,86,93,0.65)'],
                ["style", "text-decoration", 'none'],
                ["style", "font-size", '23px']
            ],
            "${_OtherText}": [
                ["style", "top", '448px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '774px'],
                ["style", "font-size", '20px']
            ],
            "${_airplane}": [
                ["style", "height", '68px'],
                ["transform", "rotateZ", '-247deg'],
                ["motion", "location", '1231.40625px 171.3037310625px'],
                ["style", "width", '65px']
            ],
            "${_OtherButton}": [
                ["style", "top", '427px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "filter.blur", '14px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "left", '755px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_NameTextCopy}": [
                ["style", "top", '0px'],
                ["style", "font-size", '50px'],
                ["style", "height", '42px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '543px'],
                ["style", "width", '198px']
            ],
            "${_Rectangle}": [
                ["style", "top", '59px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '30px'],
                ["transform", "scaleY", '1.61068']
            ],
            "${_AppButton}": [
                ["style", "top", '427px'],
                ["color", "background-color", 'rgba(14,13,13,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "filter.blur", '14px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "left", '554px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_SocialText}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '448px'],
                ["style", "left", '671px'],
                ["style", "font-size", '20px']
            ],
            "${_Group}": [
                ["transform", "rotateZ", '-47deg']
            ],
            "${_Text6}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '482px'],
                ["style", "top", '775px']
            ],
            "${_DesignButton}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '457px'],
                ["style", "top", '427px'],
                ["style", "border-width", '1px'],
                ["subproperty", "filter.blur", '14px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_NameText}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '541px'],
                ["style", "width", '198px'],
                ["style", "top", '316px'],
                ["style", "text-align", 'center'],
                ["style", "height", '42px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "font-size", '50px'],
                ["subproperty", "textShadow.color", 'rgba(11,83,97,0.78)']
            ],
            "${_Ellipse}": [
                ["style", "top", '310px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(6,0,0,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(60,140,152,0.79)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '1280px']
            ],
            "${_AppText}": [
                ["style", "top", '448px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '570px'],
                ["style", "font-size", '20px']
            ],
            "${_NameTextCopy2}": [
                ["style", "top", '0px'],
                ["style", "width", '198px'],
                ["style", "height", '42px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '543px'],
                ["style", "font-size", '50px']
            ],
            "${_SocialButton}": [
                ["color", "background-color", 'rgba(6,6,6,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '655px'],
                ["subproperty", "filter.saturate", '0'],
                ["style", "top", '427px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "filter.blur", '14px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '0px']
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
                { id: "eid34", tween: [ "style", "${_Text3}", "width", '1134px', { fromValue: '1134px'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid42", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid36", tween: [ "style", "${_Text3}", "left", '73px', { fromValue: '73px'}], position: 0, duration: 0, easing: "easeOutCirc" },
                { id: "eid62", tween: [ "transform", "${_Group}", "rotateZ", '42deg', { fromValue: '-47deg'}], position: 433, duration: 1022 },
                { id: "eid63", tween: [ "transform", "${_Group}", "rotateZ", '-47deg', { fromValue: '42deg'}], position: 1455, duration: 1045 },
                { id: "eid40", tween: [ "color", "${_Stage}", "background-color", 'rgba(60,140,152,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,140,152,0.79)'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid45", tween: [ "subproperty", "${_NameText}", "textShadow.color", 'rgba(11,83,97,0.78)', { fromValue: 'rgba(11,83,97,0.78)'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid47", tween: [ "transform", "${_NameText}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid53", tween: [ "style", "${_Text3}", "font-size", '23px', { fromValue: '23px'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid67", tween: [ "motion", "${_airplane}", [[1231.41, 171.3, 0, 0],[1096.11, 322.73, -104.16, 61.3, -256.44, 150.92],[958.78, 338.21, -3.75, 0.99, -74.83, 19.81],[943.29, 337.14, -79.88, -9.07, -26.49, -3.01],[790.04, 314.97, -514.33, -79.36, -206.59, -31.87],[378.33, 249.05, 0, 0]]], position: 0, duration: 2250 },
                { id: "eid72", tween: [ "motion", "${_airplane}", [[378.33, 249.05, 0, 0],[-52.18, 199.88, 0, 0]]], position: 2250, duration: 308 },
                { id: "eid56", tween: [ "subproperty", "${_Text3}", "textShadow.blur", '5px', { fromValue: '5px'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid52", tween: [ "transform", "${_Text3}", "rotateZ", '6deg', { fromValue: '6deg'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid69", tween: [ "transform", "${_airplane}", "rotateZ", '-219deg', { fromValue: '-247deg'}], position: 0, duration: 702 },
                { id: "eid70", tween: [ "transform", "${_airplane}", "rotateZ", '-190deg', { fromValue: '-219deg'}], position: 702, duration: 153 },
                { id: "eid73", tween: [ "transform", "${_airplane}", "rotateZ", '-200deg', { fromValue: '-190deg'}], position: 855, duration: 138 },
                { id: "eid71", tween: [ "transform", "${_airplane}", "rotateZ", '-177deg', { fromValue: '-200deg'}], position: 993, duration: 257 },
                { id: "eid55", tween: [ "subproperty", "${_Text3}", "textShadow.offsetV", '5px', { fromValue: '5px'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid43", tween: [ "style", "${_Text3}", "top", '380px', { fromValue: '380px'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid54", tween: [ "subproperty", "${_Text3}", "textShadow.offsetH", '5px', { fromValue: '5px'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid51", tween: [ "transform", "${_Text3}", "skewX", '0deg', { fromValue: '0deg'}], position: 702, duration: 0, easing: "easeOutCirc" },
                { id: "eid57", tween: [ "subproperty", "${_Text3}", "textShadow.color", 'rgba(9,86,93,0.65)', { fromValue: 'rgba(9,86,93,0.65)'}], position: 702, duration: 0, easing: "easeOutCirc" }            ]
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
})(jQuery, AdobeEdge, "EDGE-808270");
