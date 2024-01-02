import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  News = [
    {
    id: 1,
author: 'Nathan Reynolds',
title: "Infrastructure Investment Plans Unveiled for Urban Renewal",
content: "Government announces a comprehensive plan for infrastructure investment, targeting urban renewal projects to enhance city living conditions and stimulate economic growth.",
description: "Building the foundations for a brighter future.",
publishedAt: '2024-01-02T09:30:00Z',
url: './assets/story1.png'
},
{
    id: 2,
author: 'Emily Carter',
title: "Global Summit Addresses Cybersecurity Challenges",
content: "Leaders from around the world convene at a global summit to discuss and strategize on addressing escalating cybersecurity challenges, emphasizing the need for international collaboration.",
description: "Securing the digital frontier.",
publishedAt: '2024-01-03T11:15:00Z',
url: './assets/news1.webp'},
{id: 3 ,
author: 'Michael Turner',
title: "Space Exploration Mission Discovers New Planetary System",
content: "Scientists reveal the findings of a recent space exploration mission, discovering a new planetary system with unique characteristics, providing valuable insights into the vastness of the cosmos.",
description: "Exploring the mysteries beyond our solar system.",
publishedAt: '2024-01-04T14:45:00Z',
url: './assets/story2.webp'
  },
{
id: 4,
author: 'Olivia Mitchell',
title: "Healthcare Innovation Award Recognizes Pioneering Medical Solutions",
content: "Innovative healthcare solutions receive recognition at an awards ceremony, highlighting pioneering advancements that have the potential to transform patient care and medical practices.",
description: "Honoring breakthroughs in healthcare.",
publishedAt: '2024-01-05T10:00:00Z',
url: './assets/story3.avif'},


];
}
