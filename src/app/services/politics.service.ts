import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoliticsService {

  constructor() { }
  courses = [
    {
      id: 101,
      name: " 'Stop weaponising tech': Congress slams Central govt for making Aadhaar 'mandatory' for MGNREGA payments",

     
      image: 'assets/politics1.webp',
      description:'With the payment of MGNREGA workers reportedly to be done only through an Aadhaar-based system, the Congress on Monday hit out at the Central government, saying that it should "stop weaponising technology", especially Aadhaar, to deny the most vulnerable Indians their social welfare benefits.',

      
   
    },
    {
      id: 102,
      name: "'Sonia Gandhi won't make Kharge INDIA bloc's PM face as...': Ex-Congress leader",
      
      image: 'assets/politics2.avif',
      description:"As the Congress prepares to host a big event in Nagpur on its 138th Foundation Day, BJP leader Ashish Deshmukh asked if the Congress would announce Mallikarjun Kharge as the PM face at the event. Former Congress leader and now BJP spokesperson Ashish Deshmukh took a dig at his former party, alleging that Sonia Gandhi won't make Congress President Mallikarjun Kharge the prime ministerial candidate for the Opposition alliance INDIA as she wants the post for her son, Rahul Gandhi. Deshmukh's remarks came as the Congress prepares for a grand celebration on its 138th Foundation Day in Nagpur on December 28. The party has planned a big event at Bahadura ground in Dighori naka and expects a crowd of 10 lakh people. "
 
    },
    {
      id: 103,
      name:"Political upheavals in 2024 will wipe BJP out, says Jharkhand CM Soren",
      image: 'assets/politics3.jpg',
      description:'“The year 2024 is going to be a year of great political upheavals - both in Jharkhand and the nation. They are not in power in Jharkhand, West Bengal, Bihar, and Odisha. They are in power in a few states after recent elections. But after the mahasangram of 2014, they will be wiped out completely,” said chief minister Soren.'
        
    },
   
  ];
}
