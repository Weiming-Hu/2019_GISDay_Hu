var config = {
    style: 'mapbox://styles/weimingpsu/ck2te2kvu40uh1crrci1drk5q',
    accessToken:  'pk.eyJ1Ijoid2VpbWluZ3BzdSIsImEiOiJjam5sdTNuMWIwYjFuM3FueGdhaGlpaTlsIn0.Z1kqBlmMmpb3vwteZ8lNTA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Optimal Locations in Weather Predictions',
    subtitle: 'Using a Genetic Algorithm for Optimal Location Finding in Weather Predictions',
    byline: 'Weiming Hu',
    footer: 'Hu, Weiming, and Guido Cervone. "Dynamically Optimized Unstructured Grid (DOUG) for Analog Ensemble of numerical weather predictions using evolutionary algorithms." Computers & Geosciences 133 (2019): 104299.',
    chapters: [
        {
            id: 'slide-terrain',
            title: 'Model Simulation for Complex Terrains',
            image: 'images/resolutions.png',
            description: 'Numerical models usually use a regular mesh grid to represent the complex terrain. The follow digram shows a comparison between mesh grids with different spatial resolution. Higher resolution corresponds to smaller grid cells, and higher details in the model.',
            location: {
                center: [-115.86573, 50.26637],
                zoom: 2.54,
                pitch: 24.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide-resolutions',
            title: 'North American Mesoscale Weather Forecast System',
            description: '',
            location: {
                center: [-115.80038, 38.97474],
                zoom: 4.93,
                pitch: 3.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'CONUS-tmax-August',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'CONUS-tmax-August',
                    opacity: 0
                }
            ]
        },
        {
            id: 'slide-GA-1',
            title: 'Genetic Algorithm and Weather Forecasts',
            image: 'images/GA.gif',
            description: 'We can use a Genetic Algorithm to optimize the locations for weather predictions. Weather forecasts for these specific locations will be generated.',
            location: {
                center: [-80.10210, 35.66005],
                zoom: 5.21,
                pitch: 3.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'Regular-obs',
                    opacity: 0.8
                },
                {
                    layer: 'Regular',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: 'Regular-obs',
                    opacity: 0
                },
                {
                    layer: 'Regular',
                    opacity: 0
                }
            ]
        },
        {
            id: 'slide-GA-2',
            title: 'Genetic Algorithm and Weather Forecasts (Cont.)',
            image: 'images/GA-crossover.jpeg',
            description: 'Genetic Algorithm optimizes locations for weather forecasts.',
            location: {
                center: [-80.10210, 35.66005],
                zoom: 5.21,
                pitch: 3.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'Regular-obs',
                    opacity: 0.8
                },
                {
                    layer: 'DOUG-points',
                    opacity: 0.7 
                }
            ],
            onChapterExit: [
                {
                    layer: 'Regular-obs',
                    opacity: 0
                },
                {
                    layer: 'DOUG-points',
                    opacity: 0
                }
            ]
        },
        {
            id: 'slide-GA-3',
            title: 'Genetic Algorithm and Weather Forecasts (Cont.)',
            image: 'images/model-comparison.jpeg',
            description: 'GA generated solution is as accurate to the high resolution model.',
            location: {
                center: [-80.10210, 35.66005],
                zoom: 5.21,
                pitch: 3.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'DOUG-AnEn',
                    opacity: 0.8
                },
                {
                    layer: 'DOUG',
                    opacity: 0.7
                }
            ],
            onChapterExit: [
                {
                    layer: 'DOUG-AnEn',
                    opacity: 0
                },
                {
                    layer: 'DOUG',
                    opacity: 0
                }
            ]
        },
        {
            id: 'application-1',
            title: 'Summary and Impact',
            description: 'The unstructured grid can be optimized based on multiple objective functions, not limited to weather variables only, but also on demographic dataset, for example, traffic routes.',
            location: {
                center: [-77.56573, 38.21628],
                zoom: 7.68,
                pitch: 3.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'DOUG-CONUS',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'DOUG-CONUS',
                    opacity: 0
                }
            ]
        },
        {
            id: 'application-2',
            title: 'Summary and Impact (Cont.)',
            description: 'The unstructured grid can be optimized based on multiple objective functions, not limited to weather variables only, but also on demographic dataset, for example, traffic routes.',
            location: {
                center: [-77.04684, 38.89452],
                zoom: 9.33,
                pitch: 3.50,
                bearing: -0.04
            },
            onChapterEnter: [
                {
                    layer: 'traffic',
                    opacity: 1
                },
                {
                    layer: 'DOUG-CONUS',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'traffic',
                    opacity: 0
                },
                {
                    layer: 'DOUG-CONUS',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Thankyou',
            title: 'Thank You',
            description: 'Weiming Hu https://weiming-hu.github.io/ </br> GEOLab http://geoinf.psu.edu/',
            location: {
                center: [-115.86573, 50.26637],
                zoom: 2.54,
                pitch: 24.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
