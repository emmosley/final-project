import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {FavoriteService } from '../favorite.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  causes = [
    {
      causeID: 17,
      causeName: "Children's and Family Services",
      img: "/assets/images/kids-and-cats.jpg"
    },
    {
      causeID: 28,
      causeName: "Homeless Services",
      img: "/assets/images/homeless-cat.jpg"
    },{
      causeID: 44,
      causeName: "Rescue Missions",
      img: "/assets/images/rescue-cat.jpg"
    },{
      causeID: 16,
      causeName: "Youth Development, Shelter, and Crisis Services",
      img: "/assets/images/elementary-cat.jpg"
    },
    {
      causeID: 15,
      causeName: "Multipurpose Human Service Organizations",
      img: "/assets/images/service-cat.jpg"    
    },
    {
      causeID: 18,
      causeName: "Food Banks, Food Pantries, and Food Distribution",
      img: "/assets/images/food-cat.jpg"    
    },
    {
      causeID: 29,
      causeName: "Social Services",
      img: ""
        },  
         {
      causeID: 37,
      causeName: "Scholarship and Financial Support",
      img: ""
    },
    {
      causeID: 33,
      causeName: "Private Liberal Arts Colleges",
      img: ""
    },   
    {
      causeID: 41,
      causeName: "Education Policy and Reform",
      img: ""
        },  
     {
      causeID: 49,
      causeName: "Youth Education Programs and Services",
      img: ""
        },   
    {
      causeID: 38,
      causeName: "Special Education",
      img: "/assets/images/special-needs-cat.jpg"
    },   
    {
      causeID: 9,
      causeName: "Universities, Graduate Schools, and Technological Institutes",
      img: "/assets/images/university-cat.jpg"
        },
    {
      causeID: 39,
      causeName: "Adult Education Programs and Services",
      img: "/assets/images/adult-study-cat.jpg"
        },
    {
      causeID: 7,
      causeName: "Other Education Programs and Services",
      img: ""
        },
    {
      causeID: 8,
      causeName: "Private Elementary & Secondary Schools",
      img: ""
        },
    {
      causeID: 36,
      causeName: "Early Childhood Programs and Services",
      img: ""
        },
    {
      causeID: 19,
      causeName: "International Peace, Security, and Affairs",
      img: ""
        },
    {
      causeID: 20,
      causeName: "Development and Relief Services",
      img: ""
        },
    {
      causeID: 30,
      causeName: "Humanitarian Relief Supplies",
      img: ""
        },
    {
      causeID: 31,
      causeName: "Foreign Charity Support Organizations",
      img: ""
        },
    {
      causeID: 21,
      causeName: "Advocacy and Education",
      img: ""
        },
    {
      causeID: 25,
      causeName: "Religious Media and Broadcasting",
      img: ""
        },
    {
      causeID: 26,
      causeName: "Religious Activities",
      img: ""
        },
    {
      causeID: 32,
      causeName: "Zoos and Aquariums",
      img: "/assets/images/zoo-cat.jpg"
        },
    {
      causeID: 1,
      causeName: "Wildlife Conservation",
      img: "/assets/images/wildlife-cat.jpg"
        },  
    {
      causeID: 2,
      causeName: "Animal Rights, Welfare, and Services",
      img: ""
        },
    {
      causeID: 6,
      causeName: "Libraries, Historical Societies and Landmark Preservation",
      img: "/assets/images/library-cat.jpg"
        },
    {
      causeID: 3,
      causeName: "Museums",
      img: ""
        },  
    {
      causeID: 4,
      causeName: "Performing Arts",
      img: ""
        },
    {
      causeID: 5,
      causeName: "Public Broadcasting and Media",
      img: ""
        },
    {
      causeID: 10,
      causeName: "Botanical Gardens, Parks, and Nature Centers",
      img: ""
        },
    {
      causeID: 11,
      causeName: "Environmental Protection and Conservation",
      img: ""
        },
    {
      causeID: 34,
      causeName: "Patient and Family Support",
      img: ""
        },
    {
      causeID: 13,
      causeName: "Diseases, Disorders, and Disciplines",
      img: ""
        },
    {
      causeID: 12,
      causeName: "Treatment and Prevention Services",
      img: ""
        },
    {
      causeID: 14,
      causeName: "Medical Research",
      img: ""
        },
    {
      causeID: 22,
      causeName: "Community Foundations",
      img: ""
        },
    {
      causeID: 23,
      causeName: "Fundraising",
      img: ""
        },
    {
      causeID: 27,
      causeName: "Housing and Neighborhood Development",
      img: ""
        },
    {
      causeID: 42,
      causeName: "United Ways",
      img: ""
        },
    {
      causeID: 43,
      causeName: "Jewish Federations",
      img: ""
        },    
  ];
  shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
  causeArray = this.shuffle(this.causes);
  charityData;
  data = null;
  cause = null;
  constructor(public favs: FavoriteService, public apiService: ApiService ) { }
  // causeUrl = "https://api.data.charitynavigator.org/v2/Organizations?app_id=0e8799c4&app_key=673f09ef0609a336db46bd2cc7630d6e&categoryID=6";
  ngOnInit() {
    this.apiService.getRandomCause().subscribe((cause) => this.cause = cause);
    //TODO get random cause, set this.cause { causeID: 5 }
  }
  swipeRight(){
    //api call store response in array
   this.apiService.getCharitiesForCause().subscribe((charityData) => {
     this.charityData = charityData;
     this.favs.addFavorites(charityData);
    }
     );
    //  let charityType = this.favs.addFavorites(this.causeUrl[index]);
  //   console.log(charityType);
  }
  dislike() {
    this.causes.splice(0,1);
    console.log(this.causes);
  }
}
