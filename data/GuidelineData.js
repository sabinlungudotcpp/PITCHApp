const GUIDELINE_DATA = [ // Array of JSON objects to store the guideline data
    {
        "guideline_id": 1, // Unqiue guideline ID
        "title_practice": "Good practice guidelines",
        "sub_heading_practice": "All personnel should be encouraged to demonstrate exemplary behavior in order to promote children's welfare and reduce the likelihood of allegations being made. The following are common sense examples of how to create a positive culture and climate",
        "image_practice": "../assets/Images/ImageGuidelines.jpg",
        "guideline_sub_title_practice": "Good practice means:",
        "good_practice_descriptions": [ // Descriptions for good practice
            
            
        ],

        "canBeModified": false
    },

    {
        "guideline_id": 2,
        "title_avoid": "Practices to be avoided",
        "sub_heading_avoid": "The following should be avoided except in emergencies. If cases arise where these sitautions are unavoidable it should be with the full knowledge and consent of someone in charge in the organization or the child's parents. For example, a child sustains an injury and needs to go to hospital, or a parent fails to arrive to pick up a child at the end of a session:",
        "practice_avoid_descriptions": [
            
        ],

        "canBeModified": false
    },

    {
        "guideline_id": 3,
        "title_sanction": "Practices never to be sanctioned",
        "sub_heading_sanction": "The following should never be sanctioned. You should never:",
        "practice_sanction_descriptions": [
            
        ],
    },

    [
        {
            "description_id": 3000,
            "report_title": "Incidents to report",
            "reports_descriptions": [
                {
                    "report_id": 3000,
                    "report_description": "1. If you accidentally hurt a player"
                },

                {
                    "report_id": 3001,
                    "report_description": "2. If he/she seems distressed in any manner"
                },

                {
                    "report_id": 3002,
                    "report_description": "3. If a player appears to be sexually aroused by your actions"
                },

                {
                    "report_id": 3003,
                    "report_description": "4. If a player misunderstands or misinterprets you have done"
                }
            ]
        }
    ]
]

export default GUIDELINE_DATA;