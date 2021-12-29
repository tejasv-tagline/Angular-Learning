import { Component } from '@angular/core';

export interface Items {
  photo: string;
  title: string;
  text: string;
  button: string;
}

export interface Technologies {
  photo: string;
}

export interface Empdegree {
  employee: string;
  degree: string;
}

export interface Quotes {
  reviewText: string;
  reviewWriter: string;
}

export interface Blogs {
  photo: string;
  title: string;
  text: string;
  footer: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public items: Items[] = [
    {
      photo: 'assets/cardphoto.jpeg',
      title: 'Mobile Development',
      text: 'At Tagline Infotech, We have a dedicated Android and iOS mobile app development team. Our team has excellent strength in each area of react-native, swift, objective-c, KOTLIN, Java SDK, and flutter.',
      button: 'Mobile',
    },
    {
      photo: 'assets/lan.png',
      title: 'UX/UI Design',
      text: 'Here at Tagline, we make the user experience a smooth trip. Our design principles are always to put the user first, create straightforward, easy-to-navigate interfaces, and provide a smooth end-to-end experience.',
      button: 'UX / UI',
    },
    {
      photo: 'assets/laptop.jpeg',
      title: 'Web Application Development',
      text: "Tagline Infotech is a web application development company with offices in India and the United States. Our experienced developer team creates custom web applications based on the client's ideas.",
      button: 'Web Application',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK434en_4j4RGoexRDEga8JJu-a_FqFDsIZQ&usqp=CAU',
      title: 'Digital Marketing',
      text: "It's a step ahead in providing IT solutions throughout the world. Our industry's finest and most seasoned digital marketers have created a diverse range of digital marketing solutions to meet various business needs and financial restrictions.",
      button: 'Digital Marketing',
    },
    {
      photo:
        'https://media.istockphoto.com/photos/computer-programmer-working-on-laptop-picture-id1265176772?b=1&k=20&m=1265176772&s=170667a&w=0&h=IHFnvxa3kvVTuZcEfPpCSGIFA_gNT7dIlGDR7eD2cFI=',
      title: 'Website Design',
      text: "We are committed to offering outstanding web design services that will assist you in establishing a competitive online presence. By building unique website design solutions, we advance both the clients' and the company's paths.",
      button: 'Web Design',
    },
    {
      photo:
        'https://www.designyourway.net/blog/wp-content/uploads/2018/12/Information-technology-big-data-collection-complex-700x438.jpg',
      title: 'Logo Design',
      text: 'Our Logo Design Services will provide your company with a brand image that will stand out in the eyes of your consumers and clients and make visual communication more understandable for you and tagline infotech.......',
      button: 'Logo Design',
    },
  ];

  public technologies: Technologies[] = [
    { photo: 'assets/django.png' },
    { photo: 'assets/flutter.png' },
    { photo: 'assets/python.png' },
    { photo: 'assets/rails.png' },
    { photo: 'assets/ruby.png' },
    {
      photo:
        'https://icons-for-free.com/iconfiles/png/512/logo+icon-1320190791807406540.png',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolYKBz7Qk3rMo98dtWl_00P0ImWZv1YY9Rw&usqp=CAU',
    },
    {
      photo:
        'https://icon2.cleanpng.com/20180805/xwk/kisspng-logo-java-runtime-environment-programming-language-java-util-concurrentmodificationexception-%C3%96mer-5b6766aaf21ab4.3339227715335031469917.jpg',
    },
    { photo: 'assets/django.png' },
    { photo: 'assets/flutter.png' },
    { photo: 'assets/python.png' },
    { photo: 'assets/rails.png' },
    { photo: 'assets/ruby.png' },
    {
      photo:
        'https://icons-for-free.com/iconfiles/png/512/logo+icon-1320190791807406540.png',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolYKBz7Qk3rMo98dtWl_00P0ImWZv1YY9Rw&usqp=CAU',
    },
    {
      photo:
        'https://icon2.cleanpng.com/20180805/xwk/kisspng-logo-java-runtime-environment-programming-language-java-util-concurrentmodificationexception-%C3%96mer-5b6766aaf21ab4.3339227715335031469917.jpg',
    },
  ];

  public blogs: Blogs[] = [
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/12/8-Best-iOS-Development-Tools-for-iOS-Developers.png',
      title: '8 Best iOS Development Tools for...',
      text: 'When it concerns the smartphone market, iOS has been one of the two most influential superpowers to be dealt with. ...',
      footer: 'Tagline Infotech',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/12/Why-Choose-Node.js-for-your-next-Web-Application-Development-Project.png',
      title: 'Why Choose Node.js for your next...',
      text: 'The rise in the number of internet sites can only suggest that the need for web application development will skyrocket ...',
      footer: 'Tagline Infotech',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/12/Learn-How-to-Create-an-App-from-Scratch-in-9-Easy-Steps.png',
      title: 'Learn How to Create an App...',
      text: 'There seems to be an application for everything, from small startup applications to eCommerce applications yeah i am doing great...',
      footer: 'Tagline Infotech',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/11/The-Most-imperious-SEO-Ranking-Factors-For-Your-Website.png',
      title: 'The Most imperious SEO Ranking Factors...',
      text: 'Are you hoping to get into the realm of SEO but having problems? With so many things to improve and will be great by you...',
      footer: 'Tagline Infotech',
    },
  ];

  public quotes: Quotes[] = [
    {
      reviewText:
        '"They understand complex technical requirements, and they have a team that quickly gets up to speed."',
      reviewWriter: 'Founder, Cimpro.io',
    },
    {
      reviewText:
        '"What I appreciate the most out of our relationship with TaglineInfotech is their commitment."',
      reviewWriter: 'Co-Founder & CTO, Sports & Activities Management Platform',
    },
    {
      reviewText:
        '"They are fulfilling my requirements over the long term and that was what we were looking for."',
      reviewWriter: 'President, Bomhof Integrated',
    },
    {
      reviewText: `"We loved that they went above and beyond to improve the tasks that we didn't even notice had issues."`,
      reviewWriter: 'Frontend Developer, Web Dev & Design Company',
    },
    {
      reviewText:
        '"The team takes up new challenges and finishes the project on time."',
      reviewWriter: 'Software Architect, Specialty Finance Company',
    },
    {
      reviewText: `"We are getting close to launch now and it's been a tremendous help to have their developers on my team."`,
      reviewWriter: 'Owner, e-Commerce Support Company',
    },
  ];

  public emp: Empdegree[] = [
    { employee: '75 +', degree: 'It Proffessionals' },
    { employee: '300 +', degree: 'Projects Completed' },
    { employee: '100k +', degree: 'Freelance Hours' },
    { employee: '5 +', degree: 'Years Of Experience' },
  ];
  public isBlue="red";
  public button: string = 'Contact Us';
  public clientSay:string="What's Our Client Say"
  public clients: Technologies[] = [
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/11/client-logo-17.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-1.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-2.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-3.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-4.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-5.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-6.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-7.png',
    },
    { photo: 'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-8.png' },
    { photo: 'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-9.png' },
    { photo: 'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-10.png ' },
    { photo: 'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-11.png' },
    { photo: 'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-12.png' },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-13.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-14.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-15.png',
    },
    {
      photo:
        'https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-16.png',
    }
  ];
}
