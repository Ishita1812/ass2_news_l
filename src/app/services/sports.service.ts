import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor() { }
  courses = [
    {
      id: 101,
      name: '"Virat Kohli Told Camerapersons To...": Intriguing Details Of Indias Practice Before Do-Or-Die Test vs South Africa',

     
      image: 'assets/sport1.webp',
      description:"The first Test of 2024 for the Indian cricket team is a do-or-die one. Against South Africa in Cape Town, the Rohit Sharma-led side needs a win to draw the series. after an embarrassing loss by an innings and 32 runs, the Indian cricket team has its task cut out for the second Test. There will be much intrigue surrounding India's playing XI too. Many experts have predicted that there will be two changes in the XI. Ravichandran Ashwin may make way for Ravindra Jadeja while Mukesh Kumar may replace Prasidh Krishna. The practice session before Test was interesting two with Virat Kohli showing great intent."
      
   
    },
    {
      id: 102,
      name: '"All That Talent...": Iceland Cricket Trolls Pakistan Team Director Mohammad Hafeez As He Misses Flight For 3rd Test',
      
      image: 'assets/sport2.webp',
      description:"Pakistan cricket Team director Mohammad Hafeez missed his flight to Sydney for Pakistan's final Test series clash against Australia, according to Geo News. Australia gained an unassailable lead of 2-0 following their second consecutive triumph in the three-match series against the Asian Giants. According to Geo News sources, Hafeez was travelling with his wife and was supposed to travel to Sydney with the Pakistan team but he missed the flight at the airport."
 
    },
    {
      id: 103,
      name:"Mohamed Salah Sends Liverpool Three Points Clear Atop Premier League",
      image: 'assets/sport3.webp',
      description:"Jurgen Klopp's team should have run out even more convincing winners as Martin Dubravka saved Salah's first-half penalty among 10 stops. But Salah made amends from the spot after he, Curtis Jones and Cody Gakpo had netted in the second half to inflict a seventh defeat in eight games on Newcastle. Liverpool head into the Premier League's winter break five points clear of title rivals Manchester City and Arsenal, with Aston Villa posing an unexpected challenge in second place."
        
    },
   
  ];
}
