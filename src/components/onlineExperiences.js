import user_1 from '../img/first-image.jpg'; 
/*Gallery pictures*/
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import pic4 from '../img/pic4.jpg';
import pic5 from '../img/pic5.jpg';
import pic6 from '../img/pic6.jpg';

/*Review Pictures*/

/*functions*/
import show2 from './show2';
import show3 from './show3';



export const onlineExperiences=[
    {
        display_pic: user_1,
        customer: 'Fola Awoniyi',
        place:'The National Theatre',
        description: "First time to the National Theatre in Lagos. Rooms were beautiful, exactly like the pictures. Staff was all super nice and accommodating. If you're looking for beach, this really isn't it. Arts and Culture is all there is. Kids enjoyed the plays too. The evening dinner/show at hotel property next door was super fun.",
        rating: '5 stars',
        date: '23/06/2021',
        experience_pictures: pic1,
        more_id: "more-1",
        more_function: show,

    },
    {
        display_pic: user_1,
        centre: 'image',
        customer: 'Jimmy Barton',
        place:'Obudu Cattle Ranch',
        description: "First time to Esperanza property in Cabo. Rooms were beautiful, exactly like the pictures. Staff was all super nice and accommodating. If you're looking for beach, this really isn't it. Pool is all there is. Kids enjoyed riding in the golf carts. The evening dinner/show at hotel property next door was super fun.",
        rating: '5 stars',
        date: '23/06/2021',
        experience_pictures: pic1,
        more_id: "more-2",
        more_function: show2,

    },
    {
        display_pic: user_1,
        centre: 'image',
        customer: 'Satoru Gojo',
        place:'Olumo Rock',
        description: "First time to Esperanza property in Cabo. Rooms were beautiful, exactly like the pictures. Staff was all super nice and accommodating. If you're looking for beach, this really isn't it. Pool is all there is. Kids enjoyed riding in the golf carts. The evening dinner/show at hotel property next door was super fun.",
        rating: '5 stars',
        date: '23/06/2021',
        experience_pictures: pic1,
        more_id: "more-3",
        more_function: show3,

    }
]



export const Gallery= [
    {
        picture: pic1
    },
    {
        picture: pic2
    },
    {
        picture: pic3
    },
    {
        picture: pic4
    },
    {
        picture: pic5
    },
    {
        picture: pic6
    },

]


function show(){
    var pics= document.getElementById("more-1");
    pics.style.display= "flex";
}

export default show;


