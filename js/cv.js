//add Display name in the left div
var parent=document.getElementsByClassName('left-wrapper');
element1=document.createElement('div');
element1.classList.add("name");
element1.innerHTML = 'Spandan Pyakurel';
parent[0].appendChild(element1); 

//add profession in the left div
element2=document.createElement('div');
element2.classList.add("profession");
element2.innerHTML = 'Computer Engineering';
parent[0].appendChild(element2);

//add profile section to the left div
profile=document.createElement('div');
profile.classList.add("profile");
parent[0].appendChild(profile);

profile_head=document.createElement('span');
profile_head.classList.add("div_head");
profile_head.innerHTML = 'Profile';
profile.appendChild(profile_head);

profile_text=document.createElement('span');
profile_text.classList.add("normal_text");
profile_text.classList.add("no-padding");
profile_text.innerHTML = 'I am a Computer Engineering student interested in developing professional skills.';
profile.appendChild(profile_text);

//add contact section to the left div
contact=document.createElement('div');
// contact.classList.add("profile");
parent[0].appendChild(contact);

contact_head=document.createElement('span');
contact_head.classList.add("div_head");
contact_head.innerHTML = 'Contact';
contact.appendChild(contact_head);

var list_of_contacts=['9845164346.','072bct539@pcampus.edu.np','Kathmandu'];

for(i=0;i<3;i++){
    element=document.createElement('span');
    element.classList.add("normal_text");
    element.classList.add("no-padding");
    element.innerHTML = list_of_contacts[i];
    contact.appendChild(element);
}

//add Academic Qualifications
Qualification=document.createElement('div');
// Qualification.classList.add("profile");
parent[0].appendChild(Qualification);

q_head=document.createElement('span');
q_head.classList.add("div_head");
q_head.innerHTML = 'Academic Qualifications';
Qualification.appendChild(q_head);


var list_of_q=['BACHELOR\'S DEGREE, 2015-ONGOING','HIGH SCHOOL,2012- 2014','SCHOOL,2006- 2012'];
var q_details=['Pulchowk Campus, IOE','Average marks (till date) :81%','St. Xavier\'s College, Maitighar',
'Grade: 84%','G.S. Niketan Secondary School','Grade: 89%'];
var counterq=0;
for(i=0;i<3;i++){
    element2=document.createElement('span');
    element2.classList.add("normal_text");
    element2.innerHTML = list_of_q[i];
    Qualification.appendChild(element2);
    for(j=0;j<2;j++){
        element3=document.createElement('span');
        element3.classList.add("in_text");
        element3.innerHTML = q_details[counterq];
        element2.appendChild(element3);
        counterq++;

    }
}

//add honours and awards
honors=document.createElement('div');
// honors.classList.add("profile");
parent[0].appendChild(honors);

h_head=document.createElement('span');
h_head.classList.add("div_head");
h_head.innerHTML = 'Honours and Awards';
honors.appendChild(h_head);


var list_of_h=['WINNER AT SPIRATHON, 2017, A TWO-DAY APPATHON','PRESIDENT\'S APPRECIATION AWARD, 2016','Reward BY BHIM BHIRAG SANGEET SAHITYA KALA PRATISTHAN, 2010'];
var h_details=['Spiralogics International','Kathmandu Valley Leo Club','Bhim Bhirag Sangeet Sahitya Award'];
var counterq=0;
for(i=0;i<3;i++){
    element2=document.createElement('span');
    element2.classList.add("normal_text");
    element2.innerHTML = list_of_h[i];
    honors.appendChild(element2);
    
    element3=document.createElement('span');
    element3.classList.add("in_text");
    element3.innerHTML = h_details[i];
    element2.appendChild(element3);

}


//add Technical Skills
technical=document.createElement('div');
// technical.classList.add("profile");
parent[0].appendChild(technical);

technical_head=document.createElement('span');
technical_head.classList.add("div_head");
technical_head.innerHTML = 'Technical Skills';
technical.appendChild(technical_head);

technical_text=document.createElement('span');
technical_text.classList.add("normal_text");
technical_text.classList.add("no-padding");
technical_text.innerHTML = ' Django | Python | Data Mining | Machine Learning | Android | SQL | PostgreSQL | Android | Bootstrap | C | C++| Software Engineering';
technical.appendChild(technical_text);

//add Non Technical Skills
ntechnical=document.createElement('div');
// ntechnical.classList.add("profile");
parent[0].appendChild(ntechnical);

ntechnical_head=document.createElement('span');
ntechnical_head.classList.add("div_head");
ntechnical_head.innerHTML = 'Non Technical Skills';
ntechnical.appendChild(ntechnical_head);

ntechnical_text=document.createElement('span');
ntechnical_text.classList.add("normal_text");
ntechnical_text.classList.add("no-padding");
ntechnical_text.innerHTML = ' Communication | Self Motivation | Adaptability | Leadership | Enthusiasm | Presentation ';
ntechnical.appendChild(ntechnical_text);


//add Projects in the right wrapper

var parent2=document.getElementsByClassName('right-wrapper');
projects=document.createElement('div');
parent2[0].appendChild(projects); 

pr_head=document.createElement('span');
pr_head.classList.add("div_head");
pr_head.innerHTML = 'Honours and Awards';
projects.appendChild(pr_head);


var list_of_pr=['Near-realtime Assessment of Fine Scale SpatioTemporal Weather Anamolies and Pollution Proxies in Kathmandu Valley,2019',
                'Facial Landmarks Detection,2018',
                'Smart Discussion Forum, 2018',
                'Msc Teachers and Experts Database,2018',
                'Number Plate Recognition System,2017',
                'MeriSaathi App,2017',
                'Bus Ticket Booking App,2016'
            ];
var pr_details=['My role in the project was to parse the data in the appropriate format, data cleaning, Pre-processing, integration of data from various sources,database handling and make APIs for FrontEnd rendering.',
                'My role in the project was to extract frame from video and pre-process the frame for dataset preparation and to combine the output frames into video and dynamic overlaying of images(hat, glasses) into the original image.',
                'My role in the project was analysis of the scope, usecase of project and prepare UML diagrams. Also, to handle the database of the project completely and implement search tags and some of the FrontEnd entities.',
                 'My role in the project was to handle the database of the project',
                 'My role in the project was to prepare model for OCR,extract number plate from the image, pre-process, segment the image and implement OCR. This project was demonstrated in Locus.',
                 'My role in the project was to handle the database of the project as well as frontEnd part of the system. This project made us the winner of Spirathon.',
                 'My role in the project was to handle the database of the project as well as frontEnd part of the system. This project was demonstrated in Locus.'   
            ];
var counterq=0;
for(i=0;i<7;i++){
    element2=document.createElement('span');
    element2.classList.add("normal_text");
    element2.innerHTML = list_of_pr[i];
    projects.appendChild(element2);
    
    element3=document.createElement('span');
    element3.classList.add("in_text");
    element3.innerHTML = pr_details[i];
    element2.appendChild(element3);

}

//add honours and awards
conference=document.createElement('div');
conference.classList.add("conference");
parent2[0].appendChild(conference);

c_head=document.createElement('span');
c_head.classList.add("div_head");
c_head.innerHTML = 'Conference Presentations';
conference.appendChild(c_head);


var list_of_c=['\'Sentence Ranking And Answer Pinpointing In Online Discussion Forums Utilising User-generated Metrics And Highlights\'. NASCOIT, 2018',
                '\'Near-real Time Profiling Of Fine Scale Environmental Proxies Using Mobile Sensors Along Kathmandu Road Lines\',ICQRIT, 2019'];

var counterq=0;
for(i=0;i<2;i++){
    element2=document.createElement('span');
    element2.classList.add("normal_text");
    element2.innerHTML = list_of_c[i];
    conference.appendChild(element2);

}
