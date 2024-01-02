import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScienceService {

  constructor() { }

  courses = [
    {
      id: 101,
      name: " Quantum computers could break the internet. Here’s how to save it",

     
      image: 'assets/science1.webp',
      description:"There’s always someone who wants to get at the juicy details we’d rather keep hidden. Yet at every moment, untold volumes of private information are zipping along internet cables and optical fibers. That information’s privacy relies on encryption, a way to mathematically scramble data to prevent any snoops from deciphering it — even with the help of powerful computers. But the mathematical basis of these techniques is under threat from a foe that has, until recently, seemed hypothetical: quantum computers. In the 1990s, scientists realized that these computers could exploit the weird physics of the minuscule realm of atoms and electrons to perform certain types of calculations out of reach for standard computers. That means that once the quantum machines are powerful enough, they could crack the mathematical padlocks on encrypted data, laying bare the world’s secrets."
      
   
    },
    {
      id: 102,
      name: "A lung infection called histoplasmosis can be caused when the spores of soil fungi called Histoplasma are inhaled.",
      image: 'assets/science2.webp',
      description:"An analysis of Medicare records from 2007 through 2016 reveals that Histoplasma, Coccidioides and Blastomyces fungi have become more widespread in the United States. The fungi, which cause serious lung infections, were once thought to be confined to certain regions of the country (SN: 1/14/23, p. 32)."
    },
    {
      id: 103,
      name:"In 2023, researchers made plenty of discoveries for the record books — and the history books",
      image: 'assets/science3.webp ',
      description:"However sleep-deprived you may be, you’re probably still better rested than a northern elephant seal. During monthslong hunting trips at sea, these seals nap less than 20 minutes at a time and average just two hours of total sleep per day. That rivals African elephants for the title of mammal that sleeps the least (SN: 4/20/23)."
        
    },
   
  ];
}
