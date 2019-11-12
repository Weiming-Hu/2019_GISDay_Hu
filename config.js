var config = {
    style: 'mapbox://styles/weimingpsu/ck2te2kvu40uh1crrci1drk5q',
    accessToken:  'pk.eyJ1Ijoid2VpbWluZ3BzdSIsImEiOiJjam5sdTNuMWIwYjFuM3FueGdhaGlpaTlsIn0.Z1kqBlmMmpb3vwteZ8lNTA',
    showMarkers: false,
    theme: 'light',
    alignment: 'center',
    title: 'Optimal Locations in Weather Predictions',
    subtitle: 'Using a Genetic Algorithm for Optimal Location Finding in Weather Predictions',
    byline: 'Weiming Hu',
    footer: 'Hu, Weiming, and Guido Cervone. "Dynamically Optimized Unstructured Grid (DOUG) for Analog Ensemble of numerical weather predictions using evolutionary algorithms." Computers & Geosciences 133 (2019): 104299.',
    chapters: [
        {
            id: 'slide-terrain',
            title: 'Model Simulation for Complex Terrains',
            image: 'images/resolutions.png',
            description: 'Numerical models usually use a regular mesh grid to discretize complex terrains. The above diagram shows a comparison between the grids used by models with different spatial resolutions. Higher resolutions correspond to smaller grid cells and more details in the model.',
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
            description: 'While higher resolution usually contributes to more accurate results, the computation requirement grows drastically. For example, As shown here is the maximum temperature for August 2019 generated from North American Mesoscale (NAM) forecast system. NAM is a high-resolution weather model with12 km spatial resolution. To cover the entire continental US, it incorporates more than 200,000 grid cells.',
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
            id: 'slide-question',
            title: 'Research Question',
            description: 'Therefore, my research focuses on <b>location-based optimization for weather models</b>. Reducing the number of grid cells could save computation, but it also leads to reduced overall accuracy. The question is <b> how to identify a limited set of locations for weather predictions that both save computation and ensure the overall prediction accuracy </b>.',
            location: {
                center: [-98.26468, 39.29738],
                zoom: 4.88,
                pitch: 3.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'CONUS-tmax-August',
                    opacity: 0.5
                },
                {
                    layer: 'NAM-random',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'CONUS-tmax-August',
                    opacity: 0
                },
                {
                    layer: 'NAM-random',
                    opacity: 0
                }
            ]
        },
        {
            id: 'slide-GA-1',
            title: 'Genetic Algorithm and Weather Forecasts',
            image: 'images/GA.gif',
            description: 'To find this optimized set of locations, we rely on a powerful optimization algorithm, Genetic Algorithm (GA). The animation shows how GA typically works. The algorithm relies on a population of possible solutions (shown as black dots) and a predefined objective (e.g. to find the lowest point on a complex terrain). Through competition and exploration, the population gradually converges to the global minimum of the terrain.',
            location: {
                center: [-80.10210, 35.66005],
                zoom: 5.21,
                pitch: 3.50,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-GA-2',
            title: 'Study Area',
            description: 'The study region is an area from the east coast with <b>4,424</b> grid cells. We will select <b>100</b> locations and then generate predictions for these locations using <a href="https://weiming-hu.github.io/AnalogsEnsemble/">Analog Ensemble</a>. Predictions for the rest of the area will be derived from these 100 locations.',
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
            id: 'slide-GA-3',
            title: 'Genetic Algorithm and Weather Forecasts (Cont.)',
            image: 'images/GA-crossover.jpeg',
            description: 'The left figure shows the optimized locations identified by GA after 500 iterations. The right figure shows the fitness evolution of the population. The solution is considered to be found when the population converges.',
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
            id: 'slide-GA-4',
            title: 'Genetic Algorithm and Weather Forecasts (Cont.)',
            image: 'images/model-comparison.jpeg',
            description: 'The left figure compares the global errors among predictions generated from <b style="color:#cc0000;">100 randomly picked locations</b>, <b style="color:#0066ff;">100 GA identified locations</b>, <b style="color:#33cc33;">4,424 locations from Analog Ensemble</b>, and <b style="color:#990099;">4,424 locations from NAM</b>. The right figure shows how far are <b style="color:#cc0000;">random selection</b> and <b style="color:#0066ff;">GA selection</b> away from the theretical optimum.',
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
            title: 'Impact',
            description: 'These results show that we can use far fewer points to approximate a higher resolution forecast. The semi-transparent background shows the constructed unstructured grid from the optimized locations. These locations have many implications, e.g. for how to deploy minimal weather sensors in a region to achieve the highest overall observational accuracy.',
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
            description: 'Currently, the locations are identified purely based on weather prediction accuracy, but it is not limited. By adding a traffic route layer, we can add rules to GA to make it prefer locations that are closer to traffic.',
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
                    opacity: 0.5
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
            description: 'Link to paper <a href="https://www.sciencedirect.com/science/article/pii/S0098300418306678">Computers & Geosciences</a> </br> Weiming Hu <a href="https://weiming-hu.github.io/">https://weiming-hu.github.io/</a> </br> GEOLab <a href="http://geoinf.psu.edu/">http://geoinf.psu.edu/</a>',
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
