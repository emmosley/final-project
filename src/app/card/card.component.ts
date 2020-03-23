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
      img: "/assets/images/development-cat.jpg"
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
      img: "/assets/images/meeting-cat.jpg"
        },  
         {
      causeID: 37,
      causeName: "Scholarship and Financial Support",
      img: "/assets/images/scholarship-cat.jpg"
    },
    {
      causeID: 33,
      causeName: "Private Liberal Arts Colleges",
      img: "/assets/images/private-school-cat.jpg"
    },   
    {
      causeID: 41,
      causeName: "Education Policy and Reform",
      img: "/assets/images/education-reform-cat.jpg"
        },  
     {
      causeID: 49,
      causeName: "Youth Education Programs and Services",
      img: "/assets/images/elementary-cat.jpg"
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
      img: "/assets/images/pencil-cat.jpg"
      },
    {
      causeID: 8,
      causeName: "Private Elementary & Secondary Schools",
      img: "/assets/images/school-kitten-cat.jpg"
      },
    {
      causeID: 36,
      causeName: "Early Childhood Programs and Services",
      img: "/assets/images/baby-cat.jpg"
        },
    {
      causeID: 19,
      causeName: "International Peace, Security, and Affairs",
      img: "/assets/images/security-cat.jpg"
        },
    {
      causeID: 20,
      causeName: "Development and Relief Services",
      img: "/assets/images/relief-cat.jpg"
        },
    {
      causeID: 30,
      causeName: "Humanitarian Relief Supplies",
      img: "/assets/images/supplies-cat.jpg"
        },
    {
      causeID: 31,
      causeName: "Foreign Charity Support Organizations",
      img:"/assets/images/foreign-cat.jpg"
        },
    {
      causeID: 21,
      causeName: "Advocacy and Education",
      img: "/assets/images/advocacy-cat.jpg"
        },
    {
      causeID: 25,
      causeName: "Religious Media and Broadcasting",
      img: "/assets/images/religious-radio-cat.jpg"
        },
    {
      causeID: 26,
      causeName: "Religious Activities",
      img: "/assets/images/pope-cat.jpg"
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
      img: "/assets/images/welfare-cat.jpg"
        },
    {
      causeID: 6,
      causeName: "Libraries, Historical Societies and Landmark Preservation",
      img: "/assets/images/library-cat.jpg"
        },
    {
      causeID: 3,
      causeName: "Museums",
      img: "/assets/images/museum-cat.jpg"
        },  
    {
      causeID: 4,
      causeName: "Performing Arts",
      img: "/assets/images/performing-arts-cat.jpg"
        },
    {
      causeID: 5,
      causeName: "Public Broadcasting and Media",
      img: "/assets/images/pbs-cat.jpg"
        },
    {
      causeID: 10,
      causeName: "Botanical Gardens, Parks, and Nature Centers",
      img: "/assets/images/botanical-cat.jpg"
        },
    {
      causeID: 11,
      causeName: "Environmental Protection and Conservation",
      img: "/assets/images/epa-cat.jpg"
        },
    {
      causeID: 34,
      causeName: "Patient and Family Support",
      img: "/assets/images/support-cat.jpg"
        },
    {
      causeID: 13,
      causeName: "Diseases, Disorders, and Disciplines",
      img: "/assets/images/sneezing-cat.jpg"
        },
    {
      causeID: 12,
      causeName: "Treatment and Prevention Services",
      img: "/assets/images/prevention-cat.jpg"
        },
    {
      causeID: 14,
      causeName: "Medical Research",
      img: "/assets/images/research-cat.jpg"
        },
    {
      causeID: 22,
      causeName: "Community Foundations",
      img: "/assets/images/community-cat.jpg"
        },
    {
      causeID: 23,
      causeName: "Fundraising",
      img: "/assets/images/fundraising-cat.jpg"
        },
    {
      causeID: 27,
      causeName: "Housing and Neighborhood Development",
      img: "/assets/images/housing-cat.jpg"
        },
    {
      causeID: 42,
      causeName: "United Ways",
      img: "/assets/images/united-way-cat.jpg"
        },
    {
      causeID: 43,
      causeName: "Jewish Federations",
      img: "/assets/images/jewish-cat.jpg"
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
    this.apiService.getCharitiesForCause(this.causes[0].causeID).subscribe((charityData) => {
     this.charityData = charityData;
     this.favs.addFavorites(charityData);
    }
     );

    //  let charityType = this.favs.addFavorites(this.causeUrl[index]);
  //   console.log(charityType);

    this.causes.splice(0,1);
    console.log(this.causes);
  }
  dislike() {
    this.causes.splice(0,1);
    console.log(this.causes);
  }
}
